import { heroImages } from './images'

export const krHeroImage = heroImages.khemaRattha

// Google Maps listing "Khema Rattha Prophecy Mudra Buddha Statue", supplied by the project owner.
export const krCoordinates = { lat: 21.287607020289972, lng: 99.59431140947929 }

// Equirectangular panorama of the statue plaza, supplied by the project owner.
export const krPanoramaSrc = '/360photo/sv360-CIHM0ogKEICAgIDqxcugdQ-20260916-152905.jpg'

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const krGalleryAlbums: GalleryAlbum[] = [
  { id: 'gold-robe-record', images: ['/images/khemarattha/pagoda_8_record.jpg'] },
  {
    id: 'statue-grounds',
    images: [
      '/images/khemarattha/01/photo_2026-09-26 20.37.51.jpeg',
      '/images/khemarattha/01/photo_2026-09-26 20.37.59.jpeg',
      '/images/khemarattha/01/photo_2026-09-26 20.38.05.jpeg',
      '/images/khemarattha/01/photo_2026-09-26 20.38.15.jpeg',
    ],
  },
  {
    id: 'excavated-relics',
    images: [
      '/images/khemarattha/02/photo_2026-09-26 20.39.33.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.39.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.42.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.46.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.48.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.50.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.51.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.52.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.54.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.55.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.58.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.39.59.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.40.00.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.40.01.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.40.03.jpeg',
      '/images/khemarattha/02/photo_2026-09-26 20.40.04.jpeg',
    ],
  },
]

// Supplied directly by the project owner; audio extracted from the source
// .mov (a video wrapping a voice recording) and re-encoded to MP3 for
// universal browser playback.
export const krHistoryAudioSrc = '/audio/kr-history-narration.mp3'
