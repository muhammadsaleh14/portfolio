import type { SectionEntry, PortfolioSection } from '../data/portfolio'
import { SectionLinks } from './SectionLinks'

type SectionDetailProps = {
  section: PortfolioSection
  entry?: SectionEntry | null
  child?: SectionEntry | null
}

export function SectionDetail({ section, entry, child }: SectionDetailProps) {
  const active = child ?? entry
  const title = active?.title ?? section.title
  const body = active?.body ?? section.body
  const detailKey = child?.id ?? entry?.id ?? section.id
  const image = child?.image ?? (!child ? entry?.image : undefined) ?? (!entry && !child ? section.image : undefined)
  const imageAlt = child?.imageAlt ?? entry?.imageAlt ?? section.imageAlt ?? ''
  const isScreenshot = Boolean(child?.image)

  return (
    <article
      key={detailKey}
      className="flex w-full flex-col justify-center px-1 animate-detail-in md:min-h-[50svh] md:w-[min(48vw,52rem)] md:shrink md:px-0 md:pb-0"
      aria-live="polite"
    >
      {(entry || child) && (
        <p className="mb-2 text-base font-medium tracking-wide text-neutral-600 md:mb-3 md:text-xl">
          {child ? `${section.title} · ${entry?.title}` : section.title}
        </p>
      )}

      {image && (
        <img
          src={image}
          alt={imageAlt}
          className={
            isScreenshot
              ? 'mb-5 max-h-[42svh] w-auto max-w-full self-center rounded-2xl object-contain md:mb-6 md:max-h-[55svh] md:self-start'
              : 'mb-5 size-32 self-center rounded-full object-cover object-top md:mb-8 md:size-56 md:self-auto'
          }
        />
      )}

      <h1 className="mb-3 text-3xl font-medium tracking-wide text-neutral-200 md:mb-4 md:text-5xl">
        {title}
      </h1>

      {active?.subtitle && (
        <p className="mb-4 text-base tracking-wide text-neutral-500 md:mb-5 md:text-xl">
          {active.subtitle}
        </p>
      )}

      <p className="m-0 max-w-3xl text-lg leading-relaxed text-neutral-500 md:text-3xl">
        {body}
      </p>

      {entry?.href && !child && (
        <a
          href={entry.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block border-b border-white/10 text-lg text-neutral-500 no-underline transition-colors duration-200 hover:border-white/25 hover:text-neutral-300 md:mt-10 md:text-2xl"
        >
          View project
        </a>
      )}

      {!entry && !child && section.links && <SectionLinks links={section.links} />}
    </article>
  )
}
