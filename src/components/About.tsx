'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';
import Image from 'next/image';

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
            {/* Slide 1 — Крістіна */}
            <div className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src="/images/founder-kristina.png"
                alt={t('founder1Name')}
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-5 pt-10">
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/70 mb-1">{t('founder1Role')}</div>
                <div className="font-cormorant font-medium text-[clamp(20px,1.5vw,24px)] text-white">{t('founder1Name')}</div>
              </div>
            </div>
            {/* Slide 2 — Вікторія */}
            <div className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src="/images/founder-viktoriia.png"
                alt={t('founder2Name')}
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-5 pt-10">
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/70 mb-1">{t('founder2Role')}</div>
                <div className="font-cormorant font-medium text-[clamp(20px,1.5vw,24px)] text-white">{t('founder2Name')}</div>
              </div>
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
              {t('aboutTitle')}
            </h2>

            <ul className="list-none grid grid-cols-3 my-8">
              {['tenet1', 'tenet2', 'tenet3'].map((key, i) => (
                <li key={key} className={`py-[22px] text-[11px] tracking-[0.18em] uppercase font-medium ${i > 0 ? 'border-l border-forest/15 pl-[18px]' : 'pr-[18px]'}`}>
                  {t(key)}
                </li>
              ))}
            </ul>

            <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light mb-4 max-w-[540px]">{t('aboutP1')}</p>
            <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light mb-4 max-w-[540px]">{t('aboutP2')}</p>
            <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light mb-4 max-w-[540px]">{t('aboutP3')}</p>

          </div>
        </div>
      </div>
    </section>
  );
}
