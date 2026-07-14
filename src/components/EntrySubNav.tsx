import type { SectionEntry } from '../data/portfolio'
import { Dot } from './Dot'

type EntrySubNavProps = {
  entries: SectionEntry[]
  activeEntryId: string | null
  onSelect: (entryId: string) => void
}

export function EntrySubNavDesktop({
  entries,
  activeEntryId,
  onSelect,
}: EntrySubNavProps) {
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
    </div>
  )
}

export function EntrySubNavMobile({
  entries,
  activeEntryId,
  onSelect,
}: EntrySubNavProps) {
  return (
    <nav
      className="relative flex w-full max-w-md flex-row items-center justify-between px-2 md:hidden"
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
  )
}
