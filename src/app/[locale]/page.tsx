import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-forest-dark text-white">
        <div className="text-center max-w-4xl px-6">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 font-montserrat font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#client-form" className="px-8 py-4 bg-lime text-forest-dark font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-lime/90 transition-colors">
              {t('hero.cta_client')}
            </a>
            <a href="#partner-form" className="px-8 py-4 border border-white/30 text-white font-montserrat font-semibold text-sm uppercase tracking-wider hover:border-lime hover:text-lime transition-colors">
              {t('hero.cta_partner')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
