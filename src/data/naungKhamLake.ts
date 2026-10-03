export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner (photos from the "Kyaing Tong, Myanmar" Facebook page).
export const nklHeroImage = '/famousplace/naungkhamlake/naung-kham-lake-01.jpg'

export const nklBannerImages = ['/famousplace/naungkhamlake/naung-kham-lake-02.jpg', '/famousplace/naungkhamlake/naung-kham-lake-03.jpg']

// Approximate — on Airport Road, south-east of the town centre. Replace with
// the Google Maps pin once the owner supplies it.
export const nklCoordinates = { lat: 21.286, lng: 99.616 }

export const nklGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'naung-kham-lake',
    images: [
      '/famousplace/naungkhamlake/naung-kham-lake-01.jpg',
      '/famousplace/naungkhamlake/naung-kham-lake-02.jpg',
      '/famousplace/naungkhamlake/naung-kham-lake-03.jpg',
      '/famousplace/naungkhamlake/naung-kham-lake-04.jpg',
    ],
  },
]
