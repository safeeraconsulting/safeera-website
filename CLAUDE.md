# SafeEra Property Consulting — Website Project

## Project overview
Boutique real estate investment consulting landing site. Digital business card for partners (developers) and clients (investors). Markets: Cyprus, Georgia, Dubai (coming soon).

## Tech stack
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styles:** Tailwind CSS
- **i18n:** `next-intl` — routing via `/[locale]/`, files `messages/uk.json` and `messages/en.json`
- **Hosting:** Vercel (Hobby plan)
- **Email:** Resend (domain: safeeraconsulting.com)
- **Notifications:** Telegram Bot API
- **Domain:** safeeraconsulting.com

## Project structure
```
safeera/
├── app/[locale]/          # Pages (home, cyprus, georgia, properties)
│   ├── layout.tsx
│   ├── page.tsx           # Home
│   ├── cyprus/page.tsx
│   ├── georgia/page.tsx
│   └── properties/page.tsx  # v2 placeholder
├── app/api/
│   ├── contact/route.ts   # Client form handler
│   └── partner/route.ts   # Partner form handler
├── components/            # UI components
├── messages/
│   ├── uk.json
│   └── en.json
├── public/
│   ├── images/
│   └── logo/
└── .env.local             # API keys (never commit)
```

## Environment variables (.env.local)
```
RESEND_API_KEY=<from Resend dashboard>
TELEGRAM_BOT_TOKEN=<from @BotFather>
TELEGRAM_CHAT_ID=<group chat ID>
RESEND_FROM_EMAIL=noreply@safeeraconsulting.com
NOTIFICATION_EMAIL=info@safeeraconsulting.com
```

## Design system
- **Colors:** Forest Dark `#1F2A22`, Lime Accent `#C4E040`, Off-White `#EBE4DA`, White `#FFFFFF`
- **Fonts:** Cormorant Garamond (display/H1, weight 300-400), Montserrat (body, 16-18px)
- **Style:** Dark boutique aesthetic, alternating dark/light sections, large spacing, no emojis in site text
- **Reference:** kumarawilcoxon.com

## Pages
- `/` — Home: Hero, About, Markets, Services, Why SafeEra, Partners, Client Form, Partner Form
- `/cyprus` — Cyprus market page
- `/georgia` — Georgia market page
- `/properties` — Coming Soon placeholder (v2 catalog prepared)

## Forms
- Client form (`/api/contact`): name, phone, email, market (radio), message (optional)
- Partner form (`/api/partner`): name, company, email, phone, market, message (optional)
- Both: honeypot + rate limiting, Telegram notification + Resend email, inline success (no redirect)
- Partner form messages tagged `[ПАРТНЕР]` in Telegram

## Code conventions
- TypeScript strict mode
- Components: PascalCase, one component per file
- i18n keys: dot-notation (e.g., `home.hero.title`)
- Images: WebP (quality 75-80%) in `<picture>` with JPEG fallback, lazy loading
- Mobile-first responsive: 320px, 768px, 1200px breakpoints
- No comments unless explaining non-obvious "why"

## Performance targets
- Lighthouse: Performance 85+, Accessibility 90+, SEO 85+
- FCP on mobile: under 2.5s
- Font preload for critical fonts

## SEO
- Meta title + description per page (UA + EN)
- Open Graph tags for LinkedIn/Telegram
- Canonical URLs, sitemap.xml, robots.txt

## Important notes
- v2 preparation: `PropertyCard` component written but not rendered, TypeScript type `Property` defined
- No analytics in v1 (no cookie banner needed)
- No prices, no transactions, no catalog in v1
- TOV: direct, smart but not arrogant, warm but not informal, no clichés
