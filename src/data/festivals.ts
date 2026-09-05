// Photography sourced from Wikimedia Commons (Creative Commons licensed).
// targetDate is the next estimated occurrence — these are lunar/solar Myanmar
// calendar festivals, so exact Gregorian dates shift year to year; each date
// below is a reasonable approximation used to drive the live countdown.

export interface FestivalMeta {
  id: string
  image: string
  targetDate: string
}

const THINGYAN_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/7/72/Thingyan_water_festival_2013_07.jpg'
const WASO_IMAGE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Meditation_and_Cadlelight.jpg/1920px-Meditation_and_Cadlelight.jpg'
const TAZAUNGDAING_IMAGE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Attaching_Fireworks_to_Balloon%2C_Taunggyi_2017.jpg/1920px-Attaching_Fireworks_to_Balloon%2C_Taunggyi_2017.jpg'
const LOY_KRATHONG_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/b/bd/Thai_people_setting_their_candle-lit_krathongs_in_the_Ping_river_at_night_during_Loy_Krathong_2015-10_%2822715933524%29.jpg'

export const festivalsMeta: [FestivalMeta, FestivalMeta, FestivalMeta, FestivalMeta] = [
  { id: 'thingyan', image: THINGYAN_IMAGE, targetDate: '2027-04-13T06:00:00+06:30' },
  { id: 'waso', image: WASO_IMAGE, targetDate: '2027-07-18T18:00:00+06:30' },
  { id: 'tazaungdaing', image: TAZAUNGDAING_IMAGE, targetDate: '2026-11-24T18:00:00+06:30' },
  { id: 'loykrathong', image: LOY_KRATHONG_IMAGE, targetDate: '2026-11-24T18:30:00+06:30' },
]
