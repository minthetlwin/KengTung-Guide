import { useState } from 'react'
import { HeroSlideshow } from '../components/HeroSlideshow'
import { StatsStrip } from '../components/StatsStrip'
import { SearchFilterBar } from '../components/SearchFilterBar'
import { FlagshipSpotlight } from '../components/FlagshipSpotlight'
import { DirectoryGrid } from '../components/DirectoryGrid'
import { PilgrimageMap } from '../components/PilgrimageMap'
import { FestivalsCalendar } from '../components/FestivalsCalendar'

export function HomePage() {
  const [searchValue, setSearchValue] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex w-full flex-col gap-14 pb-8 md:gap-16">
      <HeroSlideshow />
      <StatsStrip />
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <FlagshipSpotlight />
      <DirectoryGrid searchValue={searchValue} activeFilter={activeFilter} />
      <PilgrimageMap />
      <FestivalsCalendar />
    </div>
  )
}
