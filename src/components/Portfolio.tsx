import { useState } from 'react'
import { sections } from '../data/portfolio'
import { DotNav } from './DotNav'
import { PortfolioLayout } from './PortfolioLayout'
import { SectionDetail } from './SectionDetail'

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)

  const activeSection = sections[activeIndex]
  const activeProject =
    activeSection.projects?.find((project) => project.id === activeProjectId) ?? null

  const handleSelectSection = (index: number) => {
    setActiveIndex(index)
    setActiveProjectId(null)
  }

  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId)
  }

  return (
    <PortfolioLayout
      navigation={
        <DotNav
          sections={sections}
          activeIndex={activeIndex}
          activeProjectId={activeProjectId}
          onSelectSection={handleSelectSection}
          onSelectProject={handleSelectProject}
        />
      }
      detail={<SectionDetail section={activeSection} project={activeProject} />}
    />
  )
}
