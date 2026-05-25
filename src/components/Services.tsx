import {useTranslations} from 'next-intl';

const serviceKeys = ['s01', 's02', 's03', 's04', 's05', 's06'] as const;

export default function Services() {
  const t = useTranslations('services');
  const ts = useTranslations('sections');
  const tc = useTranslations('common');

  return (
    <section id="services" className="bg-white text-forest py-[clamp(72px,9vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-[clamp(48px,6vw,80px)]">
          <div className="eyebrow mb-[22px]">{ts('servicesEyebrow')}</div>
          <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em] max-w-[800px]">
            {ts('servicesTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10">
          {serviceKeys.map((key) => (
            <div key={key} className="bg-white p-8 flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.22em] uppercase text-lime font-medium">{t(`${key}.num`)}</span>
              <h3 className="font-cormorant font-medium text-[clamp(22px,1.7vw,26px)] leading-tight">{t(`${key}.title`)}</h3>
              <p className="text-sm font-light leading-relaxed opacity-70">{t(`${key}.desc`)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
