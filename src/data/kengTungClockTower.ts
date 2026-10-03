export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const kctHeroImage = '/famousplace/kengtungclocktower/clock-tower-01.jpg'

export const kctBannerImages = ['/famousplace/kengtungclocktower/clock-tower-03.jpg', '/famousplace/kengtungclocktower/clock-tower-04.jpg']

// Approximate — the main junction by Kengtung central market. Replace with
// the Google Maps pin once the owner supplies it.
export const kctCoordinates = { lat: 21.2925, lng: 99.6045 }

export const kctGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'clock-tower',
    images: [
      '/famousplace/kengtungclocktower/clock-tower-01.jpg',
      '/famousplace/kengtungclocktower/clock-tower-02.jpg',
      '/famousplace/kengtungclocktower/clock-tower-03.jpg',
      '/famousplace/kengtungclocktower/clock-tower-04.jpg',
    ],
  },
]
