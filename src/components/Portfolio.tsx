import { useState } from 'react'
import { sections } from '../data/portfolio'
import { DotNav } from './DotNav'
import { PortfolioLayout } from './PortfolioLayout'
import { SectionDetail } from './SectionDetail'

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeEntryId, setActiveEntryId] = useState<string | null>(null)

  const activeSection = sections[activeIndex]
  const activeEntry =
    activeSection.entries?.find((entry) => entry.id === activeEntryId) ?? null

  const handleSelectSection = (index: number) => {
    setActiveIndex(index)
    setActiveEntryId(null)
  }

  return (
    <PortfolioLayout
      navigation={
        <DotNav
          sections={sections}
          activeIndex={activeIndex}
          activeEntryId={activeEntryId}
          onSelectSection={handleSelectSection}
          onSelectEntry={setActiveEntryId}
        />
      }
      detail={<SectionDetail section={activeSection} entry={activeEntry} />}
    />
  )
}
