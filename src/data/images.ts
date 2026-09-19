// Photography sourced from Wikimedia Commons (Creative Commons licensed).
// Note: Wikimedia only pre-renders a fixed set of thumbnail widths
// (500 / 960 / 1280 / 1920px) — arbitrary widths 400 the request, so
// every image below points at one of those verified bucket sizes.

const WAT_JONG_KHAM_LAKE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Wat_jong_kham_lake_edit.jpg/1920px-Wat_jong_kham_lake_edit.jpg'
const INDEIN_MONKS_STUPAS =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Indein%2C_Buddhist_monks%2C_White_Buddhist_pagodas%2C_Shan_State%2C_Shan_Hills%2C_Myanmar.jpg/1920px-Indein%2C_Buddhist_monks%2C_White_Buddhist_pagodas%2C_Shan_State%2C_Shan_Hills%2C_Myanmar.jpg'
const MAHA_MUNI_FACE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/007_Maha_Muni_Image_%288932949118%29.jpg/1280px-007_Maha_Muni_Image_%288932949118%29.jpg'
const GOLDEN_PALACE_CARVING =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Golden_Palace_Monastery_-_Mandalay_20130211-002.jpg/1280px-Golden_Palace_Monastery_-_Mandalay_20130211-002.jpg'

// Supplied directly by the project owner (originals converted to optimized JPEG).
const MAHA_MYAT_MUNI_GATE = '/maha-myat-muni.jpg'
const YARZAMUNI_STATUE = '/yarzamuni.jpg'
const WAT_JONG_KHAM_GALLERY = '/zomkham.png'
const DAT_SAM_LOEI_PAGODA = '/dat-sam-loei.png'
const SATU_RATTHA_SUMINGALA_PAGODA = '/sadu-yatta-thu-mindala.png'
const KHEMA_RATTHA_STATUE = '/khema-rattha.png'
const THATTA_THATTAHA_MAHA_BODHI_PAGODA = '/sattasattaha-mahar.png'
const SWAM_KYEIM_SHWE_HSAN_TAW_PAGODA = '/swamkyeim.png'
const SHWE_OHN_DAING_MIN_PAGODA = '/shweohndaingmin.png'
const MAING_HNUN_NEE_BAYAR = '/mainghnun-nee-bayar.png'

export const heroImages = {
  watZomKham: WAT_JONG_KHAM_GALLERY,
  mahaMyatMuni: MAHA_MYAT_MUNI_GATE,
  yarzamuni: YARZAMUNI_STATUE,
  datSamLoei: DAT_SAM_LOEI_PAGODA,
  satuRatthaSumingala: SATU_RATTHA_SUMINGALA_PAGODA,
  khemaRattha: KHEMA_RATTHA_STATUE,
  thattaThattahaMahaBodhi: THATTA_THATTAHA_MAHA_BODHI_PAGODA,
  swamKyeimShweHsanTaw: SWAM_KYEIM_SHWE_HSAN_TAW_PAGODA,
  shweOhnDaingMin: SHWE_OHN_DAING_MIN_PAGODA,
  maingHnunNeeBayar: MAING_HNUN_NEE_BAYAR,
}

// Used outside the hero slideshow (pilgrimage map preview, Wat Zom Kham wayfinding).
export const naungTungImage = WAT_JONG_KHAM_LAKE

export const spotlightImage = INDEIN_MONKS_STUPAS

// Referenced directly by the Wat Zom Kham gallery, independent of the homepage
// directory codes below (which are free to be reassigned as cards change).
export const mahaMuniFaceImage = MAHA_MUNI_FACE
export const goldenPalaceCarvingImage = GOLDEN_PALACE_CARVING

export const directoryImages = {
  'KT-01': WAT_JONG_KHAM_GALLERY,
  'KT-04': MAHA_MYAT_MUNI_GATE,
  'KT-05': YARZAMUNI_STATUE,
  'KT-06': DAT_SAM_LOEI_PAGODA,
  'KT-07': SATU_RATTHA_SUMINGALA_PAGODA,
  'KT-08': KHEMA_RATTHA_STATUE,
  'KT-09': THATTA_THATTAHA_MAHA_BODHI_PAGODA,
  'KT-10': SWAM_KYEIM_SHWE_HSAN_TAW_PAGODA,
  'KT-11': SHWE_OHN_DAING_MIN_PAGODA,
  'KT-12': MAING_HNUN_NEE_BAYAR,
} as const
