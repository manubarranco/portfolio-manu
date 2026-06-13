# manubarranco-portfolio

Personal portfolio of Manu Barranco. Product design leader — design systems and AI-native products.

Rebuild v2 (2026): Astro, deployed to Vercel. Replaces the previous Framer site.

- **Direction**: Swiss / light editorial (paper, Archivo, signal-red accent). Console/mono accents reserved for the Erneszt case study.
- **Narrative**: thesis arc Ruralvía → Flame → Erneszt (abstraction, scaled).
- **Copy rule**: no em dashes (Manu's voice); no cumulative age signals.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

- `src/pages/index.astro` — home (hero + arc + about)
- `src/pages/work/[slug].astro` — case study pages (content WIP)
- `src/pages/contact.astro` — contact
- `src/data/cases.ts` — case study metadata
- `src/components/`, `src/layouts/`, `src/styles/global.css` — design tokens & shell

Content spec lives in the LiOS repo: `job-search/portfolio.md` ("Rebuild v2").
