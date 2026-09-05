import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { directoryImages } from '../data/images'
import { SanctuaryCard } from './SanctuaryCard'

interface DirectoryGridProps {
  searchValue: string
  activeFilter: string
}

export function DirectoryGrid({ searchValue, activeFilter }: DirectoryGridProps) {
  const { t } = useLanguage()
  const allCards = t.directory.cards

  const filtered = useMemo(() => {
    const query = searchValue.trim().toLowerCase()
    return allCards.filter((card) => {
      const matchesFilter = activeFilter === 'all' || card.categories.includes(activeFilter)
      if (!matchesFilter) return false
      if (!query) return true
      const haystack = `${card.title} ${card.subtitle} ${card.description} ${card.code}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [allCards, searchValue, activeFilter])

  return (
    <section id="directory" className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
      <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-secondary">explore</span>
            <span className="font-sans text-eyebrow uppercase text-secondary">{t.directory.eyebrow}</span>
          </div>
          <h2 className="font-serif text-2xl font-semibold text-text">{t.directory.title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-sans text-xs text-text-faint">
            {t.directory.viewingLabel(filtered.length, allCards.length)}
          </span>
          <Link
            to="/pagodas"
            className="inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wide text-primary hover:underline"
          >
            {t.directory.viewAll}
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((card) => (
            <SanctuaryCard key={card.code} card={card} image={directoryImages[card.code as keyof typeof directoryImages]} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-bg-elevated px-6 py-16 text-center">
          <span className="material-symbols-outlined mb-2 text-[32px] text-text-faint">search_off</span>
          <p className="font-sans text-sm text-text-muted">{t.directory.noResults}</p>
        </div>
      )}
    </section>
  )
}
