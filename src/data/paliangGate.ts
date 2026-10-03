export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner. The source's own cover photo is only
// 447px, so the hero uses the 1280px photo of the gate instead.
export const plgHeroImage = '/famousplace/palianggate/paliang-gate-03.jpg'

export const plgBannerImages = ['/famousplace/palianggate/paliang-gate-04.jpg', '/famousplace/palianggate/paliang-gate-05.jpg']

// Approximate — east of the town centre on the road to Loi Mwe. Replace with
// the Google Maps pin once the owner supplies it.
export const plgCoordinates = { lat: 21.288, lng: 99.6125 }

export const plgGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'paliang-gate',
    images: [
      '/famousplace/palianggate/paliang-gate-03.jpg',
      '/famousplace/palianggate/paliang-gate-01.jpg',
      '/famousplace/palianggate/paliang-gate-02.jpg',
      '/famousplace/palianggate/paliang-gate-04.jpg',
      '/famousplace/palianggate/paliang-gate-05.jpg',
      '/famousplace/palianggate/paliang-gate-06.jpg',
    ],
  },
]
