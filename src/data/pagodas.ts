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
  ttmbBannerImages,
  ttmbHistoryAudioSrc,
} from './thattaThattahaMahaBodhi'
import { skstHeroImage, skstCoordinates, skstHistoryAudioSrc } from './swamKyeimShweHsanTaw'
import { sodmHeroImage, sodmCoordinates, sodmHistoryAudioSrc, sodmGalleryAlbums } from './shweOhnDaingMin'
import { ntlHeroImage, ntlBannerImages, ntlCoordinates, ntlGalleryAlbums } from './naungTungLake'
import { khpHeroImage, khpBannerImages, khpCoordinates, khpGalleryAlbums } from './kengTungHawPalace'
import { ktwHeroImage, ktwBannerImages, ktwCoordinates, ktwGalleryAlbums } from './kengTungWaterfall'
import { lthHeroImage, lthBannerImages, lthCoordinates, lthGalleryAlbums } from './loneTreeHill'
import { kbgHeroImage, kbgBannerImages, kbgCoordinates, kbgGalleryAlbums } from './kengTungBuddhaGarden'
import { kctHeroImage, kctBannerImages, kctCoordinates, kctGalleryAlbums } from './kengTungClockTower'
import { nklHeroImage, nklBannerImages, nklCoordinates, nklGalleryAlbums } from './naungKhamLake'
import { plgHeroImage, plgBannerImages, plgCoordinates, plgGalleryAlbums } from './paliangGate'
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
    | 'loneTreeHill'
    | 'kengTungWaterfall'
    | 'kengTungHawPalace'
    | 'naungTungLake'
    | 'kengTungBuddhaGarden'
    | 'kengTungClockTower'
    | 'naungKhamLake'
    | 'paliangGate'
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
  bannerImages: ttmbBannerImages,
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

export const lthPlaceConfig: PagodaConfig = {
  dictKey: 'loneTreeHill',
  heroImage: lthHeroImage,
  bannerImages: lthBannerImages,
  coordinates: lthCoordinates,
  locationZoom: 16,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: lthGalleryAlbums },
}

export const ktwPlaceConfig: PagodaConfig = {
  dictKey: 'kengTungWaterfall',
  heroImage: ktwHeroImage,
  bannerImages: ktwBannerImages,
  coordinates: ktwCoordinates,
  locationZoom: 13,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: ktwGalleryAlbums },
}

export const khpPlaceConfig: PagodaConfig = {
  dictKey: 'kengTungHawPalace',
  heroImage: khpHeroImage,
  bannerImages: khpBannerImages,
  coordinates: khpCoordinates,
  locationZoom: 16,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: khpGalleryAlbums },
}

export const ntlPlaceConfig: PagodaConfig = {
  dictKey: 'naungTungLake',
  heroImage: ntlHeroImage,
  bannerImages: ntlBannerImages,
  coordinates: ntlCoordinates,
  locationZoom: 16,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: ntlGalleryAlbums },
}

export const kbgPlaceConfig: PagodaConfig = {
  dictKey: 'kengTungBuddhaGarden',
  heroImage: kbgHeroImage,
  bannerImages: kbgBannerImages,
  coordinates: kbgCoordinates,
  locationZoom: 15,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: kbgGalleryAlbums },
}

export const kctPlaceConfig: PagodaConfig = {
  dictKey: 'kengTungClockTower',
  heroImage: kctHeroImage,
  bannerImages: kctBannerImages,
  coordinates: kctCoordinates,
  locationZoom: 17,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: kctGalleryAlbums },
}

export const nklPlaceConfig: PagodaConfig = {
  dictKey: 'naungKhamLake',
  heroImage: nklHeroImage,
  bannerImages: nklBannerImages,
  coordinates: nklCoordinates,
  locationZoom: 16,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: nklGalleryAlbums },
}

export const plgPlaceConfig: PagodaConfig = {
  dictKey: 'paliangGate',
  heroImage: plgHeroImage,
  bannerImages: plgBannerImages,
  coordinates: plgCoordinates,
  locationZoom: 17,
  quickNavSectionIds: ['history-timeline', 'photo-gallery', 'location'],
  gallery: { albums: plgGalleryAlbums },
}
