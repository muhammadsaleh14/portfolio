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
      className="flex w-full flex-col justify-center px-1 pb-8 animate-detail-in md:min-h-[50svh] md:w-[min(52vw,56rem)] md:px-0 md:pb-0 lg:w-[min(52vw,56rem)]"
      aria-live="polite"
    >
      {project && (
        <p className="mb-2 text-base font-medium tracking-wide text-neutral-600 md:mb-3 md:text-xl">
          {section.title}
        </p>
      )}

      {!project && section.image && (
        <img
          src={section.image}
          alt={section.imageAlt ?? ''}
          className="mb-5 size-32 self-center rounded-full object-cover object-top md:mb-8 md:size-56 md:self-auto"
        />
      )}

      <h1 className="mb-4 text-3xl font-medium tracking-wide text-neutral-200 md:mb-6 md:text-5xl">
        {title}
      </h1>
      <p className="m-0 max-w-3xl text-lg leading-relaxed text-neutral-500 md:text-3xl">
        {body}
      </p>

      {project?.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block border-b border-white/10 text-lg text-neutral-500 no-underline transition-colors duration-200 hover:border-white/25 hover:text-neutral-300 md:mt-10 md:text-2xl"
        >
          View project
        </a>
      )}

      {!project && section.links && <SectionLinks links={section.links} />}
    </article>
  )
}
