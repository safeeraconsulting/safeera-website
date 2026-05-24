import {useTranslations} from 'next-intl';

export default function Partners() {
  const t = useTranslations('sections');
  const tc = useTranslations('common');

  return (
    <section id="partners" className="bg-off-white text-forest py-[clamp(72px,9vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,88px)]">
        <div>
          <div className="eyebrow mb-[22px]">{t('partnersEyebrow')}</div>
          <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em] mb-6">
            {t('partnersTitle')}
          </h2>
          <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light opacity-80 max-w-[460px] mb-8">
            {t('partnersBody')}
          </p>
          <a href="#partner-form-section" className="inline-flex items-center gap-3 px-7 py-[18px] border border-forest/30 rounded-full text-xs font-medium tracking-[0.18em] uppercase hover:bg-lime hover:text-forest hover:border-lime transition-all">
            {tc('becomePartner')}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>

        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[2/1] bg-forest/5 border border-forest/10 flex items-center justify-center text-[10px] tracking-[0.18em] uppercase opacity-40">
                Partner 0{i}
              </div>
            ))}
          </div>
          <p className="text-[11px] opacity-55 mt-4 tracking-[0.06em]">
            Partner logos shown with permission. Full list available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
