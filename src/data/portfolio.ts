import profilePhoto from '../assets/profile.png'
import gridMainMenu from '../assets/grid-puzzle/main_menu.png'
import gridLevelSelect from '../assets/grid-puzzle/level_select.png'
import gridMemorize from '../assets/grid-puzzle/gameplay_memorize.png'
import gridResult from '../assets/grid-puzzle/gameplay_result.png'
import llmEmptyState from '../assets/llm-context-builder/empty-state.jpg'
import llmProjectLoaded from '../assets/llm-context-builder/project-loaded.jpg'
import mainstoreDashboard from '../assets/mainstore/admin-dashboard.png'
import mainstoreProducts from '../assets/mainstore/admin-products.png'
import mainstoreCategories from '../assets/mainstore/admin-categories.png'
import mainstoreUsers from '../assets/mainstore/admin-users.png'

export type SectionEntry = {
  id: string
  title: string
  body: string
  href?: string
  subtitle?: string
  image?: string
  imageAlt?: string
  entries?: SectionEntry[]
}

export type PortfolioSection = {
  id: string
  title: string
  body: string
  image?: string
  imageAlt?: string
  entries?: SectionEntry[]
  links?: { label: string; href: string }[]
}

export const sections: PortfolioSection[] = [
  {
    id: 'about',
    title: 'Muhammad Saleh',
    body: 'Full stack software engineer from Pakistan. I build scalable SaaS platforms, ERP systems, and production web apps — from FastAPI and Django backends to React and Next.js frontends. Previously worked on a multi-tenant POS/ERP at Devvibe. BS Software Engineering, NUST.',
    image: profilePhoto,
    imageAlt: 'Muhammad Saleh',
  },
  {
    id: 'experience',
    title: 'Experience',
    body: 'Full-stack roles building production ERP, POS, and client applications — from multi-tenant platforms to payments and cloud backends.',
    entries: [
      {
        id: 'devvibe',
        title: 'Devvibe',
        subtitle: 'MERN Stack Developer · Jan 2026 – Jul 2026',
        body: 'Worked on a multi-tenant POS/ERP (sales, inventory, accounting, purchasing) with React, Node.js/Express, PostgreSQL, and Prisma. Contributed to tax compliance (FBR/PRA), invoicing, barcode scanning, batch/expiry tracking, and automated journal entries.',
      },
      {
        id: 'freelance',
        title: 'Freelance',
        subtitle: 'Full Stack Developer',
        body: 'Integrated Firebase (Auth, Firestore, Cloud Functions), migrated a mobile app to web with React and Laravel, and shipped Stripe payment flows for secure transaction processing.',
      },
    ],
  },
  {
    id: 'work',
    title: 'Work',
    body: 'Production systems across ERP, healthcare, e-commerce, and developer tooling — APIs, desktop apps, and full-stack delivery.',
    entries: [
      {
        id: 'portfolio-site',
        title: 'Portfolio',
        subtitle: 'React · Vite · Tailwind · Cloudflare Workers',
        body: 'This site — a no-scroll portfolio with a dot-navigation UI, nested project screenshots, keyboard controls, and responsive mobile layout. Deployed as a static Worker on Cloudflare.',
        href: 'https://portfolio.salehmuhammadjahanzeb.workers.dev',
      },
      {
        id: 'pos-erp',
        title: 'Multi-tenant POS / ERP',
        body: 'Contributed to a multi-tenant POS/ERP for sales, inventory, accounting, and purchasing. Worked across the React frontend and Node.js/Express backend with PostgreSQL and Prisma — including tax compliance, invoicing, barcode scanning, batch tracking, and automated journal entries.',
        href: 'https://github.com/muhammadsaleh14',
      },
      {
        id: 'patient-management',
        title: 'Patient Management System',
        body: 'Healthcare platform for patient records, visits, and prescriptions. Next.js and Django backend with Prisma-backed APIs and a structured database schema.',
        href: 'https://github.com/muhammadsaleh14/patientManagement',
      },
      {
        id: 'llm-context-builder',
        title: 'LLM Context Builder',
        subtitle: 'Python · PySide6 desktop app',
        body: 'Desktop app that turns selected project files into a single text file you can paste into an LLM chat. Checkbox file tree, live selection count, name filter, .gitignore support, global ignore patterns, per-project memory, clipboard export, and binary-safe generation.',
        href: 'https://github.com/muhammadsaleh14/llm_context_builder',
        entries: [
          {
            id: 'llm-empty',
            title: 'Empty state',
            body: 'Open a project directory to get started — then mark files in the tree and generate a concatenated context document.',
            image: llmEmptyState,
            imageAlt: 'LLM Context Builder empty state screen',
          },
          {
            id: 'llm-loaded',
            title: 'Project loaded',
            body: 'Project loaded with a checkbox tree. Filter by name, respect .gitignore, choose an output path, optionally copy to clipboard, then generate.',
            image: llmProjectLoaded,
            imageAlt: 'LLM Context Builder with a project loaded',
          },
        ],
      },
      {
        id: 'mainstore',
        title: 'MainStore',
        subtitle: 'Astro · React · Hono · Cloudflare Workers',
        body: 'Full-stack e-commerce platform with an Astro SSR storefront, React + Ant Design admin dashboard, and a Hono API on Cloudflare Workers. Neon Postgres, Drizzle ORM, Clerk auth with customer/manager/admin roles, catalog CRUD, variants, categories, checkout, and order management.',
        href: 'https://github.com/muhammadsaleh14/mainstore',
        entries: [
          {
            id: 'mainstore-dashboard',
            title: 'Dashboard',
            body: 'Admin overview of store activity — the staff home for managing the catalog and operations.',
            image: mainstoreDashboard,
            imageAlt: 'MainStore admin dashboard overview',
          },
          {
            id: 'mainstore-products',
            title: 'Products',
            body: 'Product catalog management with variants — create, edit, and organize inventory from the admin app.',
            image: mainstoreProducts,
            imageAlt: 'MainStore product catalog management',
          },
          {
            id: 'mainstore-categories',
            title: 'Categories',
            body: 'Category hierarchy management for structuring the storefront catalog.',
            image: mainstoreCategories,
            imageAlt: 'MainStore category hierarchy management',
          },
          {
            id: 'mainstore-users',
            title: 'Users',
            body: 'User and role management — assign customer, manager, or admin access via Clerk-synced accounts.',
            image: mainstoreUsers,
            imageAlt: 'MainStore user and role management',
          },
        ],
      },
    ],
  },
  {
    id: 'games',
    title: 'Games',
    body: 'Games and interactive projects — play them on the Game Collection site. Grid Puzzle is live now; more titles will follow.',
    links: [
      {
        label: 'Game Collection',
        href: 'https://game-collection.salehmuhammadjahanzeb.workers.dev/',
      },
      {
        label: 'Play Grid Puzzle',
        href: 'https://game-collection.salehmuhammadjahanzeb.workers.dev/play/grid-puzzle',
      },
    ],
    entries: [
      {
        id: 'grid-puzzle',
        title: 'Grid Puzzle',
        subtitle: 'Godot 4.6 · Mobile memory puzzle',
        body: 'A mobile-first memory puzzle: memorize a scattered tile pattern, then tap it back before you forget. 24-level campaign with rising difficulty (3×3 → 7×7), progress save, Free Play unlock, clear correct/wrong/missed feedback, and AdMob-ready Android/iOS builds.',
        href: 'https://game-collection.salehmuhammadjahanzeb.workers.dev/play/grid-puzzle',
        entries: [
          {
            id: 'grid-menu',
            title: 'Main menu',
            body: 'Start the campaign, or unlock Free Play and Settings after finishing all 24 levels.',
            image: gridMainMenu,
            imageAlt: 'Grid Puzzle main menu screen',
          },
          {
            id: 'grid-levels',
            title: 'Level select',
            body: 'Linear unlock progression: cleared levels show in green, the current challenge is highlighted, and locked levels stay dimmed.',
            image: gridLevelSelect,
            imageAlt: 'Grid Puzzle level select screen',
          },
          {
            id: 'grid-memorize',
            title: 'Memorize',
            body: 'Watch the highlighted tiles, then recreate the pattern when the countdown ends.',
            image: gridMemorize,
            imageAlt: 'Grid Puzzle memorize phase gameplay',
          },
          {
            id: 'grid-result',
            title: 'Results',
            body: 'After submit: green = correct, red = wrong, blue = missed. Retry, replay the same pattern, or jump back to the level list.',
            image: gridResult,
            imageAlt: 'Grid Puzzle result feedback screen',
          },
        ],
      },
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    body: 'Python, TypeScript, JavaScript, React, Next.js, FastAPI, Django, Node.js, Express, PostgreSQL, MongoDB, Prisma, Docker, AWS, Cloudflare Workers, Firebase, Supabase, Stripe, Git, and GitHub Actions.',
  },
  {
    id: 'contact',
    title: 'Contact',
    body: 'Open to full-stack roles, freelance work, and interesting product builds. Based in Pakistan, available remotely.',
    links: [
      { label: 'Email', href: 'mailto:salehmuhammadjahanzeb@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/muhammadsaleh14' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-saleh-a91672238/' },
      { label: 'Resume', href: '/resume.pdf' },
    ],
  },
]

function collectEntryImages(entries: SectionEntry[] = []): string[] {
  return entries.flatMap((entry) => [
    ...(entry.image ? [entry.image] : []),
    ...collectEntryImages(entry.entries),
  ])
}

/** All portfolio image URLs — used to preload so detail views open instantly. */
export const portfolioImages = [
  ...new Set(
    sections.flatMap((section) => [
      ...(section.image ? [section.image] : []),
      ...collectEntryImages(section.entries),
    ]),
  ),
]
