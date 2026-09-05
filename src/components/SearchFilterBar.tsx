import { useLanguage } from '../context/language-context'

interface SearchFilterBarProps {
  searchValue: string
  onSearchChange: (value: string) => void
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function SearchFilterBar({
  searchValue,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: SearchFilterBarProps) {
  const { t } = useLanguage()

  return (
    <section className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-bg-elevated p-3 shadow-soft md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-bg-elevated-2 px-4 py-2.5">
          <span className="material-symbols-outlined text-[20px] text-primary">search</span>
          <input
            id="global-search-input"
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.filters.searchPlaceholder}
            className="w-full bg-transparent font-sans text-sm text-text placeholder:text-text-faint focus:outline-none"
          />
          {searchValue && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-text-faint hover:text-text"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 md:pb-0">
          {t.filters.pills.map((pill) => (
            <button
              key={pill.id}
              type="button"
              onClick={() => onFilterChange(pill.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeFilter === pill.id
                  ? 'bg-primary text-on-primary shadow-soft'
                  : 'bg-bg-elevated-2 text-text-muted hover:bg-bg-elevated-3 hover:text-text'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
