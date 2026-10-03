export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner (photos from the "Kyaing Tong, Myanmar" Facebook page).
export const kbgHeroImage = '/famousplace/kengtungbuddhagarden/buddha-garden-01.jpg'

export const kbgBannerImages = ['/famousplace/kengtungbuddhagarden/buddha-garden-03.jpg', '/famousplace/kengtungbuddhagarden/buddha-garden-04.jpg']

// Approximate — the owner's source gives no address, so this is the town
// centre. Replace with the Google Maps pin once the owner supplies it.
export const kbgCoordinates = { lat: 21.2917, lng: 99.6083 }

export const kbgGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'buddha-garden',
    images: [
      '/famousplace/kengtungbuddhagarden/buddha-garden-01.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-02.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-03.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-04.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-05.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-06.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-07.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-08.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-09.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-10.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-11.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-12.jpg',
      '/famousplace/kengtungbuddhagarden/buddha-garden-13.jpg',
    ],
  },
]
