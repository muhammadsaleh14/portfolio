type SectionLink = {
  label: string
  href: string
}

type SectionLinksProps = {
  links: SectionLink[]
}

export function SectionLinks({ links }: SectionLinksProps) {
  return (
    <ul className="mt-10 flex list-none flex-wrap gap-x-8 gap-y-4 p-0">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="border-b border-white/10 text-2xl text-neutral-500 no-underline transition-colors duration-200 hover:border-white/25 hover:text-neutral-300 max-sm:text-xl"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
