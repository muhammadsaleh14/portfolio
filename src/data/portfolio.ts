import profilePhoto from '../assets/profile.png'

export type Project = {
  id: string
  title: string
  body: string
  href?: string
}

export type PortfolioSection = {
  id: string
  title: string
  body: string
  image?: string
  imageAlt?: string
  projects?: Project[]
  links?: { label: string; href: string }[]
}

export const sections: PortfolioSection[] = [
  {
    id: 'about',
    title: 'About',
    body: 'Designer-developer building quiet, intentional interfaces. I care about typography, restraint, and the space between things.',
    image: profilePhoto,
    imageAlt: 'Portrait photo',
  },
  {
    id: 'work',
    title: 'Work',
    body: 'Selected projects across product design and front-end engineering — from identity systems to interactive tools.',
    projects: [
      {
        id: 'project-one',
        title: 'Project One',
        body: 'A product identity and marketing site for a fintech startup. Led visual direction and built the front end in React.',
        href: '#',
      },
      {
        id: 'project-two',
        title: 'Project Two',
        body: 'An interactive data tool for exploring city infrastructure. Design system, charts, and real-time filtering.',
        href: '#',
      },
      {
        id: 'project-three',
        title: 'Project Three',
        body: 'E-commerce experience with custom checkout flow, motion design, and accessibility-first component library.',
        href: '#',
      },
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    body: 'React, TypeScript, design systems, motion, accessibility, and prototyping. Comfortable from Figma to production.',
  },
  {
    id: 'contact',
    title: 'Contact',
    body: 'Open to collaborations and interesting problems.',
    links: [
      { label: 'Email', href: 'mailto:hello@example.com' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
  },
]
