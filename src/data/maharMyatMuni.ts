import { heroImages, mahaMuniFaceImage } from './images'

// Supplied directly by the project owner.
export const mmmHeroImage = heroImages.mahaMyatMuni

// Supplied directly by the project owner — used as a 3-photo grid on large
// screens instead of stretching one photo full-bleed (which forced heavy
// top/bottom cropping once the hero's width outgrew the source photo's own
// aspect ratio). Below `lg`, the hero still falls back to `mmmHeroImage`.
export const mmmBannerImages = [
  '/images/maharmyatmuni/banner/mahar_1.jpg',
  '/images/maharmyatmuni/banner/mahar_2.jpg',
]

// Wikimedia Commons close-up of the gilded Mahamuni-lineage image, used as a
// devotional detail shot alongside the beliefs & traditions section.
export const mmmFaceImage = mahaMuniFaceImage

// Supplied directly by the project owner; audio extracted from the source
// .mov (a black video track wrapping a voice recording) and re-encoded to
// MP3 for universal browser playback.
export const mmmHistoryAudioSrc = '/audio/mmm-history-narration.mp3'

// Equirectangular panorama of the gilded shrine hall, supplied by the project owner.
export const mmmPanoramaSrc = '/360photo/sv360-CIABIhDE_M7MqePMTfCjloqMrOJ--20260915-163906.jpg'

export interface GalleryAlbum {
  id: string
  images: string[]
}

// Supplied directly by the project owner — scanned pages of the pagoda's
// history written in the Gone Shan script, shown as a supplementary reading
// after the main History section.
export const mmmShanHistoryPages = [
  '/images/maharmyatmuni/gone-shan-history/Shan_1.JPG',
  '/images/maharmyatmuni/gone-shan-history/Shan_2.JPG',
  '/images/maharmyatmuni/gone-shan-history/Shan_3.JPG',
  '/images/maharmyatmuni/gone-shan-history/Shan_4.JPG',
  '/images/maharmyatmuni/gone-shan-history/Shan_5.JPG',
]

// Supplied directly by the project owner.
export const mmmGalleryAlbums: GalleryAlbum[] = [
  {
    id: 'centennial-2022',
    images: [
      '/images/maharmyatmuni/03/ceremony-01.jpg',
      '/images/maharmyatmuni/03/ceremony-02.jpg',
      '/images/maharmyatmuni/03/ceremony-03.jpg',
      '/images/maharmyatmuni/03/ceremony-04.jpg',
      '/images/maharmyatmuni/03/ceremony-05.jpg',
      '/images/maharmyatmuni/03/ceremony-06.jpg',
      '/images/maharmyatmuni/03/ceremony-07.jpg',
      '/images/maharmyatmuni/03/ceremony-08.jpg',
      '/images/maharmyatmuni/03/ceremony-09.jpg',
      '/images/maharmyatmuni/03/ceremony-10.jpg',
      '/images/maharmyatmuni/03/ceremony-12.jpg',
      '/images/maharmyatmuni/03/ceremony-13.jpg',
      '/images/maharmyatmuni/03/ceremony-15.jpg',
      '/images/maharmyatmuni/03/ceremony-16.jpg',
      '/images/maharmyatmuni/03/ceremony-17.jpg',
      '/images/maharmyatmuni/03/ceremony-18.jpg',
      '/images/maharmyatmuni/03/ceremony-19.jpg',
      '/images/maharmyatmuni/03/ceremony-20.jpg',
      '/images/maharmyatmuni/03/ceremony-21.jpg',
      '/images/maharmyatmuni/03/ceremony-22.jpg',
      '/images/maharmyatmuni/03/ceremony-23.jpg',
      '/images/maharmyatmuni/03/ceremony-24.jpg',
    ],
  },
  {
    id: 'face-washing',
    images: [
      '/images/maharmyatmuni/06/face-cleaning-01.jpg',
      '/images/maharmyatmuni/06/face-cleaning-02.jpg',
      '/images/maharmyatmuni/06/face-cleaning-03.jpg',
      '/images/maharmyatmuni/06/face-cleaning-04.jpg',
    ],
  },
  {
    id: 'bodhi-watering',
    images: [
      '/images/maharmyatmuni/05/kason-01.jpg',
      '/images/maharmyatmuni/05/kason-02.jpg',
      '/images/maharmyatmuni/05/kason-03.jpg',
      '/images/maharmyatmuni/05/kason-04.jpg',
      '/images/maharmyatmuni/05/kason-06.jpg',
      '/images/maharmyatmuni/05/kason-07.jpg',
      '/images/maharmyatmuni/05/kason-08.jpg',
    ],
  },
  {
    id: 'almsgiving',
    images: [
      '/images/maharmyatmuni/01/almsgiving-04.jpg',
      '/images/maharmyatmuni/01/photo_2026-09-24 20.09.46.jpeg',
      '/images/maharmyatmuni/01/photo_2026-09-24 20.10.01.jpeg',
      '/images/maharmyatmuni/01/photo_2026-09-24 20.09.49.jpeg',
      '/images/maharmyatmuni/01/photo_2026-09-24 20.09.52.jpeg',
      '/images/maharmyatmuni/01/photo_2026-09-24 20.09.55.jpeg',
      '/images/maharmyatmuni/01/photo_2026-09-24 20.09.57.jpeg',
    ],
  },
  {
    id: 'dhammacakka',
    images: [
      '/images/maharmyatmuni/02/gone-shan-dhammacakka-01.jpg',
      '/images/maharmyatmuni/02/gone-shan-dhammacakka-02.jpg',
      '/images/maharmyatmuni/02/gone-shan-dhammacakka-03.jpg',
      '/images/maharmyatmuni/02/gone-shan-dhammacakka-04.jpg',
    ],
  },
]

