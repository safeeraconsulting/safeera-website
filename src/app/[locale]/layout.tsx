import type {Metadata} from 'next';
import {Cormorant_Garamond, Montserrat} from 'next/font/google';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://safeeraconsulting.com'),
  title: 'SafeEra Property Consulting — Investment property. Built around your goal.',
  description: 'Boutique property consulting for investors entering the Cyprus, Georgia and Dubai markets. Strategy first, asset second.',
  alternates: {
    canonical: '/',
    languages: {
      'uk': '/uk',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'SafeEra Property Consulting',
    description: 'Investment property. Built around your goal. Cyprus, Georgia, Dubai.',
    url: 'https://safeeraconsulting.com',
    siteName: 'SafeEra Property Consulting',
    images: [
      {
        url: 'https://safeeraconsulting.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SafeEra Property Consulting',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeEra Property Consulting',
    description: 'Investment property. Built around your goal. Cyprus, Georgia, Dubai.',
    images: ['https://safeeraconsulting.com/images/og-image.png'],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-white text-forest font-montserrat antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
