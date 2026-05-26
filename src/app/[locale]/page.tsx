import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import About from '@/components/About';
import Markets from '@/components/Markets';
import Services from '@/components/Services';
import WhySafeera from '@/components/WhySafeera';
import ParallaxCta from '@/components/ParallaxCta';
import MidsiteVideo from '@/components/MidsiteVideo';
import Partners from '@/components/Partners';
import ClientForm from '@/components/ClientForm';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ScrollReveal><Statement /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Markets /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ParallaxCta />
      <ScrollReveal><WhySafeera /></ScrollReveal>
      <MidsiteVideo />
      <ScrollReveal><Partners /></ScrollReveal>
      <ScrollReveal><ClientForm /></ScrollReveal>
    </main>
  );
}
