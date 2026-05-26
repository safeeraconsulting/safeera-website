import {useTranslations} from 'next-intl';

export default function ParallaxCta() {
  const t = useTranslations('sections');
  const tc = useTranslations('common');
  const tf = useTranslations('footer');

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{backgroundImage: 'url(/images/parallax-cta.png)'}}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-[clamp(20px,5vw,80px)] max-w-[720px]">
        <div className="text-[11px] tracking-[0.22em] uppercase opacity-70 mb-6">{tf('tagline')}</div>
        <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em] mb-6">
          {t('ctaTitle')}
        </h2>
        <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light opacity-80 mb-9">
          {t('ctaSub')}
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a href="#client-form-section" className="inline-flex items-center gap-3 px-7 py-[18px] bg-lime text-forest font-medium text-xs tracking-[0.18em] uppercase rounded-full hover:bg-lime-soft transition-all">
            {tc('applyClient')}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="#partner-form-section" className="inline-flex items-center gap-3 px-7 py-[18px] border border-white/30 rounded-full text-xs font-medium tracking-[0.18em] uppercase hover:bg-lime hover:text-forest hover:border-lime transition-all">
            {tc('becomePartner')}
          </a>
        </div>
      </div>
    </section>
  );
}