// 21°17'29"N 99°36'11"E — Wikidata Q60749674.
export const mmmCoordinates = { lat: 21.291416, lng: 99.602946 }

// Supplied directly by the project owner — the pre-2020s board of trustees.
// Each portrait already has its name and tenure years printed on the scanned
// photo itself, and the group photo captures the full board together, so
// unlike `mmmTrusteePhotos` these aren't paired with separate typed name/role
// data — the caption baked into the image is the record.
export const mmmOldBoardPhotos = {
  groupPhoto: '/images/maharmyatmuni/old-boards/post.jpg',
  members: [
    '/images/maharmyatmuni/old-boards/old_1.png',
    '/images/maharmyatmuni/old-boards/old_2.png',
    '/images/maharmyatmuni/old-boards/old_3.png',
    '/images/maharmyatmuni/old-boards/old_4.png',
    '/images/maharmyatmuni/old-boards/old_5.png',
    '/images/maharmyatmuni/old-boards/old_6.png',
  ],
}

// Supplied directly by the project owner — a group photo of the current
// (post-2020s) board, shown above the named New Board roster below.
export const mmmTodayBoardPhoto = '/images/maharmyatmuni/boards/today.jpg'

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
  '/images/maharmyatmuni/boards/Post_4.JPG',
  '/images/maharmyatmuni/boards/u-sai-sai-khan.jpg',
  '/images/maharmyatmuni/boards/u-sai-ri-tim-wun.jpg',
  '/images/maharmyatmuni/boards/u-sam-than.jpg',
  '/images/maharmyatmuni/boards/u-nan-maha-than.jpg',
  '/images/maharmyatmuni/boards/u-aung-than.jpg',
  '/images/maharmyatmuni/boards/u-sai-mon-ywet.jpg',
  '/images/maharmyatmuni/boards/nang-wo-thaung.jpg',
  '/images/maharmyatmuni/boards/u-sai-sai-hsai.jpg',
  '/images/maharmyatmuni/boards/u-sai-kyaw-kyaw.jpg',
  '/images/maharmyatmuni/boards/u-sai-seng-naw.JPG',
  '/images/maharmyatmuni/boards/u-lone-kyauk.jpg',
  '/images/maharmyatmuni/boards/dr.saimaukzing.JPG',
  '/images/maharmyatmuni/boards/dr-sai-sai-tit.jpg',
  '/images/maharmyatmuni/boards/u-nan-seig.JPG',
  '/images/maharmyatmuni/boards/u-nan-yi.JPG',
  '/images/maharmyatmuni/boards/today_16.JPG',
  '/images/maharmyatmuni/boards/today_17.JPG',
  '/images/maharmyatmuni/boards/today_18.JPG',
  '/images/maharmyatmuni/boards/today_19.JPG',
  '/images/maharmyatmuni/boards/today_20.JPG',
  '/images/maharmyatmuni/boards/today_21.JPG',
  '/images/maharmyatmuni/boards/today_22.JPG',
]
