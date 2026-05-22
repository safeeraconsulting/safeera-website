import {useTranslations} from 'next-intl';

export default function GeorgiaPage() {
  const t = useTranslations('georgia');

  return (
    <main>
      <section className="min-h-[60vh] flex items-center justify-center bg-forest-dark text-white">
        <div className="text-center max-w-4xl px-6">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 font-montserrat font-light">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>
    </main>
  );
}
