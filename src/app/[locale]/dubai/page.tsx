import type {Metadata} from 'next';
import MarketPageContent from '@/components/MarketPageContent';

export const metadata: Metadata = {
  title: 'Dubai · SafeEra Property Consulting',
  description: '0% personal income tax. Golden Visa from $545k. Global hub with deep liquidity.',
  alternates: {
    canonical: '/dubai',
    languages: {'uk': '/uk/dubai', 'en': '/en/dubai'},
  },
  openGraph: {
    title: 'Dubai — SafeEra Property Consulting',
    description: 'Investment property in Dubai. Golden Visa, 0% income tax, premium assets.',
    images: [{url: 'https://safeeraconsulting.com/images/og-image.png', width: 1200, height: 630}],
  },
};

export default function DubaiPage() {
  return <MarketPageContent market="ae" hiddenMarketValue="Dubai" />;
}
