import { heroImages } from './images'

export const sodmHeroImage = heroImages.shweOhnDaingMin

// No published GPS fix exists for Yan Mine village itself; the source history
// gives only a military map grid reference (LK-334284) with no lat/lng, so
// this pins Mong Khet (Maing Khat) Township's own center (21°42'00"N
// 99°23'00"E — Wikipedia "Mong Khet Township", whose Burmese name
// မိုင်းခတ်မြို့နယ် matches the township named in the source) as the nearest
// identifiable landmark. Flagged as approximate in the UI.
export const sodmCoordinates = { lat: 21.7, lng: 99.38333 }

// Supplied directly by the project owner; audio extracted from the source
// .mov (a black video track wrapping a voice recording) and re-encoded to
// MP3 for universal browser playback.
export const sodmHistoryAudioSrc = '/audio/sodm-history-narration.mp3'

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const sodmGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'pagoda-exterior',
    images: [
      '/images/shweoudaungmin/6-1.jpg',
      '/images/shweoudaungmin/6-2.jpg',
      '/images/shweoudaungmin/6-3.jpg',
      '/images/shweoudaungmin/6-4.jpg',
    ],
  },
]
