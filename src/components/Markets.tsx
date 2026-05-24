import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useLocale} from 'next-intl';

const marketData = [
  {key: 'cyprus', href: '/cyprus', index: '01', flag: 'CY', image: '/images/cyprus.jpg'},
  {key: 'georgia', href: '/georgia', index: '02', flag: 'GE', image: '/images/georgia.jpg'},
  {key: 'dubai', href: '/dubai', index: '03', flag: 'AE', image: '/images/dubai.jpg'},
];

export default function Markets() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="markets" className="bg-off-white text-forest py-[clamp(72px,9vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-[clamp(48px,6vw,80px)] items-end">
          <div>
            <div className="eyebrow mb-[22px]">{t('sections.marketsEyebrow')}</div>
            <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em]">
              {t('sections.marketsTitle')}
            </h2>
          </div>
          <div>
            <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed opacity-80 max-w-[460px]">
              {t('sections.marketsLead')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {marketData.map((market) => (
            <Link
              key={market.key}
              href={`/${locale}${market.href}`}
              className="group relative overflow-hidden aspect-[3/4] flex flex-col justify-end"
            >
              {/* Background photo */}
              <img
                src={market.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-[6px] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />

              {/* Index + Flag */}
              <span className="absolute top-5 left-5 text-[10px] tracking-[0.22em] uppercase text-white/50 z-10">
                {market.index} / Market
              </span>
              <span className="absolute top-5 right-5 text-[11px] tracking-[0.18em] uppercase text-white/70 font-medium z-10">
                {market.flag}
              </span>

              {/* Content */}
              <div className="relative z-10 p-6 transition-transform duration-500 group-hover:-translate-y-5">
                <h3 className="font-cormorant font-normal text-[clamp(32px,3vw,48px)] text-white mb-2">
                  {t(`markets.${market.key}.name`)}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed max-w-[280px]">
                  {t(`markets.${market.key}.sub`)}
                </p>
              </div>

              {/* Reveal CTA */}
              <div className="relative z-10 px-6 pb-6 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-lime font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                <span>{t('common.learnMore')}</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
