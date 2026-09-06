import { useEffect, useState } from 'react'

interface QuickSectionNavProps {
  label: string
  items: string[]
  sectionIds: string[]
}

export function QuickSectionNav({ label, items, sectionIds }: QuickSectionNavProps) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    // The section whose heading has scrolled just past this line (accounting
    // for the fixed header + this sticky bar) is treated as the active one —
    // more reliable than IntersectionObserver ratios once sections vary a lot
    // in height, since a short section can otherwise "outrank" a tall one.
    const ANCHOR_PX = 140
    let ticking = false

    function updateActive() {
      ticking = false
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - ANCHOR_PX <= 0) {
          current = id
        }
      }
      setActiveId(current)
    }

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  return (
    <div className="sticky top-[76px] z-30 w-full border-b border-border bg-bg/95 shadow-soft backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 overflow-x-auto px-gutter py-3 md:px-gutter-lg">
        <div className="flex items-center gap-3 whitespace-nowrap font-sans text-xs font-bold uppercase tracking-wide text-text-faint">
          <span className="text-primary">{label}</span>
          {items.map((itemLabel, i) => (
            <a
              key={itemLabel}
              href={`#${sectionIds[i]}`}
              aria-current={activeId === sectionIds[i] ? 'true' : undefined}
              className={`transition-colors ${
                activeId === sectionIds[i] ? 'text-primary' : 'text-text-muted hover:text-primary'
              }`}
            >
              {itemLabel}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
