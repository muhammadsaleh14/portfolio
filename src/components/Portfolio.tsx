import { useEffect, useState } from 'react'
import { sections } from '../data/portfolio'
import { DotNav } from './DotNav'
import { PortfolioLayout } from './PortfolioLayout'
import { SectionDetail } from './SectionDetail'

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return (
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'SELECT' ||
    target.isContentEditable
  )
}

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeEntryId, setActiveEntryId] = useState<string | null>(null)
  const [activeChildId, setActiveChildId] = useState<string | null>(null)

  const activeSection = sections[activeIndex]
  const entries = activeSection.entries ?? []
  const activeEntry = entries.find((entry) => entry.id === activeEntryId) ?? null
  const children = activeEntry?.entries ?? []
  const activeChild = children.find((child) => child.id === activeChildId) ?? null

  const handleSelectSection = (index: number) => {
    setActiveIndex(index)
    setActiveEntryId(null)
    setActiveChildId(null)
  }

  const handleSelectEntry = (entryId: string) => {
    setActiveEntryId(entryId)
    setActiveChildId(null)
  }

  const handleSelectChild = (childId: string) => {
    setActiveChildId(childId)
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return

      const { key } = event
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        return
      }

      event.preventDefault()

      const sectionEntries = sections[activeIndex].entries ?? []
      const entryIndex = activeEntryId
        ? sectionEntries.findIndex((entry) => entry.id === activeEntryId)
        : -1
      const currentEntry = entryIndex >= 0 ? sectionEntries[entryIndex] : null
      const nested = currentEntry?.entries ?? []
      const childIndex = activeChildId
        ? nested.findIndex((child) => child.id === activeChildId)
        : -1
      const inChildren = childIndex >= 0
      const inEntries = entryIndex >= 0

      if (inChildren) {
        if (key === 'ArrowUp' || key === 'ArrowLeft') {
          setActiveChildId(childIndex <= 0 ? null : nested[childIndex - 1].id)
          return
        }
        if (key === 'ArrowDown' || key === 'ArrowRight') {
          if (childIndex < nested.length - 1) {
            setActiveChildId(nested[childIndex + 1].id)
          }
          return
        }
      }

      if (inEntries) {
        if (key === 'ArrowUp' || key === 'ArrowLeft') {
          setActiveEntryId(entryIndex <= 0 ? null : sectionEntries[entryIndex - 1].id)
          setActiveChildId(null)
          return
        }
        if (key === 'ArrowDown') {
          if (entryIndex < sectionEntries.length - 1) {
            setActiveEntryId(sectionEntries[entryIndex + 1].id)
            setActiveChildId(null)
          }
          return
        }
        if (key === 'ArrowRight') {
          if (nested.length > 0) {
            setActiveChildId(nested[0].id)
            return
          }
          if (entryIndex < sectionEntries.length - 1) {
            setActiveEntryId(sectionEntries[entryIndex + 1].id)
            setActiveChildId(null)
          }
          return
        }
      }

      if (key === 'ArrowUp' || key === 'ArrowLeft') {
        setActiveIndex((index) => Math.max(0, index - 1))
        setActiveEntryId(null)
        setActiveChildId(null)
        return
      }

      if (key === 'ArrowDown') {
        setActiveIndex((index) => Math.min(sections.length - 1, index + 1))
        setActiveEntryId(null)
        setActiveChildId(null)
        return
      }

      if (key === 'ArrowRight') {
        if (sectionEntries.length > 0) {
          setActiveEntryId(sectionEntries[0].id)
          setActiveChildId(null)
          return
        }
        setActiveIndex((index) => Math.min(sections.length - 1, index + 1))
        setActiveEntryId(null)
        setActiveChildId(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, activeEntryId, activeChildId])

  return (
    <PortfolioLayout
      navigation={
        <DotNav
          sections={sections}
          activeIndex={activeIndex}
          activeEntryId={activeEntryId}
          activeChildId={activeChildId}
          onSelectSection={handleSelectSection}
          onSelectEntry={handleSelectEntry}
          onSelectChild={handleSelectChild}
        />
      }
      detail={
        <SectionDetail
          section={activeSection}
          entry={activeEntry}
          child={activeChild}
        />
      }
    />
  )
}
