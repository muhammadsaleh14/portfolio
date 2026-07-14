import type { Project, PortfolioSection } from '../data/portfolio'
import { SectionLinks } from './SectionLinks'

type SectionDetailProps = {
  section: PortfolioSection
  project?: Project | null
}

export function SectionDetail({ section, project }: SectionDetailProps) {
  const title = project?.title ?? section.title
  const body = project?.body ?? section.body
  const detailKey = project?.id ?? section.id

  return (
    <article
      key={detailKey}
      className="flex min-h-[50svh] w-[min(52vw,56rem)] flex-col justify-center animate-detail-in max-lg:w-[min(62vw,48rem)] max-sm:w-[85vw]"
      aria-live="polite"
    >
      {project && (
        <p className="mb-3 text-xl font-medium tracking-wide text-neutral-600 max-sm:text-lg">
          {section.title}
        </p>
      )}

      {!project && section.image && (
        <img
          src={section.image}
          alt={section.imageAlt ?? ''}
          className="mb-8 size-56 rounded-full object-cover object-top max-sm:size-44"
        />
      )}

      <h1 className="mb-6 text-5xl font-medium tracking-wide text-neutral-200 max-sm:text-4xl">
        {title}
      </h1>
      <p className="m-0 max-w-3xl text-3xl leading-relaxed text-neutral-500 max-sm:text-2xl">
        {body}
      </p>

      {project?.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block border-b border-white/10 text-2xl text-neutral-500 no-underline transition-colors duration-200 hover:border-white/25 hover:text-neutral-300 max-sm:text-xl"
        >
          View project
        </a>
      )}

      {!project && section.links && <SectionLinks links={section.links} />}
    </article>
  )
}
