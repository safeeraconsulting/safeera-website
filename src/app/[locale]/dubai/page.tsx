import type {Metadata} from 'next';
import MarketPageContent from '@/components/MarketPageContent';

export const metadata: Metadata = {
  title: 'Dubai · SafeEra Property Consulting',
  description: '0% personal income tax. Golden Visa from $545k. Global hub with deep liquidity.',
};

export default function DubaiPage() {
  return <MarketPageContent market="ae" hiddenMarketValue="Dubai" />;
}
