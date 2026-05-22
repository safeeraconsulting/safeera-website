import {NextRequest, NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_MAP = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = RATE_LIMIT_MAP.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  RATE_LIMIT_MAP.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({error: 'Too many requests'}, {status: 429});
  }

  const body = await request.json();
  const {name, phone, email, market, message, honeypot} = body;

  if (honeypot) {
    return NextResponse.json({success: true});
  }

  if (!name || !phone || !email || !market) {
    return NextResponse.json({error: 'Missing required fields'}, {status: 400});
  }

  const telegramText = `[КЛІЄНТ] Нова заявка

Ім'я: ${name}
Телефон: ${phone}
Email: ${email}
Ринок: ${market}
${message ? `Повідомлення: ${message}` : ''}`;

  const emailHtml = `
<h2>Нова заявка від клієнта</h2>
<p><strong>Ім'я:</strong> ${name}</p>
<p><strong>Телефон:</strong> ${phone}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Ринок:</strong> ${market}</p>
${message ? `<p><strong>Повідомлення:</strong> ${message}</p>` : ''}
`;

  const results = await Promise.allSettled([
    fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramText,
          parse_mode: 'HTML',
        }),
      }
    ),
    resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `[SafeEra] Нова заявка — ${name}`,
      html: emailHtml,
    }),
  ]);

  const hasError = results.some((r) => r.status === 'rejected');
  if (hasError) {
    console.error('Notification error:', results);
  }

  return NextResponse.json({success: true});
}
