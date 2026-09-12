import { heroImages } from './images'

export const wzkHeroImage = heroImages.watZomKham

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const wzkGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'gold-robe-donation',
    images: [
      '/images/zohmkham/01/gold-robe-offering-01.jpg',
      '/images/zohmkham/01/gold-robe-offering-02.jpg',
      '/images/zohmkham/01/gold-robe-offering-03.jpg',
      '/images/zohmkham/01/gold-robe-offering-04.jpg',
      '/images/zohmkham/01/gold-robe-offering-05.jpg',
      '/images/zohmkham/01/gold-robe-offering-06.jpg',
      '/images/zohmkham/01/gold-robe-offering-07.jpg',
    ],
  },
]

// Supplied directly by the project owner; audio extracted from the source
// .mov (a black video track wrapping a voice recording) and re-encoded to
// MP3 for universal browser playback.
export const wzkHistoryAudioSrc = '/audio/wzk-history-narration.mp3'

// 21°17'39"N 99°36'08"E — Wikipedia "Wat Zom Khum".
export const wzkCoordinates = { lat: 21.294167, lng: 99.602222 }
