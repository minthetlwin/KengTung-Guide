import { heroImages, mahaMuniFaceImage } from './images'

// Supplied directly by the project owner.
export const mmmHeroImage = heroImages.mahaMyatMuni

// Supplied directly by the project owner — used as a 3-photo grid on large
// screens instead of stretching one photo full-bleed (which forced heavy
// top/bottom cropping once the hero's width outgrew the source photo's own
// aspect ratio). Below `lg`, the hero still falls back to `mmmHeroImage`.
export const mmmBannerImages = [
  '/images/maharmyatmuni/banner/mahar_1.jpg',
  '/images/maharmyatmuni/banner/face_clean_3.jpg',
  '/images/maharmyatmuni/banner/mahar_2.jpg',
]

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
      '/images/maharmyatmuni/03/centennial-02.jpg',
      '/images/maharmyatmuni/03/centennial-03.jpg',
      '/images/maharmyatmuni/03/centennial-04.jpg',
      '/images/maharmyatmuni/03/centennial-05.jpg',
      '/images/maharmyatmuni/03/centennial-06.jpg',
      '/images/maharmyatmuni/03/centennial-07.jpg',
      '/images/maharmyatmuni/03/centennial-08.jpg',
    ],
  },
  {
    id: 'face-washing',
    images: [
      '/images/maharmyatmuni/04/face_clean_1.jpg',
      '/images/maharmyatmuni/04/face_clean_2.jpg',
      '/images/maharmyatmuni/04/face_clean_3.jpg',
      '/images/maharmyatmuni/04/face_clean_4.jpg',
      '/images/maharmyatmuni/04/face_clean_5.jpg',
    ],
  },
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
