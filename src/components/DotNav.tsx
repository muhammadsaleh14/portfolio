import type { PortfolioSection } from '../data/portfolio'
import { Dot } from './Dot'
import { ProjectSubNavDesktop, ProjectSubNavMobile } from './ProjectSubNav'

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
  const activeSection = sections[activeIndex]
  const showProjects = activeSection.projects && activeSection.projects.length > 0

  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-5 md:w-auto md:gap-0">
      <nav
        className="relative flex w-full max-w-md flex-row items-center justify-between px-2 py-2 md:h-[90svh] md:max-w-none md:flex-col md:justify-between md:px-0 md:py-6"
        aria-label="Portfolio sections"
      >
        <div
          aria-hidden
          className="absolute top-1/2 right-4 left-4 h-px -translate-y-1/2 bg-white/25 md:top-10 md:right-auto md:bottom-10 md:left-1/2 md:h-auto md:w-px md:-translate-x-1/2 md:translate-y-0"
        />

        {sections.map((section, index) => {
          const isActive = index === activeIndex
          const showDesktopProjects =
            isActive && section.projects && section.projects.length > 0

          return (
            <div key={section.id} className="relative flex items-center justify-center">
              <Dot
                label={section.title}
                isActive={isActive}
                onClick={() => onSelectSection(index)}
              />
              {showDesktopProjects && (
                <ProjectSubNavDesktop
                  projects={section.projects!}
                  activeProjectId={activeProjectId}
                  onSelect={onSelectProject}
                />
              )}
            </div>
          )
        })}
      </nav>

      {showProjects && (
        <ProjectSubNavMobile
          projects={activeSection.projects!}
          activeProjectId={activeProjectId}
          onSelect={onSelectProject}
        />
      )}
    </div>
  )
}
