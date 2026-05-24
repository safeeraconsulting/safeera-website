import {useTranslations} from 'next-intl';

const serviceKeys = ['s01', 's02', 's03', 's04', 's05', 's06'] as const;

export default function Services() {
  const t = useTranslations('services');
  const ts = useTranslations('sections');
  const tc = useTranslations('common');
  const tf = useTranslations('featureService');

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

        {/* Feature service 07 */}
        <div className="mt-5 bg-forest text-off-white p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="text-[clamp(44px,4vw,64px)] font-cormorant font-light text-lime/30">{tf('num')}</div>
          <div className="flex-1">
            <div className="font-cormorant font-medium text-[clamp(22px,1.7vw,26px)] leading-tight mb-2">{tf('title')}</div>
            <div className="text-sm font-light leading-relaxed opacity-70 max-w-[560px]">{tf('desc')}</div>
          </div>
          <a href="#client-form-section" className="inline-flex items-center gap-3 px-7 py-[18px] border border-off-white/30 rounded-full text-xs font-medium tracking-[0.18em] uppercase hover:bg-lime hover:text-forest hover:border-lime transition-all whitespace-nowrap">
            {tc('applyClient')}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
