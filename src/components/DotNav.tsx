import type { PortfolioSection } from '../data/portfolio'
import { Dot } from './Dot'
import { EntrySubNavDesktop, EntrySubNavMobile } from './EntrySubNav'

type DotNavProps = {
  sections: PortfolioSection[]
  activeIndex: number
  activeEntryId: string | null
  onSelectSection: (index: number) => void
  onSelectEntry: (entryId: string) => void
}

export function DotNav({
  sections,
  activeIndex,
  activeEntryId,
  onSelectSection,
  onSelectEntry,
}: DotNavProps) {
  const activeSection = sections[activeIndex]
  const showEntries = Boolean(activeSection.entries?.length)

  return (
    <div className="flex w-full shrink-0 flex-col-reverse items-center gap-5 md:w-auto md:flex-col md:items-stretch md:gap-0">
      <nav
        className="relative flex w-full max-w-md flex-row items-center justify-between px-2 py-2 md:hidden"
        aria-label="Portfolio sections"
      >
        <div
          aria-hidden
          className="absolute top-1/2 right-4 left-4 h-px -translate-y-1/2 bg-white/25"
        />
        {sections.map((section, index) => (
          <Dot
            key={section.id}
            label={section.title}
            isActive={index === activeIndex}
            onClick={() => onSelectSection(index)}
          />
        ))}
      </nav>

      {showEntries && (
        <EntrySubNavMobile
          entries={activeSection.entries!}
          activeEntryId={activeEntryId}
          onSelect={onSelectEntry}
        />
      )}

      <nav
        className="relative hidden h-[90svh] md:grid md:grid-cols-[auto_auto]"
        style={{
          gridTemplateRows: `repeat(${sections.length}, minmax(0, 1fr))`,
        }}
        aria-label="Portfolio sections"
      >
        {sections.map((section, index) => {
          const isActive = index === activeIndex
          const showBranch = isActive && Boolean(section.entries?.length)
          const isFirst = index === 0
          const isLast = index === sections.length - 1

          return (
            <div key={section.id} className="contents">
              <div
                className="relative z-10 flex items-center justify-center px-1"
                style={{ gridRow: index + 1, gridColumn: 1 }}
              >
                {!isFirst && (
                  <div
                    aria-hidden
                    className="absolute top-0 bottom-1/2 left-1/2 w-px -translate-x-1/2 bg-white/25"
                  />
                )}
                {!isLast && (
                  <div
                    aria-hidden
                    className="absolute top-1/2 bottom-0 left-1/2 w-px -translate-x-1/2 bg-white/25"
                  />
                )}
                <Dot
                  label={section.title}
                  isActive={isActive}
                  onClick={() => onSelectSection(index)}
                />
              </div>

              <div
                className="flex items-center pl-2"
                style={{ gridRow: index + 1, gridColumn: 2 }}
              >
                {showBranch ? (
                  <EntrySubNavDesktop
                    entries={section.entries!}
                    activeEntryId={activeEntryId}
                    onSelect={onSelectEntry}
                  />
                ) : null}
              </div>
            </div>
          )
        })}
      </nav>
    </div>
  )
}
