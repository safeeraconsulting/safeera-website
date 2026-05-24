import {useTranslations} from 'next-intl';

export default function Statement() {
  const t = useTranslations('hero');

  return (
    <section className="bg-white text-forest py-[clamp(80px,10vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-[clamp(40px,6vw,96px)] items-end">
          <div>
            <div className="eyebrow mb-7">Property Consulting</div>
            <h1 className="font-cormorant font-light text-[clamp(44px,7.4vw,116px)] leading-[0.98] tracking-[-0.018em]">
              {t('title1')}<br />
              {t('title2')}{' '}
              <em className="italic font-light bg-[linear-gradient(to_top,var(--color-lime)_0%,var(--color-lime)_12%,transparent_12%)] px-1">{t('title3')}</em>{' '}
              {t('title4')}
            </h1>
          </div>
          <div>
            <p className="text-[clamp(16px,1.2vw,19px)] leading-relaxed max-w-[460px] mb-9 opacity-85 font-light">
              {t('sub')}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#client-form-section" className="inline-flex items-center gap-3 px-7 py-[18px] bg-lime text-forest font-medium text-xs tracking-[0.18em] uppercase rounded-full hover:bg-lime-soft transition-all">
                {t('ctaClient')}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a href="#partner-form-section" className="inline-flex items-center gap-3 px-7 py-[18px] border border-current rounded-full text-xs font-medium tracking-[0.18em] uppercase hover:bg-lime hover:text-forest hover:border-lime transition-all">
                {t('ctaPartner')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
