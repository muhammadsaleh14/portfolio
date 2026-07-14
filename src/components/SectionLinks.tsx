type SectionLink = {
  label: string
  href: string
}

type SectionLinksProps = {
  links: SectionLink[]
}

export function SectionLinks({ links }: SectionLinksProps) {
  return (
    <ul className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-3 p-0 md:mt-10 md:gap-x-8 md:gap-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            className="border-b border-white/10 text-lg text-neutral-500 no-underline transition-colors duration-200 hover:border-white/25 hover:text-neutral-300 md:text-2xl"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
