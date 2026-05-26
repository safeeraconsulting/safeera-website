'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useRef, useState} from 'react';

export default function MidsiteVideo() {
  const t = useTranslations('sections');
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {rootMargin: '2000px'} // start loading early — ~4-5 sections ahead
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Gradient fallback — always visible until video loads */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-2 to-forest" />
      {/* Video — lazy loaded, plays on all devices */}
      {shouldLoad && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/midsite.mp4" type="video/mp4" />
        </video>
      )}
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
