import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { SearchFilterBar } from '../components/SearchFilterBar'
import { DirectoryGrid } from '../components/DirectoryGrid'
import { usePageMeta } from '../hooks/usePageMeta'

export function PagodasPage() {
  const { t } = useLanguage()
  const p = t.pagodasPage
  const location = useLocation()
  const [searchValue, setSearchValue] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  usePageMeta({
    title: `${p.title} · ${t.meta.title}`,
    description: p.description,
  })

  useEffect(() => {
    if (location.hash !== '#global-search-input') return
    const timeout = window.setTimeout(() => {
      document.getElementById('global-search-input')?.focus()
    }, 400)
    return () => window.clearTimeout(timeout)
  }, [location.hash])

  return (
    <div className="flex w-full flex-col gap-8 py-14">
      <div className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[18px]">explore</span>
            {p.eyebrow}
          </div>
          <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{p.title}</h1>
          <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{p.description}</p>
        </div>
      </div>

      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <DirectoryGrid searchValue={searchValue} activeFilter={activeFilter} showHeading={false} />
    </div>
  )
}
