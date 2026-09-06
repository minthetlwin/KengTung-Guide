import { heroImages, mahaMuniFaceImage } from './images'

// Supplied directly by the project owner.
export const mmmHeroImage = heroImages.mahaMyatMuni

// Wikimedia Commons close-up of the gilded Mahamuni-lineage image, used as a
// devotional detail shot alongside the beliefs & traditions section.
export const mmmFaceImage = mahaMuniFaceImage

// Supplied directly by the project owner; audio extracted from the source
// .mov (a black video track wrapping a voice recording) and re-encoded to
// MP3 for universal browser playback.
export const mmmHistoryAudioSrc = '/audio/mmm-history-narration.mp3'

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner.
export const mmmGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'almsgiving',
    images: [
      '/images/maharmyatmuni/01/almsgiving-01.jpg',
      '/images/maharmyatmuni/01/almsgiving-02.jpg',
      '/images/maharmyatmuni/01/almsgiving-03.jpg',
      '/images/maharmyatmuni/01/almsgiving-04.jpg',
      '/images/maharmyatmuni/01/almsgiving-05.jpg',
      '/images/maharmyatmuni/01/almsgiving-06.jpg',
    ],
  },
  {
    id: 'dhammacakka',
    images: [
      '/images/maharmyatmuni/02/dhammacakka-01.jpg',
      '/images/maharmyatmuni/02/dhammacakka-02.jpg',
      '/images/maharmyatmuni/02/dhammacakka-03.jpg',
      '/images/maharmyatmuni/02/dhammacakka-04.jpg',
      '/images/maharmyatmuni/02/dhammacakka-05.jpg',
    ],
  },
  {
    id: 'centennial-2022',
    images: [
      '/images/maharmyatmuni/03/centennial-01.jpg',
      '/images/maharmyatmuni/03/centennial-02.jpg',
      '/images/maharmyatmuni/03/centennial-03.jpg',
      '/images/maharmyatmuni/03/centennial-04.jpg',
      '/images/maharmyatmuni/03/centennial-05.jpg',
      '/images/maharmyatmuni/03/centennial-06.jpg',
      '/images/maharmyatmuni/03/centennial-07.jpg',
      '/images/maharmyatmuni/03/centennial-08.jpg',
    ],
  },
]

// 21°17'29"N 99°36'11"E — Wikidata Q60749674.
export const mmmCoordinates = { lat: 21.291416, lng: 99.602946 }

// Supplied directly by the project owner. Order matches `trustees.people`
// in each locale file — index-aligned, not keyed, since photos are shared
// across languages while names/roles are translated per locale.
export const mmmTrusteePhotos: string[] = [
  '/images/maharmyatmuni/boards/bhaddanta-khemasara.jpg',
  '/images/maharmyatmuni/boards/bhaddanta-zawtika.jpg',
  '/images/maharmyatmuni/boards/bhaddanta-gambhira.jpg',
  '/images/maharmyatmuni/boards/bhaddanta-uttama.jpg',
  '/images/maharmyatmuni/boards/bhaddanta-sandavara.jpg',
  '/images/maharmyatmuni/boards/bhaddanta-kusala.jpg',
  '/images/maharmyatmuni/boards/bhaddanta-dhammavara.jpg',
  '/images/maharmyatmuni/boards/bhaddanta-pyinnyathiri.jpg',
  '/images/maharmyatmuni/boards/u-sai-tit-aung.jpg',
  '/images/maharmyatmuni/boards/u-loon-sai.jpg',
  '/images/maharmyatmuni/boards/u-san-yi.jpg',
  '/images/maharmyatmuni/boards/u-sai-sai-khan.jpg',
  '/images/maharmyatmuni/boards/u-sai-ri-tim-wun.jpg',
  '/images/maharmyatmuni/boards/u-sam-than.jpg',
  '/images/maharmyatmuni/boards/u-nan-maha-than.jpg',
  '/images/maharmyatmuni/boards/u-aung-than.jpg',
  '/images/maharmyatmuni/boards/u-sai-mon-ywet.jpg',
  '/images/maharmyatmuni/boards/nang-wo-thaung.jpg',
  '/images/maharmyatmuni/boards/u-sai-sai-hsai.jpg',
  '/images/maharmyatmuni/boards/u-sai-kyaw-kyaw.jpg',
  '/images/maharmyatmuni/boards/u-lone-kyauk.jpg',
  '/images/maharmyatmuni/boards/dr-sai-sai-tit.jpg',
]
