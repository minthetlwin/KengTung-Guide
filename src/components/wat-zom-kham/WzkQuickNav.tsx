import { useLanguage } from '../../context/language-context'

const SECTION_IDS = ['history-timeline', 'photo-gallery', 'festivals-rituals', 'trustee-board', 'wayfinding-guide']

export function WzkQuickNav() {
  const { t } = useLanguage()
  const q = t.watZomKham.quickNav

  return (
    <div className="sticky top-[76px] z-30 w-full border-b border-border bg-bg/95 shadow-soft backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 overflow-x-auto px-gutter py-3 md:px-gutter-lg">
        <div className="flex items-center gap-3 whitespace-nowrap font-sans text-xs font-bold uppercase tracking-wide text-text-faint">
          <span className="text-primary">{q.label}</span>
          {q.items.map((label, i) => (
            <a key={label} href={`#${SECTION_IDS[i]}`} className="text-text-muted transition-colors hover:text-primary">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden shrink-0 items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary-soft px-3 py-1 font-sans text-xs font-bold text-on-secondary-soft md:flex">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          {q.registeredBadge}
        </div>
      </div>
    </div>
  )
}
