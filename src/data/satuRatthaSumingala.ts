import { heroImages } from './images'

export const srsHeroImage = heroImages.satuRatthaSumingala

// Google Maps listing "Satu Rathta Sumingala", supplied by the project owner.
export const srsCoordinates = { lat: 21.172314737049497, lng: 99.75102077544402 }

// Equirectangular panorama of the pagoda courtyard, supplied by the project owner.
export const srsPanoramaSrc = '/360photo/sv360-CIHM0ogKEICAgIDE3a_aSw-20260916-142716.jpg'

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const srsGalleryAlbums: GalleryAlbum[] = [
  { id: 'stupa-mist', images: ['/images/saduyattathumindala/1.jpg'] },
  { id: 'guardian-gate', images: ['/images/saduyattathumindala/1-1.jpg'] },
]

// Same two photos as the gallery, reused as the hero's large-screen side grid.
export const srsBannerImages = ['/images/saduyattathumindala/1.jpg', '/images/saduyattathumindala/1-1.jpg']

// Supplied directly by the project owner; audio extracted from the source
// .mov (a video wrapping a voice recording) and re-encoded to MP3 for
// universal browser playback.
export const srsHistoryAudioSrc = '/audio/srs-history-narration.mp3'
