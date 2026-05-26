'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';

export default function ClientForm() {
  const t = useTranslations('formClient');
  const ts = useTranslations('sections');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(0);

  const markets = [t('market1'), t('market2'), t('market3'), t('market4')];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('website')) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          market: markets[selectedMarket],
          message: formData.get('message'),
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // Silently fail for now
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="client-form-section" className="bg-white text-forest py-[clamp(72px,9vw,140px)] px-[clamp(20px,5vw,80px)]">
        <div className="max-w-[1440px] mx-auto text-center py-20">
          <h3 className="font-cormorant font-medium text-[clamp(26px,2.4vw,36px)] leading-tight mb-4">{t('successTitle')}</h3>
          <p className="font-light opacity-70">{t('successBody')}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="client-form-section" className="bg-white text-forest py-[clamp(72px,9vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,88px)]">
        <div>
          {/* <div className="eyebrow mb-[22px]">{ts('clientFormEyebrow')}</div> */}
          <h2 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em] mb-6">
            {ts('clientFormTitle')}
          </h2>
          <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light opacity-80 max-w-[460px] mb-8">
            {ts('clientFormBody')}
          </p>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <a href="mailto:info@safeeraconsulting.com" className="hover:opacity-100 transition-opacity">info@safeeraconsulting.com</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="honeypot"><input type="text" name="website" tabIndex={-1} autoComplete="off" /></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{t('nameLabel')}</label>
              <input type="text" name="name" required placeholder={t('namePh')}
                className="w-full px-0 py-3 bg-transparent border-b border-forest/20 text-base font-light focus:border-forest focus:outline-none transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{t('phoneLabel')}</label>
              <input type="tel" name="phone" required placeholder={t('phonePh')}
                className="w-full px-0 py-3 bg-transparent border-b border-forest/20 text-base font-light focus:border-forest focus:outline-none transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{t('emailLabel')}</label>
            <input type="email" name="email" required placeholder={t('emailPh')}
              className="w-full px-0 py-3 bg-transparent border-b border-forest/20 text-base font-light focus:border-forest focus:outline-none transition-colors" />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{t('marketLabel')}</label>
            <div className="flex flex-wrap gap-2">
              {markets.map((m, i) => (
                <button key={m} type="button" onClick={() => setSelectedMarket(i)}
                  className={`px-5 py-2.5 rounded-full text-xs tracking-[0.12em] uppercase font-medium border transition-all ${selectedMarket === i ? 'bg-forest text-white border-forest' : 'bg-transparent text-forest/70 border-forest/20 hover:border-forest/50'}`}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{t('msgLabel')}</label>
            <textarea name="message" rows={3} placeholder={t('msgPh')}
              className="w-full px-0 py-3 bg-transparent border-b border-forest/20 text-base font-light focus:border-forest focus:outline-none transition-colors resize-none" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
            <span className="text-[11px] opacity-50 max-w-[300px]">{t('policy')}</span>
            <button type="submit" disabled={loading}
              className="inline-flex items-center gap-3 px-7 py-[18px] bg-lime text-forest font-medium text-xs tracking-[0.18em] uppercase rounded-full hover:bg-lime-soft transition-all disabled:opacity-50">
              {t('cta')}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
