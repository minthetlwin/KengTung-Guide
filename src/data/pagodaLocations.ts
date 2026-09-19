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
  // Google Maps listing "Dhart Zom Doi Kabar Aye Pagoda", supplied by the project owner.
  { code: 'KT-06', lat: 21.3266966, lng: 99.707297, image: heroImages.datSamLoei },
  // Google Maps listing "Satu Rathta Sumingala", supplied by the project owner.
  { code: 'KT-07', lat: 21.172314737049497, lng: 99.75102077544402, image: heroImages.satuRatthaSumingala },
  // Google Maps listing "Khema Rattha Prophecy Mudra Buddha Statue", supplied by the project owner.
  { code: 'KT-08', lat: 21.287607020289972, lng: 99.59431140947929, image: heroImages.khemaRattha },
  // Google Maps listing "Thatta Thattaha Maha Bodhi Pagoda", supplied by the project owner.
  { code: 'KT-09', lat: 21.1511435, lng: 99.7266444, image: heroImages.thattaThattahaMahaBodhi },
  // No published GPS fix exists for Swam Kyeim village; pinned to Mong Ping
  // Township's center (21°21'00"N 99°01'00"E — Wikipedia "Mong Ping Township"),
  // the nearest identifiable landmark to the "12 miles from Maing Pyin" the
  // source history gives with no bearing. Flagged as approximate in the UI.
  { code: 'KT-10', lat: 21.35, lng: 99.01667, image: heroImages.swamKyeimShweHsanTaw, approximate: true },
  // No published GPS fix exists for Yan Mine village; pinned to Mong Khet
  // (Maing Khat) Township's center (21°42'00"N 99°23'00"E — Wikipedia
  // "Mong Khet Township"), the nearest identifiable landmark to the source
  // history's military map grid reference (LK-334284). Flagged as approximate.
  { code: 'KT-11', lat: 21.7, lng: 99.38333, image: heroImages.shweOhnDaingMin, approximate: true },
  // No published GPS fix exists for Pakan village; pinned to Mong Khet
  // (Maing Khat) Township's center (21°42'00"N 99°23'00"E — Wikipedia
  // "Mong Khet Township"), the same approach used for KT-11. Approximate.
  { code: 'KT-12', lat: 21.7, lng: 99.38333, image: heroImages.maingHnunNeeBayar, approximate: true },
]
