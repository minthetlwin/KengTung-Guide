// Photography supplied directly by the project owner (Maha Myat Muni Pagoda
// galleries). targetDate is the next estimated occurrence — these are lunar
// Myanmar calendar observances, so exact Gregorian dates shift year to year;
// each date below is a reasonable approximation used to drive the live
// countdown, cross-checked against published Myanmar full-moon calendars.

export interface FestivalMeta {
  id: string
  image: string
  // Omitted when the date is not yet known — the UI then shows `dateTba`.
  targetDate?: string
  // Detail-page photos: an `mmmGalleryAlbums` id for Maha Myat Muni festivals,
  // or the festival's own photos when it is held elsewhere.
  albumId?: string
  images?: string[]
  // Page for the venue, linked from the detail page; omitted when the festival
  // has no single venue (e.g. held across villages).
  venuePath?: string
}

const ANNUAL_FESTIVAL_IMAGE = '/images/maharmyatmuni/03/centennial-01.jpg'
const PALACE_ALMSGIVING_IMAGE = '/images/maharmyatmuni/01/almsgiving-04.jpg'
const BODHI_WATERING_IMAGE = '/images/maharmyatmuni/05/photo_2026-09-26 20.17.06.jpeg'
const PROTECTIVE_CHANTING_IMAGE = '/images/maharmyatmuni/02/dhammacakka-03.jpg'

const INTL_LOCALES: Record<string, string> = { en: 'en-US', my: 'my-MM', th: 'th-TH' }

export function formatFestivalDate(targetDate: string, locale: string) {
  return new Intl.DateTimeFormat(INTL_LOCALES[locale] ?? 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(targetDate))
}

export const festivalsMeta:[
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
  FestivalMeta,
] = [
  // Full moon of Tazaungmon — Nov 24, 2026.
  { id: 'annual-pagoda-festival', image: ANNUAL_FESTIVAL_IMAGE, targetDate: '2026-11-24T06:00:00+06:30', albumId: 'centennial-2022', venuePath: '/' },
  { id: 'palace-almsgiving', image: PALACE_ALMSGIVING_IMAGE, targetDate: '2026-11-24T06:00:00+06:30', albumId: 'almsgiving', venuePath: '/' },
  // Full moon of Kason — May 20, 2027.
  { id: 'bodhi-watering', image: BODHI_WATERING_IMAGE, targetDate: '2027-05-20T09:00:00+06:30', albumId: 'bodhi-watering', venuePath: '/' },
  // Nearest quarterly full moon — Oct 26, 2026.
  { id: 'protective-chanting', image: PROTECTIVE_CHANTING_IMAGE, targetDate: '2026-10-26T18:00:00+06:30', albumId: 'dhammacakka', venuePath: '/' },
  // Held after the planting season on the Akha calendar; dates vary by village.
  // Estimated late August — replace once the organisers announce the date.
  {
    id: 'akha-swing-festival',
    image: '/festival/akhaswingfestival/image20.jpeg',
    targetDate: '2027-08-28T09:00:00+06:30',
    images: [
      '/festival/akhaswingfestival/image20.jpeg',
      '/festival/akhaswingfestival/image19.jpeg',
      '/festival/akhaswingfestival/image21.jpeg',
      '/festival/akhaswingfestival/image18.jpeg',
    ],
  },
  // Collective festival held in Kengtung Township (41st: Feb 2025, 42nd: Jan 2026).
  // Estimated late January — replace once the organisers announce the date.
  {
    id: 'lahu-new-year-festival',
    image: '/festival/lahunewyearfestival/image25.jpeg',
    targetDate: '2027-01-25T09:00:00+06:30',
    images: [
      '/festival/lahunewyearfestival/image25.jpeg',
      '/festival/lahunewyearfestival/image24.jpeg',
      '/festival/lahunewyearfestival/image22.jpeg',
      '/festival/lahunewyearfestival/image23.jpeg',
      '/festival/lahunewyearfestival/image26.png',
    ],
  },
  // Usually held in December; estimated — replace once the date is announced.
  {
    id: 'akha-new-year-festival',
    image: '/festival/akhanewyear/image29.jpeg',
    targetDate: '2026-12-28T09:00:00+06:30',
    images: [
      '/festival/akhanewyear/image29.jpeg',
      '/festival/akhanewyear/image28.jpeg',
      '/festival/akhanewyear/image27.jpeg',
    ],
  },
  // Held during the Thingyan (Myanmar New Year) period in April; estimated at the
  // start of Thingyan 2027 — replace once the date is announced.
  {
    id: 'nanda-bayri-drum-ceremony',
    image: '/festival/thingyanmingalananda/image30.jpeg',
    targetDate: '2027-04-13T09:00:00+06:30',
    images: [
      '/festival/thingyanmingalananda/image30.jpeg',
      '/festival/thingyanmingalananda/image31.jpeg',
      '/festival/thingyanmingalananda/image32.jpeg',
      '/festival/thingyanmingalananda/image33.jpeg',
    ],
  },
  // Traditionally the 1st waxing day of Tabodwe; the 50th was held on 28 Jan 2026.
  // Estimated from last year's date — replace once the 51st is announced.
  {
    id: 'wa-new-year-festival',
    image: '/festival/wanewyear/image34.jpg',
    targetDate: '2027-01-28T09:00:00+06:30',
    images: [
      '/festival/wanewyear/image34.jpg',
      '/festival/wanewyear/image36.jpg',
      '/festival/wanewyear/image35.jpg',
      '/festival/wanewyear/image37.jpg',
    ],
  },
  // Held in the days before the Shan New Year (1st waxing of Nadaw); 2024 ran
  // 26–30 Nov. Estimated for Nadaw 2026 — replace once the dates are announced.
  {
    id: 'shan-new-year-festival',
    image: '/festival/shannewyear/image39.png',
    targetDate: '2026-12-04T09:00:00+06:30',
    images: [
      '/festival/shannewyear/image39.png',
      '/festival/shannewyear/image38.JPG',
      '/festival/shannewyear/image40.jpg',
      '/festival/shannewyear/image41.jpg',
    ],
  },
  // Held once a year for one day; date not yet supplied.
  {
    id: 'sao-fa-market-day',
    image: '/festival/sawfamarketday/image42.jpg',
    images: [
      '/festival/sawfamarketday/image42.jpg',
      '/festival/sawfamarketday/image45.JPG',
      '/festival/sawfamarketday/image43.jpeg',
      '/festival/sawfamarketday/image44.jpg',
    ],
  },
  // Dates follow the cherry bloom (5th festival: 24–26 Dec 2025). Estimated from
  // last year — replace once the next festival is announced.
  {
    id: 'loi-mwe-cherry-blossom-festival',
    image: '/famousplace/loimwecherryblossomfestival/image9.jpeg',
    targetDate: '2026-12-24T09:00:00+06:30',
    images: [
      '/famousplace/loimwecherryblossomfestival/image9.jpeg',
      '/famousplace/loimwecherryblossomfestival/image11.png',
      '/famousplace/loimwecherryblossomfestival/image7.jpeg',
      '/famousplace/loimwecherryblossomfestival/image10.png',
      '/famousplace/loimwecherryblossomfestival/image12.png',
      '/famousplace/loimwecherryblossomfestival/image8.jpeg',
    ],
  },
]
