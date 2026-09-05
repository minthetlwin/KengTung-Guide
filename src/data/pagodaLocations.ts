import { heroImages } from './images'

export interface PagodaLocationPin {
  code: string
  lat: number
  lng: number
  image: string
  approximate?: boolean
}

export const pagodaLocations: PagodaLocationPin[] = [
  // 21°17'39"N 99°36'08"E — Wikipedia "Wat Zom Khum".
  { code: 'KT-01', lat: 21.294167, lng: 99.602222, image: heroImages.watZomKham },
  // 21°17'29"N 99°36'11"E — Wikidata Q60749674.
  { code: 'KT-04', lat: 21.291416, lng: 99.602946, image: heroImages.mahaMyatMuni },
  // No published GPS fix exists for this statue; estimated ~21km along the
  // Keng Tung–Tachileik road bearing, per its "21km East of Keng Tung near
  // Pan Kwai village" description. Flagged as approximate in the UI.
  { code: 'KT-05', lat: 21.111, lng: 99.663, image: heroImages.yarzamuni, approximate: true },
]
