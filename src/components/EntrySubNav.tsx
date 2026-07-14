import type { SectionEntry } from '../data/portfolio'
import { Dot } from './Dot'

type EntrySubNavProps = {
  entries: SectionEntry[]
  activeEntryId: string | null
  activeChildId: string | null
  onSelect: (entryId: string) => void
  onSelectChild: (childId: string) => void
}

export function EntrySubNavDesktop({
  entries,
  activeEntryId,
  activeChildId,
  onSelect,
  onSelectChild,
}: EntrySubNavProps) {
  const activeEntry = entries.find((entry) => entry.id === activeEntryId)
  const children = activeEntry?.entries ?? []

  return (
    <div className="hidden items-center gap-6 md:flex">
      <div aria-hidden className="h-px w-6 shrink-0 bg-white/25" />
      <nav
        className="relative flex flex-col items-center gap-6 py-1"
        aria-label="Section entries"
      >
        <div
          aria-hidden
          className="absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2 bg-white/25"
        />
        {entries.map((entry) => (
          <Dot
            key={entry.id}
            label={entry.title}
            size="sub"
            isActive={entry.id === activeEntryId}
            onClick={() => onSelect(entry.id)}
          />
        ))}
      </nav>

      {children.length > 0 && (
        <div className="flex items-center gap-6">
          <div aria-hidden className="h-px w-6 shrink-0 bg-white/25" />
          <nav
            className="relative flex flex-col items-center gap-5 py-1"
            aria-label="Project screenshots"
          >
            <div
              aria-hidden
              className="absolute top-3 bottom-3 left-1/2 w-px -translate-x-1/2 bg-white/25"
            />
            {children.map((child) => (
              <Dot
                key={child.id}
                label={child.title}
                size="sub"
                isActive={child.id === activeChildId}
                onClick={() => onSelectChild(child.id)}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export function EntrySubNavMobile({
  entries,
  activeEntryId,
  activeChildId,
  onSelect,
  onSelectChild,
}: EntrySubNavProps) {
  const activeEntry = entries.find((entry) => entry.id === activeEntryId)
  const children = activeEntry?.entries ?? []

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4 md:hidden">
      {children.length > 0 && (
        <nav
          className="relative flex w-full flex-row items-center justify-between px-2"
          aria-label="Project screenshots"
        >
          <div
            aria-hidden
            className="absolute top-1/2 right-4 left-4 h-px -translate-y-1/2 bg-white/25"
          />
          {children.map((child) => (
            <Dot
              key={child.id}
              label={child.title}
              size="sub"
              isActive={child.id === activeChildId}
              onClick={() => onSelectChild(child.id)}
            />
          ))}
        </nav>
      )}

      <nav
        className="relative flex w-full flex-row items-center justify-between px-2"
        aria-label="Section entries"
      >
        <div
          aria-hidden
          className="absolute top-1/2 right-4 left-4 h-px -translate-y-1/2 bg-white/25"
        />
        {entries.map((entry) => (
          <Dot
            key={entry.id}
            label={entry.title}
            size="sub"
            isActive={entry.id === activeEntryId}
            onClick={() => onSelect(entry.id)}
          />
        ))}
      </nav>
    </div>
  )
}
