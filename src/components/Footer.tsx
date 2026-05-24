import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-forest text-off-white pt-[clamp(72px,9vw,120px)] pb-8 px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        <div>
          <div className="font-cormorant text-2xl font-normal mb-3">SafeEra</div>
          <div className="text-[11px] tracking-[0.18em] uppercase opacity-60">{t('tagline')}</div>
          <div className="mt-7 text-[11px] opacity-50 tracking-[0.18em] uppercase">{t('builtIn')}</div>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.22em] uppercase font-medium text-lime mb-5">{t('nav')}</h4>
          <ul className="list-none flex flex-col gap-3 text-sm font-light opacity-70">
            <li><Link href={`/${locale}`} className="hover:opacity-100 transition-opacity">{tn('home')}</Link></li>
            <li><Link href={`/${locale}/cyprus`} className="hover:opacity-100 transition-opacity">{tn('cyprus')}</Link></li>
            <li><Link href={`/${locale}/georgia`} className="hover:opacity-100 transition-opacity">{tn('georgia')}</Link></li>
            <li><Link href={`/${locale}/dubai`} className="hover:opacity-100 transition-opacity">{tn('dubai')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.22em] uppercase font-medium text-lime mb-5">{t('contact')}</h4>
          <ul className="list-none flex flex-col gap-3 text-sm font-light opacity-70">
            <li><a href="mailto:info@safeeraconsulting.com" className="hover:opacity-100 transition-opacity">info@safeeraconsulting.com</a></li>
            <li><a href="https://t.me/SafeEraInvest" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Telegram</a></li>
            <li><a href="https://linkedin.com/company/safeera-property-consulting" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.22em] uppercase font-medium text-lime mb-5">{t('legal')}</h4>
          <ul className="list-none flex flex-col gap-3 text-sm font-light opacity-70">
            <li><a href="#" className="hover:opacity-100 transition-opacity">{t('privacy')}</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">{t('terms')}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-off-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] opacity-40 tracking-[0.06em]">
        <span>{t('copy')}</span>
        <span>v1.0 · 2026</span>
      </div>
    </footer>
  );
}
