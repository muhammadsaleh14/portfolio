import { useState } from 'react'
import { sections } from '../data/portfolio'
import { DotNav } from './DotNav'
import { PortfolioLayout } from './PortfolioLayout'
import { SectionDetail } from './SectionDetail'

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSection = sections[activeIndex]

  return (
    <PortfolioLayout
      navigation={
        <DotNav
          sections={sections}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      }
      detail={<SectionDetail section={activeSection} />}
    />
  )
}
