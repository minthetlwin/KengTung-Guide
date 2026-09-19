import { mmmHistoryAudioSrc } from './maharMyatMuni'
import { wzkHistoryAudioSrc } from './watZomKham'
import { yzmHistoryAudioSrc } from './yarzamuni'
import { dslHistoryAudioSrc } from './datSamLoei'
import { srsHistoryAudioSrc } from './satuRatthaSumingala'
import { krHistoryAudioSrc } from './khemaRattha'
import { ttmbHistoryAudioSrc } from './thattaThattahaMahaBodhi'
import { skstHistoryAudioSrc } from './swamKyeimShweHsanTaw'
import { sodmHistoryAudioSrc } from './shweOhnDaingMin'
import { mhnbHistoryAudioSrc } from './maingHnunNeeBayar'

export interface NarrationTrack {
  code: string
  audioSrc: string
}

export const narrationTracks: NarrationTrack[] = [
  { code: 'KT-01', audioSrc: wzkHistoryAudioSrc },
  { code: 'KT-04', audioSrc: mmmHistoryAudioSrc },
  { code: 'KT-05', audioSrc: yzmHistoryAudioSrc },
  { code: 'KT-06', audioSrc: dslHistoryAudioSrc },
  { code: 'KT-07', audioSrc: srsHistoryAudioSrc },
  { code: 'KT-08', audioSrc: krHistoryAudioSrc },
  { code: 'KT-09', audioSrc: ttmbHistoryAudioSrc },
  { code: 'KT-10', audioSrc: skstHistoryAudioSrc },
  { code: 'KT-11', audioSrc: sodmHistoryAudioSrc },
  { code: 'KT-12', audioSrc: mhnbHistoryAudioSrc },
]
