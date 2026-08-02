# Siddarth P P — Portfolio (Next.js)

A big, kinetic-type portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion — no photo, lots of scroll-driven motion.

## What's animated

- **Hero** — huge stacked headline that parallax-scrolls in opposite
  directions as you scroll, plus an infinite marquee of your tech keywords.
- **Scroll progress bar** — thin accent line across the top that fills as
  you scroll the page.
- **Scrollspy nav** — the underline under the active nav link slides
  smoothly to match whichever section is in view.
- **Cursor spotlight** — a soft glow follows the pointer on desktop.
- **Section reveals** — every section fades/slides in the first time it
  enters the viewport (`components/Reveal.tsx`), with staggered delays on
  lists.
- **Expandable projects** — each project row expands into a short case
  study on click, animated with Framer Motion's height/opacity transition.
- **Tech stack marquees** — two rows of your stack scrolling in opposite
  directions.
- **Count-up stats** — numbers animate up from 0 the first time they
  scroll into view.
- **Dark / light toggle** — top-right button, persisted in `localStorage`,
  with no flash-of-wrong-theme on reload.

Everything respects `prefers-reduced-motion` and falls back to instant,
static states.

## Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx      # fonts, metadata, theme-init script
│   ├── page.tsx        # assembles all sections
│   └── globals.css     # design tokens (CSS vars) + marquee keyframes
├── components/         # one file per section/animation
├── lib/useTheme.ts      # dark/light hook
└── public/              # put resume.pdf here
```

## Before you deploy — edit these

1. **`components/Contact.tsx`** — replace `EMAIL`, `GITHUB`, `LINKEDIN` at
   the top of the file with your real details.
2. **`public/resume.pdf`** — add your resume (linked from the contact
   section's "Resume" link).
3. **`components/Projects.tsx`** — swap in your real GitHub/demo URLs
   (currently `#` placeholders) and edit the descriptions/tags as needed.
4. **`components/About.tsx`** — personalize the bio paragraphs and the
   "Quick facts" panel (location, status, etc).
5. **`components/Stats.tsx`** — the counts (4 projects, 7 tools) are pulled
   from the content above; update if you add/remove projects or skills.

## Running locally

```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Building for production

```bash
npm run build
npm start
```

## Deploying

**Vercel (recommended, zero config for Next.js)**
```bash
npm i -g vercel
vercel
```

**Netlify** — connect the repo and set build command `npm run build`,
publish directory `.next` (Netlify's Next.js runtime handles the rest).

## Notes

- Fonts (`Anton`, `Space Grotesk`, `JetBrains Mono`) load via `next/font/google`
  at build time — an internet connection is required during `npm run build`.
- No images anywhere by design — the whole thing is typographic/motion-driven.
- Tailwind theme colors are wired to CSS variables in `globals.css`, so the
  entire palette (dark by default, light on toggle) can be restyled by
  editing the two `:root` blocks there.
