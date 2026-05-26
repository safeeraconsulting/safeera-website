import type {Metadata} from 'next';
import MarketPageContent from '@/components/MarketPageContent';

export const metadata: Metadata = {
  title: 'Cyprus · SafeEra Property Consulting',
  description: 'EU jurisdiction. Permanent Residency from €300k. Stable market with English-language legal system.',
  alternates: {
    canonical: '/cyprus',
    languages: {'uk': '/uk/cyprus', 'en': '/en/cyprus'},
  },
  openGraph: {
    title: 'Cyprus — SafeEra Property Consulting',
    description: 'Investment property in Cyprus. PRP, branded residences, off-plan.',
    images: [{url: 'https://safeeraconsulting.com/images/og-image.png', width: 1200, height: 630}],
  },
};

export default function CyprusPage() {
  return <MarketPageContent market="cy" hiddenMarketValue="Cyprus" />;
}
