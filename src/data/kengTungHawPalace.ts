export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const khpHeroImage = '/famousplace/kengtunghawplace/image15.jpeg'

export const khpBannerImages = ['/famousplace/kengtunghawplace/image13.jpeg', '/famousplace/kengtunghawplace/image14.jpeg']

// Approximate — Haw Palace Park on the Naung Tung Lake circular road, Ward 5.
// Replace with the Google Maps pin once the owner supplies it.
export const khpCoordinates = { lat: 21.2893, lng: 99.608 }

export const khpGalleryAlbums: GalleryAlbum[] = [
  { id: 'original-palace', images: ['/famousplace/kengtunghawplace/image13.jpeg'] },
  {
    id: 'replica-museum',
    images: ['/famousplace/kengtunghawplace/image14.jpeg', '/famousplace/kengtunghawplace/image15.jpeg'],
  },
]
