import type {Metadata} from 'next';
import MarketPageContent from '@/components/MarketPageContent';

export const metadata: Metadata = {
  title: 'Cyprus · SafeEra Property Consulting',
  description: 'EU jurisdiction. Permanent Residency from €300k. Stable market with English-language legal system.',
};

export default function CyprusPage() {
  return <MarketPageContent market="cy" hiddenMarketValue="Cyprus" />;
}
