import {useTranslations} from 'next-intl';

export default function PropertiesPage() {
  const t = useTranslations('properties');

  return (
    <main>
      <section className="min-h-[60vh] flex items-center justify-center bg-forest-dark text-white">
        <div className="text-center max-w-3xl px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-white/70 font-montserrat font-light">
            {t('subtitle')}
          </p>
        </div>
      </section>
    </main>
  );
}
