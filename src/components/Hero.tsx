'use client';

import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const videoSrc = locale === 'en' ? '/video/hero-en.mp4' : '/video/hero-uk.mp4';

  return (
    <section className="h-dvh relative text-white overflow-hidden isolate">
      {/* Video background (desktop) / still image (mobile) */}
      <div className="absolute inset-0 z-0">
        {/* Desktop video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Mobile still image with logo */}
        <div className="absolute inset-0 z-10 lg:hidden">
          <img src="/images/hero-still.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-[12vh] left-0 right-0 flex justify-center">
            <img src="/logo/full_logo.svg" alt="SafeEra" className="w-[80%] max-w-[420px]" />
          </div>
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,27,22,0.25)] via-[rgba(20,27,22,0.05)] to-[rgba(20,27,22,0.55)] z-[1]" />
      </div>

      {/* Bottom meta: markets + scroll indicator — pinned to bottom of viewport */}
      <div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-[clamp(20px,5vw,80px)] md:right-[clamp(20px,5vw,80px)] flex justify-between items-end gap-4 z-20 pointer-events-none">
        <div className="flex gap-3 md:gap-7 items-center text-[10px] md:text-[11px] font-medium tracking-[0.14em] md:tracking-[0.18em] uppercase pointer-events-auto">
          <span>CY · {t('cyprus')}</span>
          <span className="w-1 h-1 bg-current rounded-full opacity-50" />
          <span>GE · {t('georgia')}</span>
          <span className="w-1 h-1 bg-current rounded-full opacity-50" />
          <span>AE · {t('dubai')}</span>
        </div>
        <div className="hidden md:inline-flex flex-col items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase opacity-70 pointer-events-auto">
          <span>{t('scroll')}</span>
          <span className="w-px h-14 bg-current relative overflow-hidden">
            <span className="absolute top-[-56px] left-0 w-px h-14 bg-lime animate-[scrollLine_2.4s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>
    </section>
  );
}
