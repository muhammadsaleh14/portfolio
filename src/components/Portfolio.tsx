import { useEffect, useRef, useState } from 'react'
import { sections } from '../data/portfolio'
import { DotNav } from './DotNav'
import { PortfolioLayout } from './PortfolioLayout'
import { PreloadPortfolioImages, preloadPortfolioImages } from './PreloadPortfolioImages'
import { SectionDetail } from './SectionDetail'

const SWIPE_THRESHOLD_PX = 48

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

function isMobileViewport() {
  return window.matchMedia('(max-width: 767px)').matches
}

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeEntryId, setActiveEntryId] = useState<string | null>(null)
  const [activeChildId, setActiveChildId] = useState<string | null>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

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
    preloadPortfolioImages()
  }, [])

  useEffect(() => {
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

    const goPrevSibling = () => {
      if (inChildren) {
        if (childIndex > 0) setActiveChildId(nested[childIndex - 1].id)
        return
      }
      if (inEntries) {
        if (entryIndex > 0) {
          setActiveEntryId(sectionEntries[entryIndex - 1].id)
          setActiveChildId(null)
        }
        return
      }
      setActiveIndex((index) => Math.max(0, index - 1))
      setActiveEntryId(null)
      setActiveChildId(null)
    }

    const goNextSibling = () => {
      if (inChildren) {
        if (childIndex < nested.length - 1) {
          setActiveChildId(nested[childIndex + 1].id)
        }
        return
      }
      if (inEntries) {
        if (entryIndex < sectionEntries.length - 1) {
          setActiveEntryId(sectionEntries[entryIndex + 1].id)
          setActiveChildId(null)
        }
        return
      }
      setActiveIndex((index) => Math.min(sections.length - 1, index + 1))
      setActiveEntryId(null)
      setActiveChildId(null)
    }

    const goDeeper = () => {
      if (inChildren) return
      if (inEntries) {
        if (nested.length > 0) setActiveChildId(nested[0].id)
        return
      }
      if (sectionEntries.length > 0) {
        setActiveEntryId(sectionEntries[0].id)
        setActiveChildId(null)
      }
    }

    const goShallower = () => {
      if (inChildren) {
        setActiveChildId(null)
        return
      }
      if (inEntries) {
        setActiveEntryId(null)
        setActiveChildId(null)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return

      const { key } = event
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        return
      }

      event.preventDefault()

      // Desktop layout: columns are horizontal, lists are vertical.
      // Mobile: swipe handles orientation; keep arrows matching desktop columns.
      if (key === 'ArrowLeft') {
        goShallower()
        return
      }
      if (key === 'ArrowRight') {
        goDeeper()
        return
      }
      if (key === 'ArrowUp') {
        goPrevSibling()
        return
      }
      if (key === 'ArrowDown') {
        goNextSibling()
      }
    }

    const onTouchStart = (event: TouchEvent) => {
      if (!isMobileViewport() || event.touches.length !== 1) return
      if (isTypingTarget(event.target)) return
      touchStartRef.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      }
    }

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartRef.current
      touchStartRef.current = null
      if (!start || !isMobileViewport() || event.changedTouches.length !== 1) return
      if (isTypingTarget(event.target)) return

      const touch = event.changedTouches[0]
      const dx = touch.clientX - start.x
      const dy = touch.clientY - start.y
      const absX = Math.abs(dx)
      const absY = Math.abs(dy)

      if (Math.max(absX, absY) < SWIPE_THRESHOLD_PX) return

      if (absX > absY) {
        // Swipe left = next dot, swipe right = previous
        if (dx < 0) goNextSibling()
        else goPrevSibling()
        return
      }

      // Swipe up = enter subdots, swipe down = leave
      if (dy < 0) goDeeper()
      else goShallower()
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [activeIndex, activeEntryId, activeChildId])

  return (
    <>
      <PreloadPortfolioImages />
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
    </>
  )
}
