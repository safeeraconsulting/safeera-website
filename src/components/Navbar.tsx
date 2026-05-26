'use client';

import {useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === '/uk' || pathname === '/en' || pathname === '/uk/' || pathname === '/en/';
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'uk';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function switchLocale(locale: string) {
    const newPath = pathname.replace(/^\/(uk|en)/, `/${locale}`);
    router.push(newPath);
  }

  const navLinks = [
    {label: t('about'), href: isHome ? '#about' : `/${currentLocale}#about`},
    {label: t('markets'), href: isHome ? '#markets' : `/${currentLocale}#markets`},
    {label: t('clients'), href: isHome ? '#client-form-section' : `/${currentLocale}#client-form-section`},
    {label: t('partners'), href: isHome ? '#partner-form-section' : `/${currentLocale}#partner-form-section`},
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ease-out px-[clamp(20px,5vw,80px)] ${scrolled ? 'py-3.5 bg-forest/85 backdrop-blur-sm text-off-white' : 'py-5 text-white'}`}>
        <Link href={`/${currentLocale}`} className="hidden lg:inline-flex items-center gap-3">
          <Image
            src="/logo/logo_mark.svg"
            alt="SafeEra"
            width={40}
            height={40}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
          <span className="font-cormorant font-normal text-[22px] tracking-[0.01em]">SafeEra</span>
        </Link>

        <ul className="hidden lg:flex gap-9 list-none items-center text-[11px] font-medium tracking-[0.18em] uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative py-1.5 opacity-90 hover:opacity-100 transition-opacity">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div className="hidden lg:inline-flex items-center text-[11px] font-medium tracking-[0.18em] uppercase">
            <button onClick={() => switchLocale('uk')} className={`px-2 py-1.5 transition-opacity ${currentLocale === 'uk' ? 'opacity-100' : 'opacity-50'}`}>UA</button>
            <span className="opacity-40">/</span>
            <button onClick={() => switchLocale('en')} className={`px-2 py-1.5 transition-opacity ${currentLocale === 'en' ? 'opacity-100' : 'opacity-50'}`}>EN</button>
          </div>

          <a href={isHome ? '#client-form-section' : `/${currentLocale}#client-form-section`}
            className="hidden lg:inline-flex items-center gap-3 px-4 py-3 text-[12px] font-medium tracking-[0.18em] uppercase border border-current rounded-full hover:bg-lime hover:text-forest hover:border-lime transition-all">
            {t('contact')}
          </a>

          <button
            className="lg:hidden w-9 h-9 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`absolute left-1 right-1 h-px bg-current transition-all duration-300 ${menuOpen ? 'top-[18px] rotate-45' : 'top-[14px]'}`} />
            <span className={`absolute left-1 right-1 h-px bg-current transition-all duration-300 ${menuOpen ? 'top-[18px] -rotate-45' : 'top-[22px]'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <aside className={`fixed inset-0 bg-forest text-off-white z-40 pt-[100px] px-[clamp(20px,5vw,80px)] pb-10 flex flex-col justify-between transition-transform duration-500 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="list-none flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-cormorant text-[38px] font-normal block py-3.5 border-b border-off-white/20"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="inline-flex items-center text-xs font-medium tracking-[0.18em] uppercase">
          <button onClick={() => { switchLocale('uk'); setMenuOpen(false); }} className={`px-2 py-1.5 ${currentLocale === 'uk' ? 'opacity-100' : 'opacity-50'}`}>UA</button>
          <span className="opacity-40">/</span>
          <button onClick={() => { switchLocale('en'); setMenuOpen(false); }} className={`px-2 py-1.5 ${currentLocale === 'en' ? 'opacity-100' : 'opacity-50'}`}>EN</button>
        </div>
      </aside>
    </>
  );
}
