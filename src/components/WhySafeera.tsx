import {useTranslations} from 'next-intl';

const whyKeys = ['w01', 'w02', 'w03', 'w04', 'w05', 'w06'] as const;

export default function WhySafeera() {
  const t = useTranslations('why');
  const ts = useTranslations('sections');

  return (
    <section id="why" className="bg-forest text-off-white py-[clamp(72px,9vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-[clamp(48px,6vw,80px)]">
          {/* <div className="eyebrow text-lime mb-[22px]">{ts('whyEyebrow')}</div> */}
          <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em]">
            {ts('whyTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-off-white/20">
          {whyKeys.map((key, i) => (
            <div key={key} className="bg-forest p-8 flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.22em] uppercase text-lime/50 font-medium">0{i + 1}</span>
              <h3 className="font-cormorant font-medium text-[clamp(22px,1.7vw,26px)] leading-tight">{t(`${key}.title`)}</h3>
              <p className="text-sm font-light leading-relaxed opacity-60">{t(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
