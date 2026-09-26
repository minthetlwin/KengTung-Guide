import { lthHeroImage } from './loneTreeHill'
import { ktwHeroImage } from './kengTungWaterfall'
import { khpHeroImage } from './kengTungHawPalace'
import { ntlHeroImage } from './naungTungLake'

// Non-translatable card data for the Other Places page, index-matched with
// `t.otherPlaces.places` (same pattern as `festivalsMeta`).
export interface OtherPlaceMeta {
  image: string
  path: string
}

export const otherPlacesMeta: OtherPlaceMeta[] = [
  { image: lthHeroImage, path: '/other-places/lone-tree-hill' },
  { image: ktwHeroImage, path: '/other-places/keng-tung-waterfall' },
  { image: khpHeroImage, path: '/other-places/keng-tung-haw-palace' },
  { image: ntlHeroImage, path: '/other-places/naung-tung-lake' },
]
