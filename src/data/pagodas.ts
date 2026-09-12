import { wzkHeroImage, wzkGalleryAlbums, wzkHistoryAudioSrc, wzkCoordinates } from './watZomKham'
import { yzmHeroImage, yzmHistoryAudioSrc, yzmCoordinates } from './yarzamuni'

export interface PagodaGalleryConfig {
  albums: { id: string; images: string[] }[]
}

// Non-translatable per-pagoda specifics for the generic PagodaDetailPage
// template — coordinates, image/audio paths, zoom level, which optional
// sections apply. Translated copy stays in the i18n dictionaries
// (t.watZomKham / t.yarzamuni), looked up via `dictKey`.
export interface PagodaConfig {
  dictKey: 'watZomKham' | 'yarzamuni'
  heroImage: string
  coordinates: { lat: number; lng: number }
  locationZoom: number
  audioSrc: string
  quickNavSectionIds: string[]
  gallery?: PagodaGalleryConfig
}

export const wzkPagodaConfig: PagodaConfig = {
  dictKey: 'watZomKham',
  heroImage: wzkHeroImage,
  coordinates: wzkCoordinates,
  locationZoom: 17,
  audioSrc: wzkHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'festivals-rituals', 'location'],
  gallery: { albums: wzkGalleryAlbums },
}

export const yzmPagodaConfig: PagodaConfig = {
  dictKey: 'yarzamuni',
  heroImage: yzmHeroImage,
  coordinates: yzmCoordinates,
  locationZoom: 15,
  audioSrc: yzmHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'location'],
}
