export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const lthHeroImage = '/famousplace/lonetreehill/image2.jpeg'

export const lthBannerImages = ['/famousplace/lonetreehill/image1.jpeg', '/famousplace/lonetreehill/image3.jpeg']

// Approximate — on the hilltop beside the Khema Rattha standing Buddha, west of
// the town centre. Replace with the Google Maps pin once the owner supplies it.
export const lthCoordinates = { lat: 21.2866, lng: 99.5952 }

export const lthGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'lone-tree',
    images: [
      '/famousplace/lonetreehill/image2.jpeg',
      '/famousplace/lonetreehill/image1.jpeg',
      '/famousplace/lonetreehill/image3.jpeg',
    ],
  },
]
