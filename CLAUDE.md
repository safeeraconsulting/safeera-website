# SafeEra Property Consulting — Website Project

## Project overview
Boutique real estate investment consulting site. Markets: Cyprus, Georgia, Dubai. Digital business card for partners (developers) and clients (investors).
Founders: Вікторія (marketing, client experience) and Крістіна (legal, partner network).

## Tech stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styles:** Tailwind CSS v4 (inline @theme, CSS variables)
- **i18n:** `next-intl` 4.12 — routing via `/[locale]/`, files `messages/uk.json` and `messages/en.json`
- **Hosting:** Vercel (Hobby plan), deploy: `npx vercel --prod`
- **Email:** Resend (domain: safeeraconsulting.com)
- **Notifications:** Telegram Bot API
- **Domain:** safeeraconsulting.com
- **Repo:** github.com/safeeraconsulting/safeera-website (GitHub account: `safeeraconsulting`)

## Project structure
```
safeera/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx         # Root layout (Navbar + Footer)
│   │   │   ├── page.tsx           # Home (10 sections)
│   │   │   ├── cyprus/page.tsx    # Cyprus market page
│   │   │   ├── georgia/page.tsx  # Georgia market page
│   │   │   └── dubai/page.tsx    # Dubai market page
│   │   ├── api/
│   │   │   ├── contact/route.ts  # Client form handler
│   │   │   └── partner/route.ts  # Partner form handler
│   │   └── globals.css           # Design system CSS variables
│   ├── components/
│   │   ├── Navbar.tsx            # Fixed nav, blur on scroll, mobile burger; logo hidden on mobile
│   │   ├── Hero.tsx              # Desktop: video bg; Mobile: hero-still.png + full_logo.svg overlay
│   │   ├── Statement.tsx         # Post-hero intro, 2-column
│   │   ├── About.tsx             # Founder photos + expand/collapse text
│   │   ├── Markets.tsx           # 3 market cards with hover
│   │   ├── Services.tsx          # 6 service cards (grid with 1px dividers)
│   │   ├── ParallaxCta.tsx       # Parallax CTA with parallax-cta.png background
│   │   ├── WhySafeera.tsx        # 6 reasons on dark bg (grid with 1px dividers)
│   │   ├── MidsiteVideo.tsx      # Video section
│   │   ├── Partners.tsx          # Partner CTA title + body + form (no intro block)
│   │   ├── ClientForm.tsx        # Client inquiry form (5 market options)
│   │   ├── MarketPageContent.tsx # Shared market page component (cy/ge/ae)
│   │   └── Footer.tsx            # 4-column footer
│   ├── i18n/
│   │   ├── routing.ts            # locales: ['uk', 'en'], default: 'uk'
│   │   └── request.ts
│   └── middleware.ts             # Russian→Ukrainian lang mapping
├── messages/
│   ├── uk.json                   # Ukrainian translations
│   └── en.json                   # English translations
├── public/
│   ├── images/
│   │   ├── hero-still.png        # Mobile hero background
│   │   ├── parallax-cta.png      # Parallax section background
│   │   ├── founder-kristina.png  # Square photo, About section
│   │   ├── founder-viktoriia.png # Square photo, About section
│   │   ├── cyprus.jpg, georgia.jpg, dubai.jpg  # Market page heroes
│   │   ├── cyprus-matt.png, georgia-matt.png, dubai-matt.png  # Market card images
│   │   ├── types-cy/            # Cyprus property type images (4)
│   │   ├── types-ge/            # Georgia property type images (4)
│   │   └── types-ae/            # Dubai property type images (4)
│   ├── logo/
│   │   ├── logo_mark.svg        # Shield icon (navbar)
│   │   ├── full_logo.svg        # Full logo with text (mobile hero)
│   │   └── full_logo.png
│   └── video/
│       ├── hero-uk.mp4          # Ukrainian hero video (desktop)
│       └── hero-en.mp4          # English hero video (desktop)
└── .env.local                    # API keys (NEVER commit)
```

## Environment variables (.env.local)
```
RESEND_API_KEY=<from Resend dashboard>
TELEGRAM_BOT_TOKEN=<from @BotFather>
TELEGRAM_CHAT_ID=<group chat ID>
RESEND_FROM_EMAIL=noreply@safeeraconsulting.com
NOTIFICATION_EMAIL=info@safeeraconsulting.com
```
**NEVER commit .env.local to git.** `.gitignore` is configured to exclude it.

