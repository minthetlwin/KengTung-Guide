// Photography supplied directly by the project owner (Maha Myat Muni Pagoda
// galleries). targetDate is the next estimated occurrence — these are lunar
// Myanmar calendar observances, so exact Gregorian dates shift year to year;
// each date below is a reasonable approximation used to drive the live
// countdown, cross-checked against published Myanmar full-moon calendars.

export interface FestivalMeta {
  id: string
  image: string
  targetDate: string
}

const ANNUAL_FESTIVAL_IMAGE = '/images/maharmyatmuni/01/almsgiving-01.jpg'
const PALACE_ALMSGIVING_IMAGE = '/images/maharmyatmuni/01/almsgiving-04.jpg'
const BODHI_WATERING_IMAGE = '/images/maharmyatmuni/02/dhammacakka-01.jpg'
const PROTECTIVE_CHANTING_IMAGE = '/images/maharmyatmuni/02/dhammacakka-03.jpg'

export const festivalsMeta: [FestivalMeta, FestivalMeta, FestivalMeta, FestivalMeta] = [
  // Full moon of Tazaungmon — Nov 24, 2026.
  { id: 'annual-pagoda-festival', image: ANNUAL_FESTIVAL_IMAGE, targetDate: '2026-11-24T06:00:00+06:30' },
  { id: 'palace-almsgiving', image: PALACE_ALMSGIVING_IMAGE, targetDate: '2026-11-24T06:00:00+06:30' },
  // Full moon of Kason — May 20, 2027.
  { id: 'bodhi-watering', image: BODHI_WATERING_IMAGE, targetDate: '2027-05-20T09:00:00+06:30' },
  // Nearest quarterly full moon — Oct 26, 2026.
  { id: 'protective-chanting', image: PROTECTIVE_CHANTING_IMAGE, targetDate: '2026-10-26T18:00:00+06:30' },
]
