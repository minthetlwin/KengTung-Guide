export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const ntlHeroImage = '/famousplace/naungtunglake/image16.jpeg'

export const ntlBannerImages = ['/famousplace/naungtunglake/image17.jpeg', '/famousplace/naungtunglake/image15.jpeg']

// Approximate — centre of the lake in the heart of Kengtung. Replace with the
// Google Maps pin once the owner supplies it.
export const ntlCoordinates = { lat: 21.2905, lng: 99.6065 }

export const ntlGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'naung-tung-lake',
    images: [
      '/famousplace/naungtunglake/image16.jpeg',
      '/famousplace/naungtunglake/image17.jpeg',
      '/famousplace/naungtunglake/image15.jpeg',
    ],
  },
]
