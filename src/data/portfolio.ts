import profilePhoto from '../assets/profile.png'

export type SectionEntry = {
  id: string
  title: string
  body: string
  href?: string
  subtitle?: string
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
    body: 'Full stack software engineer from Pakistan. I build scalable SaaS platforms, ERP systems, and production web apps — from FastAPI and Django backends to React and Next.js frontends. Currently developing a multi-tenant POS/ERP at Devvibe. BS Software Engineering, NUST.',
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
        subtitle: 'MERN Stack Developer · Jan 2026 – Present',
        body: 'Building a multi-tenant POS/ERP (sales, inventory, accounting, purchasing) with React, Node.js/Express, PostgreSQL, and Prisma. Tax compliance (FBR/PRA), invoicing, barcode scanning, batch/expiry tracking, and automated journal entries.',
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
    body: 'Production systems across ERP, healthcare, e-commerce, and games — backend APIs, databases, payments, and full-stack delivery.',
    entries: [
      {
        id: 'pos-erp',
        title: 'Multi-tenant POS / ERP',
        body: 'Sales, inventory, accounting, and purchasing for multi-tenant businesses. React frontend with Node.js/Express, PostgreSQL, and Prisma. Tax compliance, invoicing, barcode scanning, batch tracking, and automated journal entries.',
        href: 'https://github.com/muhammadsaleh14',
      },
      {
        id: 'patient-management',
        title: 'Patient Management System',
        body: 'Healthcare platform for patient records, visits, and prescriptions. Next.js and Django backend with Prisma-backed APIs and a structured database schema.',
        href: 'https://github.com/muhammadsaleh14/patientManagement',
      },
      {
        id: 'grid-puzzle',
        title: 'Grid Puzzle Game',
        body: 'Memory-based puzzle game built in Godot with procedural grid generation, game state logic, and randomized patterns.',
        href: 'https://github.com/muhammadsaleh14/GridPuzzleGameGodot',
      },
      {
        id: 'mainstore',
        title: 'Mainstore',
        body: 'TypeScript e-commerce application with modern storefront patterns, product management, and a production-oriented architecture.',
        href: 'https://github.com/muhammadsaleh14/mainstore',
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
