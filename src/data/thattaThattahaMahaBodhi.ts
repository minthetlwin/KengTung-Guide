import { heroImages } from './images'

export const ttmbHeroImage = heroImages.thattaThattahaMahaBodhi

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
]

// Supplied directly by the project owner; audio extracted from the source
// .mov (a video wrapping a voice recording) and re-encoded to MP3 for
// universal browser playback.
export const ttmbHistoryAudioSrc = '/audio/ttmb-history-narration.mp3'
