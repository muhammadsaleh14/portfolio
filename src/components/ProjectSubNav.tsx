import type { Project } from '../data/portfolio'
import { Dot } from './Dot'

type ProjectSubNavProps = {
  projects: Project[]
  activeProjectId: string | null
  onSelect: (projectId: string) => void
}

export function ProjectSubNav({ projects, activeProjectId, onSelect }: ProjectSubNavProps) {
  return (
    <div className="absolute top-1/2 left-[calc(100%+2rem)] -translate-y-1/2">
      <div
        aria-hidden
        className="absolute top-1/2 -left-8 h-px w-8 -translate-y-1/2 bg-white/25"
      />
      <nav
        className="relative flex flex-col items-center justify-between gap-10 py-2"
        aria-label="Projects"
      >
        <div
          aria-hidden
          className="absolute top-5 bottom-5 left-1/2 w-px -translate-x-1/2 bg-white/25"
        />
        {projects.map((project) => (
          <Dot
            key={project.id}
            label={project.title}
            size="sub"
            isActive={project.id === activeProjectId}
            onClick={() => onSelect(project.id)}
          />
        ))}
      </nav>
    </div>
  )
}
