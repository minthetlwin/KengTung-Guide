import { heroImages } from './images'

export const dslHeroImage = heroImages.datSamLoei

// Google Maps listing "Dhart Zom Doi Kabar Aye Pagoda", supplied by the project owner.
export const dslCoordinates = { lat: 21.3266966, lng: 99.707297 }

// Equirectangular panorama of the pagoda courtyard, supplied by the project owner.
export const dslPanoramaSrc = '/360photo/sv360-CIHM0ogKEICAgICEqZLQtwE-20260915-143334.jpg'

// Supplied directly by the project owner; audio extracted from the source
// .mov (a video wrapping a voice recording) and re-encoded to MP3 for
// universal browser playback.
export const dslHistoryAudioSrc = '/audio/dsl-history-narration.mp3'

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner (originals converted to optimized JPEG).
export const dslGalleryAlbums: GalleryAlbum[] = [
  { id: 'exterior-01', images: ['/images/kabaraye/kabaraye-exterior-01.jpg'] },
  { id: 'exterior-02', images: ['/images/kabaraye/kabaraye-exterior-02.jpg'] },
  { id: 'interior-hall', images: ['/images/kabaraye/kabaraye-interior-hall.jpg'] },
  { id: 'interior-shrine', images: ['/images/kabaraye/kabaraye-interior-shrine.jpg'] },
  { id: 'terrace-gong', images: ['/images/kabaraye/kabaraye-terrace-gong.jpg'] },
]
