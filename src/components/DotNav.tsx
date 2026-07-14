import type { PortfolioSection } from '../data/portfolio'
import { Dot } from './Dot'

type DotNavProps = {
  sections: PortfolioSection[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function DotNav({ sections, activeIndex, onSelect }: DotNavProps) {
  return (
    <nav className="flex flex-col items-center gap-7" aria-label="Portfolio sections">
      {sections.map((section, index) => (
        <Dot
          key={section.id}
          label={section.title}
          isActive={index === activeIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </nav>
  )
}
