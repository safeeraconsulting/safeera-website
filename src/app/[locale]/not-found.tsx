import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useLocale} from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-forest text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-[120px] md:text-[180px] font-cormorant font-light leading-none text-white/10 mb-4">
          404
        </div>
        <h1 className="font-cormorant text-3xl md:text-4xl font-light mb-4">
          {t('title')}
        </h1>
        <p className="text-white/60 font-light mb-10">
          {t('desc')}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-3 px-7 py-[18px] bg-lime text-forest font-medium text-xs tracking-[0.18em] uppercase rounded-full hover:bg-lime-soft transition-all"
        >
          {t('cta')}
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
