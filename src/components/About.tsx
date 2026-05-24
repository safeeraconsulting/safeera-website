'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';

export default function About() {
  const t = useTranslations('sections');
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-white text-forest py-[var(--section-y,clamp(72px,9vw,140px))] px-[clamp(20px,5vw,80px)]" style={{'--section-y': 'clamp(72px,9vw,140px)'} as React.CSSProperties}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-[clamp(40px,6vw,88px)] items-center">
          {/* Slideshow */}
          <div className="relative aspect-square overflow-hidden">
            {/* Slide 1 */}
            <div className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-full h-full bg-gradient-to-br from-[#c8b69a] via-[#8a6e54] to-[#3a2e26]" />
            </div>
            {/* Slide 2 */}
            <div className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-full h-full bg-gradient-to-br from-[#c8b69a] via-[#8a6e54] to-[#3a2e26] hue-rotate-[20deg]" />
            </div>
            {/* Dots */}
            <div className="absolute bottom-[18px] right-5 z-10 flex gap-1.5">
              <span className={`w-[22px] h-0.5 transition-colors ${activeSlide === 0 ? 'bg-lime' : 'bg-white/40'}`} />
              <span className={`w-[22px] h-0.5 transition-colors ${activeSlide === 1 ? 'bg-lime' : 'bg-white/40'}`} />
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="eyebrow mb-7">{t('aboutEyebrow')}</div>
            <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em] mb-6">
              {t('aboutTitle1')}<br />
              <em className="italic">{t('aboutTitle2')}</em>
            </h2>

            <ul className="list-none grid grid-cols-3 gap-px bg-forest/15 my-8">
              {['tenet1', 'tenet2', 'tenet3'].map((key) => (
                <li key={key} className="bg-white py-[22px] pr-[18px] text-[11px] tracking-[0.18em] uppercase font-medium">
                  {t(key)}
                </li>
              ))}
            </ul>

            <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light mb-4 max-w-[540px]">{t('aboutP1')}</p>
            <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light mb-4 max-w-[540px]">{t('aboutP2')}</p>

            <div className="grid grid-cols-2 gap-7 mt-8 pt-8 border-t border-forest/15">
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase opacity-55 mb-1.5">{t('founder1Role')}</div>
                <div className="font-cormorant font-medium text-[clamp(22px,1.7vw,26px)] leading-tight">{t('founder1Name')}</div>
                <div className="text-sm font-light mt-1 opacity-70">{t('founder1Bio')}</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase opacity-55 mb-1.5">{t('founder2Role')}</div>
                <div className="font-cormorant font-medium text-[clamp(22px,1.7vw,26px)] leading-tight">{t('founder2Name')}</div>
                <div className="text-sm font-light mt-1 opacity-70">{t('founder2Bio')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
