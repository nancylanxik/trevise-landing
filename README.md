# Trevise Landing Page

A Next.js 14 + Tailwind CSS landing page for Trevise.

## Quick start

```bash
cd trevise-landing
npm install
npm run dev
```

Then open http://localhost:3000

## What's inside

- `app/page.tsx` — the landing page itself (single file, easy to edit)
- `app/layout.tsx` — root layout, loads Cormorant Garamond + Inter from Google Fonts
- `app/globals.css` — minimal global styles
- `tailwind.config.ts` — color palette (cream, ink, stone) and font setup
- `package.json` — Next.js 14, React 18, Tailwind 3

## Editing copy

All copy lives in `app/page.tsx`. Sections are clearly commented:

- Nav
- Hero
- Problem
- Solution (with three numbered steps)
- Stat band
- Team
- CTA / Contact
- Footer

## Deploying

The fastest path is Vercel:

1. Push this folder to a GitHub repo
2. Import the repo at vercel.com
3. Vercel auto-detects Next.js and deploys

## Design choices

- **Cream + ink** — warm off-white background with a near-black for text. Avoids the harsh white-on-black look common in tech landing pages.
- **Cormorant Garamond serif** — luxury fashion editorial feel without being heavy-handed.
- **Inter for body** — clean, modern, readable at any size.
- **Generous whitespace and large type** — leans into editorial fashion aesthetics rather than SaaS density.
