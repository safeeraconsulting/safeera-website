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
import PartnerForm from '@/components/PartnerForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Statement />
      <About />
      <Markets />
      <Services />
      <WhySafeera />
      <ParallaxCta />
      <MidsiteVideo />
      <Partners />
      <ClientForm />
      <PartnerForm />
    </main>
  );
}
