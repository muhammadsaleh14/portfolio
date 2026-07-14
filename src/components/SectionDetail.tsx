import type { PortfolioSection } from '../data/portfolio'
import { SectionLinks } from './SectionLinks'

type SectionDetailProps = {
  section: PortfolioSection
}

export function SectionDetail({ section }: SectionDetailProps) {
  return (
    <article
      key={section.id}
      className="w-[min(360px,72vw)] animate-detail-in max-sm:w-[min(280px,58vw)]"
      aria-live="polite"
    >
      <h1 className="mb-3 text-[15px] font-medium tracking-wide text-neutral-200">
        {section.title}
      </h1>
      <p className="m-0 text-sm leading-relaxed text-neutral-500">{section.body}</p>
      {section.links && <SectionLinks links={section.links} />}
    </article>
  )
}
