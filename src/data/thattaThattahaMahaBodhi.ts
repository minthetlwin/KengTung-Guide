import { heroImages } from './images'

export const ttmbHeroImage = heroImages.thattaThattahaMahaBodhi

export const ttmbBannerImages = [
  '/images/hattaThattahaMahaBodhi/homebanner/photo_2026-09-26 20.07.33.jpeg',
  '/images/hattaThattahaMahaBodhi/homebanner/photo_2026-09-26 20.07.39.jpeg',
]

// Google Maps listing "Thatta Thattaha Maha Bodhi Pagoda", supplied by the project owner.
export const ttmbCoordinates = { lat: 21.1511435, lng: 99.7266444 }

// Equirectangular panorama of the pagoda courtyard, supplied by the project owner.
export const ttmbPanoramaSrc = '/360photo/sv360-CIHM0ogKEICAgIDBsOfoHw-20260916-172930.jpg'

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const ttmbGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'upper-relic-enshrinement',
    images: [
      '/images/hattaThattahaMahaBodhi/01/upper-relic-enshrinement-01.jpg',
      '/images/hattaThattahaMahaBodhi/01/golden-bell-consecration.jpg',
      '/images/hattaThattahaMahaBodhi/01/golden-umbrella-spire.jpg',
    ],
  },
  {
    id: 'buddha-garden-compound',
    images: [
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.21.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.26.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.29.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.31.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.32.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.33.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.34.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.35.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.36.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.37.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.38.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.39.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.40.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.41.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.42.jpeg',
      '/images/hattaThattahaMahaBodhi/02/photo_2026-09-26 20.07.43.jpeg',
    ],
  },
]

// Supplied directly by the project owner; audio extracted from the source
// .mov (a video wrapping a voice recording) and re-encoded to MP3 for
// universal browser playback.
export const ttmbHistoryAudioSrc = '/audio/ttmb-history-narration.mp3'
