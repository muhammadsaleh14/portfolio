import type { PortfolioSection } from '../data/portfolio'
import { Dot } from './Dot'
import { ProjectSubNav } from './ProjectSubNav'

type DotNavProps = {
  sections: PortfolioSection[]
  activeIndex: number
  activeProjectId: string | null
  onSelectSection: (index: number) => void
  onSelectProject: (projectId: string) => void
}

export function DotNav({
  sections,
  activeIndex,
  activeProjectId,
  onSelectSection,
  onSelectProject,
}: DotNavProps) {
  return (
    <nav
      className="relative flex h-[90svh] flex-col items-center justify-between py-6"
      aria-label="Portfolio sections"
    >
      <div
        aria-hidden
        className="absolute top-10 bottom-10 left-1/2 w-px -translate-x-1/2 bg-white/25"
      />

      {sections.map((section, index) => {
        const isActive = index === activeIndex
        const showProjects = isActive && section.projects && section.projects.length > 0

        return (
          <div key={section.id} className="relative flex items-center justify-center">
            <Dot
              label={section.title}
              isActive={isActive}
              onClick={() => onSelectSection(index)}
            />
            {showProjects && (
              <ProjectSubNav
                projects={section.projects!}
                activeProjectId={activeProjectId}
                onSelect={onSelectProject}
              />
            )}
          </div>
        )
      })}
    </nav>
  )
}
