'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';

export default function Partners() {
  const t = useTranslations('sections');
  const tf = useTranslations('formPartner');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(0);

  const markets = [tf('market1'), tf('market2'), tf('market3'), tf('market4')];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('website')) return;

    setLoading(true);
    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          market: markets[selectedMarket],
          message: formData.get('message'),
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="partner-form-section" className="bg-forest text-off-white py-[clamp(72px,9vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto">
        {submitted ? (
          <div className="text-center py-20">
            <h3 className="font-cormorant font-medium text-[clamp(26px,2.4vw,36px)] leading-tight mb-4">{tf('successTitle')}</h3>
            <p className="font-light opacity-70">{tf('successBody')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,88px)]">
            <div>
              <h3 className="font-cormorant font-normal text-[clamp(38px,5.2vw,72px)] leading-[1.02] tracking-[-0.015em] mb-4">
                {t('partnerCtaTitle')}
              </h3>
              <p className="text-[clamp(16px,1.15vw,18px)] leading-relaxed font-light opacity-80 max-w-[460px] mb-8">
                {t('partnerCtaBody')}
              </p>
              <a href="mailto:partners@safeeraconsulting.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">partners@safeeraconsulting.com</a>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="honeypot"><input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" aria-label="Leave empty" /></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{tf('nameLabel')}</label>
                  <input type="text" name="name" required placeholder={tf('namePh')}
                    className="w-full px-0 py-3 bg-transparent border-b border-off-white/20 text-base font-light text-off-white focus:border-off-white focus:outline-none transition-colors placeholder:text-off-white/30" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{tf('companyLabel')}</label>
                  <input type="text" name="company" required placeholder={tf('companyPh')}
                    className="w-full px-0 py-3 bg-transparent border-b border-off-white/20 text-base font-light text-off-white focus:border-off-white focus:outline-none transition-colors placeholder:text-off-white/30" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{tf('emailLabel')}</label>
                  <input type="email" name="email" required placeholder={tf('emailPh')}
                    className="w-full px-0 py-3 bg-transparent border-b border-off-white/20 text-base font-light text-off-white focus:border-off-white focus:outline-none transition-colors placeholder:text-off-white/30" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{tf('phoneLabel')}</label>
                  <input type="tel" name="phone" placeholder={tf('phonePh')}
                    className="w-full px-0 py-3 bg-transparent border-b border-off-white/20 text-base font-light text-off-white focus:border-off-white focus:outline-none transition-colors placeholder:text-off-white/30" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{tf('marketLabel')}</label>
                <div className="flex flex-wrap gap-2">
                  {markets.map((m, i) => (
                    <button key={m} type="button" onClick={() => setSelectedMarket(i)}
                      className={`px-5 py-2.5 rounded-full text-xs tracking-[0.12em] uppercase font-medium border transition-all ${selectedMarket === i ? 'bg-lime text-forest border-lime' : 'bg-transparent text-off-white/70 border-off-white/20 hover:border-off-white/50'}`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.18em] uppercase font-medium">{tf('msgLabel')}</label>
                <textarea name="message" rows={3} placeholder={tf('msgPh')}
                  className="w-full px-0 py-3 bg-transparent border-b border-off-white/20 text-base font-light text-off-white focus:border-off-white focus:outline-none transition-colors resize-none placeholder:text-off-white/30" />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                <span className="text-[11px] opacity-50 max-w-[300px]">{tf('policy')}</span>
                <button type="submit" disabled={loading}
                  className="inline-flex items-center gap-3 px-7 py-[18px] bg-lime text-forest font-medium text-xs tracking-[0.18em] uppercase rounded-full hover:bg-lime-soft transition-all disabled:opacity-50">
                  {tf('cta')}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
