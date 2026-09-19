import { wzkHeroImage, wzkGalleryAlbums, wzkHistoryAudioSrc, wzkCoordinates } from './watZomKham'
import { yzmHeroImage, yzmHistoryAudioSrc, yzmCoordinates } from './yarzamuni'
import { dslHeroImage, dslCoordinates, dslPanoramaSrc, dslGalleryAlbums, dslHistoryAudioSrc } from './datSamLoei'
import {
  srsHeroImage,
  srsCoordinates,
  srsPanoramaSrc,
  srsGalleryAlbums,
  srsBannerImages,
  srsHistoryAudioSrc,
} from './satuRatthaSumingala'
import { krHeroImage, krCoordinates, krPanoramaSrc, krGalleryAlbums, krHistoryAudioSrc } from './khemaRattha'
import {
  ttmbHeroImage,
  ttmbCoordinates,
  ttmbPanoramaSrc,
  ttmbGalleryAlbums,
  ttmbHistoryAudioSrc,
} from './thattaThattahaMahaBodhi'
import { skstHeroImage, skstCoordinates, skstHistoryAudioSrc } from './swamKyeimShweHsanTaw'
import { sodmHeroImage, sodmCoordinates, sodmHistoryAudioSrc, sodmGalleryAlbums } from './shweOhnDaingMin'
import { mhnbHeroImage, mhnbCoordinates, mhnbHistoryAudioSrc, mhnbPanoramaSrc } from './maingHnunNeeBayar'

export interface PagodaGalleryConfig {
  albums: { id: string; images: string[] }[]
}

// Non-translatable per-pagoda specifics for the generic PagodaDetailPage
// template — coordinates, image/audio paths, zoom level, which optional
// sections apply. Translated copy stays in the i18n dictionaries
// (t.watZomKham / t.yarzamuni / t.datSamLoei / t.satuRatthaSumingala / t.khemaRattha / t.thattaThattahaMahaBodhi / t.swamKyeimShweHsanTaw / t.shweOhnDaingMin / t.maingHnunNeeBayar), looked up via `dictKey`.
export interface PagodaConfig {
  dictKey:
    | 'watZomKham'
    | 'yarzamuni'
    | 'datSamLoei'
    | 'satuRatthaSumingala'
    | 'khemaRattha'
    | 'thattaThattahaMahaBodhi'
    | 'swamKyeimShweHsanTaw'
    | 'shweOhnDaingMin'
    | 'maingHnunNeeBayar'
  heroImage: string
  bannerImages?: string[]
  coordinates: { lat: number; lng: number }
  locationZoom: number
  audioSrc?: string
  quickNavSectionIds: string[]
  gallery?: PagodaGalleryConfig
  panorama?: { src: string }
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

export const dslPagodaConfig: PagodaConfig = {
  dictKey: 'datSamLoei',
  heroImage: dslHeroImage,
  bannerImages: [
    '/images/kabaraye/kabaraye-exterior-01.jpg',
    '/images/kabaraye/kabaraye-interior-hall.jpg',
    '/images/kabaraye/kabaraye-terrace-gong.jpg',
  ],
  coordinates: dslCoordinates,
  locationZoom: 16,
  audioSrc: dslHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'panorama-360', 'photo-gallery', 'location'],
  panorama: { src: dslPanoramaSrc },
  gallery: { albums: dslGalleryAlbums },
}

export const srsPagodaConfig: PagodaConfig = {
  dictKey: 'satuRatthaSumingala',
  heroImage: srsHeroImage,
  bannerImages: srsBannerImages,
  coordinates: srsCoordinates,
  locationZoom: 16,
  audioSrc: srsHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'panorama-360', 'photo-gallery', 'location'],
  panorama: { src: srsPanoramaSrc },
  gallery: { albums: srsGalleryAlbums },
}

export const krPagodaConfig: PagodaConfig = {
  dictKey: 'khemaRattha',
  heroImage: krHeroImage,
  coordinates: krCoordinates,
  locationZoom: 16,
  audioSrc: krHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'panorama-360', 'photo-gallery', 'location'],
  panorama: { src: krPanoramaSrc },
  gallery: { albums: krGalleryAlbums },
}

export const ttmbPagodaConfig: PagodaConfig = {
  dictKey: 'thattaThattahaMahaBodhi',
  heroImage: ttmbHeroImage,
  coordinates: ttmbCoordinates,
  locationZoom: 16,
  audioSrc: ttmbHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'panorama-360', 'photo-gallery', 'location'],
  panorama: { src: ttmbPanoramaSrc },
  gallery: { albums: ttmbGalleryAlbums },
}

export const skstPagodaConfig: PagodaConfig = {
  dictKey: 'swamKyeimShweHsanTaw',
  heroImage: skstHeroImage,
  coordinates: skstCoordinates,
  locationZoom: 13,
  audioSrc: skstHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'location'],
}

export const sodmPagodaConfig: PagodaConfig = {
  dictKey: 'shweOhnDaingMin',
  heroImage: sodmHeroImage,
  coordinates: sodmCoordinates,
  locationZoom: 13,
  audioSrc: sodmHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: sodmGalleryAlbums },
}

export const mhnbPagodaConfig: PagodaConfig = {
  dictKey: 'maingHnunNeeBayar',
  heroImage: mhnbHeroImage,
  coordinates: mhnbCoordinates,
  locationZoom: 13,
  audioSrc: mhnbHistoryAudioSrc,
  quickNavSectionIds: ['history-timeline', 'panorama-360', 'location'],
  panorama: { src: mhnbPanoramaSrc },
}
