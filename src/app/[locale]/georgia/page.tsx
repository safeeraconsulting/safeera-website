import type {Metadata} from 'next';
import MarketPageContent from '@/components/MarketPageContent';

export const metadata: Metadata = {
  title: 'Georgia · SafeEra Property Consulting',
  description: 'The easiest entry into international property — from $50k. High rental yields in Batumi and Tbilisi.',
};

export default function GeorgiaPage() {
  return <MarketPageContent market="ge" hiddenMarketValue="Georgia" />;
}
