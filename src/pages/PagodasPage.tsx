import { useState } from 'react'
import { SearchFilterBar } from '../components/SearchFilterBar'
import { DirectoryGrid } from '../components/DirectoryGrid'

export function PagodasPage() {
  const [searchValue, setSearchValue] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex w-full flex-col gap-8 py-14">
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <DirectoryGrid searchValue={searchValue} activeFilter={activeFilter} />
    </div>
  )
}
