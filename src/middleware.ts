import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextRequest} from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Map Russian browser language to Ukrainian
  const acceptLanguage = request.headers.get('accept-language') || '';
  if (/\bru\b/i.test(acceptLanguage) && !/\buk\b/i.test(acceptLanguage)) {
    const headers = new Headers(request.headers);
    headers.set('accept-language', acceptLanguage.replace(/\bru\b/gi, 'uk'));
    const rewritten = new NextRequest(request.url, {
      headers,
      method: request.method,
    });
    return intlMiddleware(rewritten);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(uk|en)/:path*'],
};
