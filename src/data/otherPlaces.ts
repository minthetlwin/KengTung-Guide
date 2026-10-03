import { lthHeroImage } from './loneTreeHill'
import { ktwHeroImage } from './kengTungWaterfall'
import { khpHeroImage } from './kengTungHawPalace'
import { ntlHeroImage } from './naungTungLake'
import { kbgHeroImage } from './kengTungBuddhaGarden'
import { kctHeroImage } from './kengTungClockTower'
import { nklHeroImage } from './naungKhamLake'
import { plgHeroImage } from './paliangGate'

// Non-translatable card data for the Other Places page, index-matched with
// `t.otherPlaces.places` (same pattern as `festivalsMeta`).
export interface OtherPlaceMeta {
  image: string
  path: string
}

export const otherPlacesMeta: OtherPlaceMeta[] = [
  { image: kbgHeroImage, path: '/other-places/keng-tung-buddha-garden' },
  { image: ktwHeroImage, path: '/other-places/keng-tung-waterfall' },
  { image: khpHeroImage, path: '/other-places/keng-tung-haw-palace' },
  { image: kctHeroImage, path: '/other-places/keng-tung-clock-tower' },
  { image: ntlHeroImage, path: '/other-places/naung-tung-lake' },
  { image: nklHeroImage, path: '/other-places/naung-kham-lake' },
  { image: plgHeroImage, path: '/other-places/paliang-gate' },
  { image: lthHeroImage, path: '/other-places/lone-tree-hill' },
]
