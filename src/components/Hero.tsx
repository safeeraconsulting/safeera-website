'use client';

import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const videoSrc = locale === 'en' ? '/video/hero-en.mp4' : '/video/hero-uk.mp4';

  return (
    <section className="min-h-screen relative text-white overflow-hidden isolate">
      {/* Video background (desktop) / gradient fallback (mobile) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile fallback gradient */}
        <div className="absolute inset-0 h-full bg-gradient-to-br from-[#2a2a26] via-[#1b231d] to-[#0e1410] lg:hidden" />
        {/* Desktop video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,27,22,0.25)] via-[rgba(20,27,22,0.05)] to-[rgba(20,27,22,0.55)] z-[1]" />
      </div>

      {/* Bottom meta: markets + scroll indicator */}
      <div className="absolute bottom-8 left-[clamp(20px,5vw,80px)] right-[clamp(20px,5vw,80px)] flex justify-between items-end gap-6 z-[2] pointer-events-none">
        <div className="flex gap-7 items-center text-[11px] font-medium tracking-[0.18em] uppercase flex-wrap pointer-events-auto">
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
