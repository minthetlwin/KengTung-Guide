export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const ktwHeroImage = '/famousplace/kengtungwaterfall/image5.jpeg'

export const ktwBannerImages = ['/famousplace/kengtungwaterfall/image6.jpeg', '/famousplace/kengtungwaterfall/image4.jpeg']

// Approximate — roughly 12 km east of the town centre near Pin Tauk village.
// Replace with the Google Maps pin once the owner supplies it.
export const ktwCoordinates = { lat: 21.29, lng: 99.72 }

export const ktwGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'waterfall',
    images: [
      '/famousplace/kengtungwaterfall/image5.jpeg',
      '/famousplace/kengtungwaterfall/image6.jpeg',
      '/famousplace/kengtungwaterfall/image4.jpeg',
    ],
  },
]