## Design system
- **Colors:** Forest `#1F2A22`, Forest-2 `#2A3A2E`, Forest-3 `#35493A`, Lime `#C4E040`, Lime-soft `#D4EC6A`, Off-White `#EBE4DA`, Off-White-2 `#F5F0E8`, Ink `#111111`
- **Fonts:** Cormorant Garamond (display/headings, 300-600), Montserrat (body, 300-700)
- **Style:** Dark boutique aesthetic, alternating dark/light sections, large spacing
- **Reference:** kumarawilcoxon.com
- **Desktop breakpoint:** 1024px (lg)

## Homepage section order
```
Hero → Statement → About → Markets → Services → ParallaxCta → WhySafeera → MidsiteVideo → Partners → ClientForm
```

## Key UI decisions (client-approved)

### Hero section
- **Desktop:** Background video (locale-dependent: hero-uk.mp4 / hero-en.mp4)
- **Mobile:** Static image `hero-still.png` with `full_logo.svg` centered overlay
- Section uses `h-dvh` to fill exact device viewport
- Logo positioned at `top-[12vh]` from top edge (over blue sea area)
- Market labels (CY/GE/AE) pinned to `bottom-6` with `z-20`
- Navbar logo+text hidden on mobile (`hidden lg:inline-flex`), only burger menu visible

### About section
- Two founder photos (square, `object-bottom` to keep feet visible, crop from top)
- Text has expand/collapse using CSS `grid-template-rows` animation (`grid-rows-[0fr]` → `grid-rows-[1fr]`)
- Eyebrow commented out (preserved for easy restore)

### Section eyebrows
All section eyebrows are **commented out** (not deleted) so they can be easily restored. Client decision — they may want them back later.
Pattern: `{/* <div className="eyebrow ...">{t('...')}</div> */}`

### Market pages (MarketPageContent.tsx)
- Shared component for Cyprus, Georgia, Dubai using i18n key prefix
- Property type images stored in `types-cy/`, `types-ge/`, `types-ae/`
- Dark section row counts: `{cy: 3, ge: 4, ae: 3}`
- 4 eyebrows commented out (whyEye, typesEye, darkEye, formEye)

### Grid dividers pattern
Services and WhySafeera use `gap-px` with colored background for 1px divider lines between cards.

### Partners section
Single 2-column layout: CTA title + body + email on left, form on right. No intro block above.

### Footer
- 4-column grid, no version badge
- Copyright text only, centered

## Forms
- Client form (`/api/contact`): name, phone, email, market (5 options: Cyprus, Georgia, Dubai, Turkey, Other), message
- Partner form (`/api/partner`): name, company, email, phone, market (4 options), message
- Market page forms: same fields with hidden market value
- All forms: honeypot anti-spam, Telegram notification + Resend email, inline success state
- Partner form messages tagged `[ПАРТНЕР]` in Telegram

## i18n structure
- `nav.*` — navigation labels
- `common.*` — shared CTA labels
- `hero.*` — hero section (market country names, scroll label)
- `sections.*` — section titles, body text (eyebrow keys preserved but commented out in JSX)
- `services.s01-s06.*` — service cards (num, title, desc)
- `why.w01-w06.*` — why SafeEra items (title, desc)
- `markets.*` — market card summaries (homepage)
- `cy.*`, `ge.*`, `ae.*` — market page content (all sections: hero, facts, why bullets, types, dark, form)
- `formClient.*`, `formPartner.*` — form labels, placeholders, market options, success messages
- `footer.*` — footer content

## Code conventions
- TypeScript strict mode
- Components: PascalCase, one component per file
- Client components: `'use client'` directive at top
- i18n: `useTranslations(namespace)` in components
- No comments unless explaining non-obvious "why"
- Eyebrows hidden via HTML comments, not deletion

## Git & deployment
- GitHub account: `safeeraconsulting` (must be active: `gh auth switch --user safeeraconsulting`)
- Second account `ReSelf-NewProject` may interfere — always verify with `gh auth status`
- Deploy: `npx vercel --prod` from project root
- Branch: `main` only

## Important notes
- Middleware maps Russian browser language to Ukrainian
- No analytics in v1 (no cookie banner needed)
- No prices, no transactions, no catalog in v1
- TOV: direct, smart but not arrogant, warm but not informal
- Don't build pages/UI until design is approved by client
- `preload="none"` on hero video prevents mobile download
