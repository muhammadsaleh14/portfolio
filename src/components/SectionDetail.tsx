import type { PortfolioSection } from '../data/portfolio'
import { SectionLinks } from './SectionLinks'

type SectionDetailProps = {
  section: PortfolioSection
}

export function SectionDetail({ section }: SectionDetailProps) {
  return (
    <article
      key={section.id}
      className="w-[min(560px,78vw)] animate-detail-in max-sm:w-[min(420px,85vw)]"
      aria-live="polite"
    >
      <h1 className="mb-5 text-4xl font-medium tracking-wide text-neutral-200 max-sm:text-3xl">
        {section.title}
      </h1>
      <p className="m-0 text-2xl leading-relaxed text-neutral-500 max-sm:text-xl">{section.body}</p>
      {section.links && <SectionLinks links={section.links} />}
    </article>
  )
}
