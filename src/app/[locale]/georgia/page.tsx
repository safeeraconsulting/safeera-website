import type {Metadata} from 'next';
import MarketPageContent from '@/components/MarketPageContent';

export const metadata: Metadata = {
  title: 'Georgia · SafeEra Property Consulting',
  description: 'The easiest entry into international property — from $50k. High rental yields in Batumi and Tbilisi.',
  alternates: {
    canonical: '/georgia',
    languages: {'uk': '/uk/georgia', 'en': '/en/georgia'},
  },
  openGraph: {
    title: 'Georgia — SafeEra Property Consulting',
    description: 'Investment property in Georgia. Batumi, Tbilisi, high rental yield.',
    images: [{url: 'https://safeeraconsulting.com/images/og-image.png', width: 1200, height: 630}],
  },
};

export default function GeorgiaPage() {
  return <MarketPageContent market="ge" hiddenMarketValue="Georgia" />;
}
