'use client';

import {useTranslations} from 'next-intl';

export default function MidsiteVideo() {
  const t = useTranslations('sections');

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Mobile fallback gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-2 to-forest lg:hidden" />
      {/* Desktop video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/midsite.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-[clamp(20px,5vw,80px)] max-w-[800px]">
        <div className="text-[11px] tracking-[0.22em] uppercase text-lime opacity-95 mb-7 flex justify-center">
          SafeEra · Method
        </div>
        <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em] mb-6">
          {t('midsiteTitle')}
        </h2>
        <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light opacity-80">
          {t('midsiteSub')}
        </p>
      </div>
    </section>
  );
}
