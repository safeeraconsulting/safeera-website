'use client';

import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';
import Link from 'next/link';
import {useState} from 'react';

type MarketKey = 'cy' | 'ge' | 'ae';

export default function MarketPageContent({market, hiddenMarketValue}: {market: MarketKey; hiddenMarketValue: string}) {
  const t = useTranslations(market);
  const tf = useTranslations('formClient');
  const tn = useTranslations('nav');
  const locale = useLocale();

  const [form, setForm] = useState({name: '', phone: '', email: '', message: ''});
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...form, market: hiddenMarketValue, website: honeypot}),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  const bullets = [1, 2, 3, 4, 5, 6].map(i => {
    const key = i < 10 ? `0${i}` : `${i}`;
    return {num: key, title: t(`b${key}t`), desc: t(`b${key}d`)};
  });

  const types = [1, 2, 3, 4].map(i => ({
    cat: t(`t${i}cat`),
    title: t(`t${i}title`),
    price: t(`t${i}price`),
  }));

  const facts = [1, 2, 3, 4].map(i => ({
    value: t(`f${i}v`),
    label: t(`f${i}`),
  }));

  const darkRows = [1, 2, 3, 4].map(i => ({
    tag: t(`d${i}tag`),
    title: t(`d${i}t`),
    desc: t(`d${i}d`),
  }));

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-gradient-to-br from-forest to-forest/80">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <div className="mb-4 text-sm text-white/60 tracking-widest uppercase font-montserrat">
            <Link href={`/${locale}`} className="hover:text-white transition">{tn('home')}</Link>
            <span className="mx-2">/</span>
            <span>{t('crumb')}</span>
          </div>
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-white max-w-4xl mb-6">
            {t('h1')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 font-light">
            {t('lead')}
          </p>
          <a
            href="#market-form"
            className="inline-flex items-center gap-2 bg-lime text-forest px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-lime/90 transition"
          >
            {t('cta')}
            <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Fact Strip */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facts.map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-cormorant font-light text-forest mb-2">{f.value}</div>
                <div className="text-xs uppercase tracking-widest text-forest/60">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-forest/50 mb-5">{t('whyEye')}</div>
              <h2 className="font-cormorant text-3xl md:text-5xl font-light text-forest">{t('whyTitle')}</h2>
            </div>
            <div className="flex items-end">
              <p className="text-forest/80 text-lg font-light max-w-md">{t('whyLead')}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {bullets.map((b) => (
              <div key={b.num} className="flex gap-5">
                <div className="text-lime text-sm font-semibold tracking-wider pt-1">{b.num}</div>
                <div>
                  <h4 className="text-forest font-semibold mb-1">{b.title}</h4>
                  <p className="text-forest/70 text-sm font-light leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-forest/50 mb-5">{t('typesEye')}</div>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-forest">{t('typesTitle')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((tp, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-forest/10 to-forest/5 rounded-sm mb-4 flex items-center justify-center">
                  <span className="text-forest/30 text-xs uppercase tracking-wider">{tp.cat}</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-forest/50 mb-1">{tp.cat}</div>
                <h4 className="text-forest font-semibold mb-1">{tp.title}</h4>
                <div className="text-lime text-sm font-medium">{tp.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section (Visa/ROI) */}
      <section className="bg-forest text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-lime mb-5">{t('darkEye')}</div>
              <h2 className="font-cormorant text-3xl md:text-5xl font-light mb-6">{t('darkTitle')}</h2>
              <p className="text-white/70 font-light leading-relaxed">{t('darkBody')}</p>
              {market === 'ge' && (
                <p className="mt-4 text-xs text-white/40 max-w-sm">{t('darkDisc')}</p>
              )}
            </div>
            <div className="space-y-8">
              {darkRows.map((row, i) => (
                <div key={i} className="flex gap-5">
                  <div className="shrink-0 w-16 h-16 bg-lime/10 border border-lime/20 flex items-center justify-center text-lime text-sm font-semibold">
                    {row.tag}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{row.title}</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="market-form" className="bg-off-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-forest/50 mb-5">{t('formEye')}</div>
              <h2 className="font-cormorant text-3xl md:text-5xl font-light text-forest mb-6">{t('formTitle')}</h2>
              <p className="text-forest/70 text-lg font-light mb-8">{t('formBody')}</p>
              <div className="space-y-2">
                <a href={`mailto:${t('formEmail')}`} className="block text-forest/80 hover:text-lime transition text-sm">{t('formEmail')}</a>
                <a href="https://t.me/SafeEraInvest" target="_blank" rel="noopener" className="block text-forest/80 hover:text-lime transition text-sm">t.me/SafeEraInvest</a>
              </div>
            </div>

            <div>
              {status === 'success' ? (
                <div className="bg-white p-10 text-center">
                  <h3 className="font-cormorant text-2xl text-forest mb-2">{tf('successTitle')}</h3>
                  <p className="text-forest/70">{tf('successBody')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-forest/60 mb-2">{tf('nameLabel')}</label>
                      <input
                        type="text" required
                        placeholder={tf('namePh')}
                        value={form.name}
                        onChange={e => setForm(p => ({...p, name: e.target.value}))}
                        className="w-full border border-forest/15 bg-white px-4 py-3 text-forest text-sm focus:outline-none focus:border-lime transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-forest/60 mb-2">{tf('phoneLabel')}</label>
                      <input
                        type="tel" required
                        placeholder={tf('phonePh')}
                        value={form.phone}
                        onChange={e => setForm(p => ({...p, phone: e.target.value}))}
                        className="w-full border border-forest/15 bg-white px-4 py-3 text-forest text-sm focus:outline-none focus:border-lime transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-forest/60 mb-2">{tf('emailLabel')}</label>
                    <input
                      type="email" required
                      placeholder={tf('emailPh')}
                      value={form.email}
                      onChange={e => setForm(p => ({...p, email: e.target.value}))}
                      className="w-full border border-forest/15 bg-white px-4 py-3 text-forest text-sm focus:outline-none focus:border-lime transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-forest/60 mb-2">{tf('msgLabel')}</label>
                    <textarea
                      rows={3}
                      placeholder={tf('msgPh')}
                      value={form.message}
                      onChange={e => setForm(p => ({...p, message: e.target.value}))}
                      className="w-full border border-forest/15 bg-white px-4 py-3 text-forest text-sm focus:outline-none focus:border-lime transition resize-none"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xs text-forest/40">{tf('policy')}</span>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-forest/90 transition disabled:opacity-50"
                    >
                      {status === 'sending' ? '...' : tf('cta')}
                      <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
