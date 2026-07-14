import profilePhoto from '../assets/profile.png'

export type PortfolioSection = {
  id: string
  title: string
  body: string
  image?: string
  imageAlt?: string
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
    links: [
      { label: 'Project One', href: '#' },
      { label: 'Project Two', href: '#' },
      { label: 'Project Three', href: '#' },
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
