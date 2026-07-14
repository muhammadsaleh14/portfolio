type SectionLink = {
  label: string
  href: string
}

type SectionLinksProps = {
  links: SectionLink[]
}

export function SectionLinks({ links }: SectionLinksProps) {
  return (
    <ul className="mt-[18px] flex list-none flex-wrap gap-x-4 gap-y-2.5 p-0">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="border-b border-white/10 text-[13px] text-neutral-500 no-underline transition-colors duration-200 hover:border-white/25 hover:text-neutral-300"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
