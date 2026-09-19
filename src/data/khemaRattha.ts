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
]

// Supplied directly by the project owner; audio extracted from the source
// .mov (a video wrapping a voice recording) and re-encoded to MP3 for
// universal browser playback.
export const krHistoryAudioSrc = '/audio/kr-history-narration.mp3'
