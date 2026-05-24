# SafeEra Property Consulting — Website Project

## Project overview
Boutique real estate investment consulting site. Markets: Cyprus, Georgia, Dubai. Digital business card for partners (developers) and clients (investors).

## Tech stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styles:** Tailwind CSS v4 (inline @theme, CSS variables)
- **i18n:** `next-intl` 4.12 — routing via `/[locale]/`, files `messages/uk.json` and `messages/en.json`
- **Hosting:** Vercel (Hobby plan)
- **Email:** Resend (domain: safeeraconsulting.com)
- **Notifications:** Telegram Bot API
- **Domain:** safeeraconsulting.com

## Project structure
```
safeera/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx         # Root layout (Navbar + Footer)
│   │   │   ├── page.tsx           # Home (11 sections)
│   │   │   ├── cyprus/page.tsx    # Cyprus market page
│   │   │   ├── georgia/page.tsx  # Georgia market page
│   │   │   └── dubai/page.tsx    # Dubai market page
│   │   ├── api/
│   │   │   ├── contact/route.ts  # Client form handler
│   │   │   └── partner/route.ts  # Partner form handler
│   │   └── globals.css           # Design system CSS variables
│   ├── components/
│   │   ├── Navbar.tsx            # Fixed nav, blur on scroll, mobile burger
│   │   ├── Hero.tsx              # Video placeholder + market flags
│   │   ├── Statement.tsx         # Post-hero intro, 2-column
│   │   ├── About.tsx             # Slideshow (2 slides), founders
│   │   ├── Markets.tsx           # 3 cards, Kumara-style hover
│   │   ├── Services.tsx          # 6 cards + feature service 07
│   │   ├── WhySafeera.tsx        # 6 reasons on dark bg
│   │   ├── ParallaxCta.tsx       # Parallax CTA section
│   │   ├── MidsiteVideo.tsx      # Video placeholder
│   │   ├── Partners.tsx          # Partner logos placeholder
│   │   ├── ClientForm.tsx        # Client inquiry form
│   │   ├── PartnerForm.tsx       # Partner inquiry form
│   │   ├── MarketPageContent.tsx # Shared market page (cy/ge/ae)
│   │   └── Footer.tsx            # 4-column footer
│   ├── i18n/
│   │   ├── routing.ts
│   │   └── request.ts
│   └── middleware.ts             # Russian→Ukrainian lang mapping
├── messages/
│   ├── uk.json                   # Ukrainian translations
│   └── en.json                   # English translations
├── public/
│   ├── images/
│   └── logo/
└── .env.local                    # API keys (never commit)
```

## Environment variables (.env.local)
```
RESEND_API_KEY=<from Resend dashboard>
TELEGRAM_BOT_TOKEN=<from @BotFather>
TELEGRAM_CHAT_ID=<group chat ID>
RESEND_FROM_EMAIL=noreply@safeeraconsulting.com
NOTIFICATION_EMAIL=info@safeeraconsulting.com
```

## Design system
- **Colors:** Forest `#1F2A22`, Forest-2 `#2A3A2E`, Forest-3 `#35493A`, Lime `#C4E040`, Lime-soft `#D4EC6A`, Off-White `#EBE4DA`, Off-White-2 `#F5F0E8`, Ink `#111111`
- **Fonts:** Cormorant Garamond (display/headings, 300-600), Montserrat (body, 300-700)
- **Style:** Dark boutique aesthetic, alternating dark/light sections, large spacing
- **Reference:** kumarawilcoxon.com
- **Desktop breakpoint:** 1024px (lg)

## Pages
- `/` — Home: Hero, Statement, About, Markets, Services, WhySafeera, ParallaxCta, MidsiteVideo, Partners, ClientForm, PartnerForm
- `/cyprus` — Cyprus market: hero, facts, why bullets, asset types, PR/visa, inquiry form
- `/georgia` — Georgia market: hero, facts, why bullets, asset types, ROI, inquiry form
- `/dubai` — Dubai market: hero, facts, why bullets, asset types, Golden Visa, inquiry form

## Market pages
All three use shared `MarketPageContent` component with i18n key prefix (`cy`, `ge`, `ae`). Each page has 6 sections: Hero, Fact Strip, Why, Types, Dark (Visa/ROI), Form.

## Forms
- Client form (`/api/contact`): name, phone, email, market (radio), message
- Partner form (`/api/partner`): name, company, email, phone, market, message
- Market page forms: same as client form but with hidden market value
- All: honeypot + rate limiting, Telegram notification + Resend email, inline success
- Partner form messages tagged `[ПАРТНЕР]` in Telegram

## i18n structure
- `nav.*` — navigation labels
- `common.*` — shared CTA labels
- `hero.*` — hero section
- `sections.*` — section eyebrows, titles, body
- `services.*`, `featureService.*` — service cards
- `why.*` — why SafeEra items
- `markets.*` — market card summaries (homepage)
- `cy.*`, `ge.*`, `ae.*` — market page content (all sections)
- `formClient.*`, `formPartner.*` — form labels
- `footer.*` — footer content

## Code conventions
- TypeScript strict mode
- Components: PascalCase, one component per file
- Client components: `'use client'` directive at top
- i18n: `useTranslations(namespace)` in components
- No comments unless explaining non-obvious "why"

## Important notes
- Middleware maps Russian browser language to Ukrainian
- No analytics in v1 (no cookie banner needed)
- No prices, no transactions, no catalog in v1
- TOV: direct, smart but not arrogant, warm but not informal
