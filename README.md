# No-Scroll Portfolio

A single-viewport personal portfolio — no page scrolling. Navigate by **dot rail**, nested project entries, and keyboard arrows. Built with React, Vite, and Tailwind CSS; deployed as a static site on Cloudflare Workers.

**Live:** [portfolio.salehmuhammadjahanzeb.workers.dev](https://portfolio.salehmuhammadjahanzeb.workers.dev)

---

## Concept

Traditional portfolios stack long scrollable sections. This site keeps everything in one composition:

- **Sections** (About, Experience, Work, Games, Skills, Contact) sit on a vertical/horizontal dot navigation.
- **Entries** drill into jobs, projects, or games within a section.
- **Children** open nested screenshots (e.g. Grid Puzzle levels, MainStore admin views).

The detail panel updates in place with a short enter animation. Images are preloaded so nested views feel instant.

---

## Stack

| Layer | Choice |
|-------|--------|
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Styles | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Lint | Oxlint |
| Hosting | Cloudflare Workers (static assets / SPA) |
| Deploy | Wrangler |

---

## Features

- **No-scroll layout** — fixed viewport; content swaps instead of scrolling the page
- **Dot navigation** — desktop rail + mobile bottom dots with entry/child sub-nav
- **Nested project screenshots** — Work and Games entries can open child image screens
- **Keyboard controls** — Arrow keys move between sections → entries → children
- **Image preloading** — all portfolio images warm on load via `portfolioImages`
- **Responsive** — portrait-friendly mobile layout; desktop side-by-side nav + detail
- **SPA deploy** — `wrangler.jsonc` serves `dist` with SPA `not_found_handling`

---

## Getting started

### Requirements

- Node.js 20+ (recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

Open the local Vite URL (usually `http://localhost:5173`).

### Scripts

| Command | What it does |
|---------|----------------|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Typecheck (`tsc -b`) + production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |
| `npm run deploy` | Build + deploy to Cloudflare Workers |
| `npm run cf:preview` | Build + run via `wrangler dev` |

---

## Project structure

```
src/
├── App.tsx                 # Renders <Portfolio />
├── main.tsx                # React entry
├── index.css               # Tailwind + global styles / motion
├── data/
│   └── portfolio.ts        # All content: sections, entries, images, links
├── assets/                 # Profile photo, project screenshots
│   ├── grid-puzzle/
│   ├── number-path/
│   ├── llm-context-builder/
│   └── mainstore/
└── components/
    ├── Portfolio.tsx           # State + keyboard navigation
    ├── PortfolioLayout.tsx     # Shell: nav + detail
    ├── DotNav.tsx              # Section dots (desktop + mobile)
    ├── Dot.tsx                 # Single nav dot
    ├── EntrySubNav.tsx         # Entry / child sub-navigation
    ├── SectionDetail.tsx       # Title, body, image, project/game link
    ├── SectionLinks.tsx        # Section-level link list (Contact, Games)
    └── PreloadPortfolioImages.tsx
```

Content lives almost entirely in **`src/data/portfolio.ts`**. UI components stay generic and read from that data.

---

## Content model

Defined in `src/data/portfolio.ts`:

```ts
PortfolioSection {
  id, title, body
  image?, imageAlt?
  entries?: SectionEntry[]
  links?: { label, href }[]
}

SectionEntry {
  id, title, body
  subtitle?, href?
  image?, imageAlt?
  entries?: SectionEntry[]   // nested children (screenshots, etc.)
}
```

### Sections today

| ID | Purpose |
|----|---------|
| `about` | Name, bio, profile photo |
| `experience` | Roles (Devvibe, Freelance) |
| `work` | Projects (Portfolio, POS/ERP, Patient Management, LLM Context Builder, MainStore) |
| `games` | Grid Puzzle, NumberPath + Game Collection links |
| `skills` | Tech list |
| `contact` | Email, GitHub, LinkedIn, resume |

`portfolioImages` is derived automatically from sections/entries so preload stays in sync when you add screenshots.

---

## Adding a project or game

1. Put screenshots under `src/assets/<project-slug>/`.
2. Import the images at the top of `src/data/portfolio.ts`.
3. Add a `SectionEntry` under `work` or `games` (optional nested `entries` for screenshot screens).
4. Optionally add a section-level `links` item (e.g. “Play …”).

Example shape (Games):

```ts
{
  id: 'number-path',
  title: 'NumberPath',
  subtitle: 'Godot 4.6 · Mobile path puzzle',
  body: '…',
  href: 'https://game-collection…/play/numberpath',
  entries: [
    {
      id: 'number-path-menu',
      title: 'Main menu',
      body: '…',
      image: numberPathMainMenu,
      imageAlt: 'NumberPath main menu screen',
    },
  ],
}
```

No component changes are required for a normal content update.

---

## Keyboard navigation

Axes are separate — horizontal and vertical never share behavior:

| Key | Behavior |
|-----|----------|
| ↑ / ↓ | Move within the current column (sections, entries, or screenshot children) |
| → | Drill in: section → first entry, or entry → first child (if any) |
| ← | Drill out: child → entry, or entry → section |

Typing targets (`input`, `textarea`, `select`, `contenteditable`) are ignored so forms are not hijacked.

---

## Deploy (Cloudflare)

Config: `wrangler.jsonc`

- Worker name: `portfolio`
- Assets directory: `./dist`
- SPA fallback enabled for client-side routing

```bash
npm run deploy
```

For a local Workers preview of the production build:

```bash
npm run cf:preview
```

Ensure you are logged into Wrangler (`npx wrangler login`) before the first deploy.

---

## Design notes

- Dark neutral UI with muted body copy; active dots and detail title carry hierarchy
- Detail swaps use `animate-detail-in` (see `index.css`)
- Screenshots use contained max-height; profile uses a circular crop
- Games entries label the CTA **Play game**; Work entries use **View project**

---

## License

Private portfolio project. Contact the author for reuse questions.
