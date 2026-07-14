type SectionLink = {
  label: string
  href: string
}

type SectionLinksProps = {
  links: SectionLink[]
}

export function SectionLinks({ links }: SectionLinksProps) {
  return (
    <ul className="mt-8 flex list-none flex-wrap gap-x-6 gap-y-3 p-0">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="border-b border-white/10 text-xl text-neutral-500 no-underline transition-colors duration-200 hover:border-white/25 hover:text-neutral-300 max-sm:text-lg"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
