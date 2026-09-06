import { mmmHistoryAudioSrc } from './maharMyatMuni'
import { wzkHistoryAudioSrc } from './watZomKham'
import { yzmHistoryAudioSrc } from './yarzamuni'

export interface NarrationTrack {
  code: string
  audioSrc: string
}

export const narrationTracks: NarrationTrack[] = [
  { code: 'KT-01', audioSrc: wzkHistoryAudioSrc },
  { code: 'KT-04', audioSrc: mmmHistoryAudioSrc },
  { code: 'KT-05', audioSrc: yzmHistoryAudioSrc },
]
