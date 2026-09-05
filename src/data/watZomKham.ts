// Photography sourced from Wikimedia Commons (Creative Commons licensed).
import {
  heroImages,
  naungTungImage,
  directoryImages,
  spotlightImage,
  mahaMuniFaceImage,
  goldenPalaceCarvingImage,
} from './images'

const KAMMAVACA_MANUSCRIPT =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Burmese_Kammavaca.jpg/1920px-Burmese_Kammavaca.jpg'
const RELIC_CASKETS = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Famen_Si_May_2007_052.jpg'
const GOLD_LEAF_GILDING =
  'https://upload.wikimedia.org/wikipedia/commons/4/45/009_Applying_Gold_Leaf_%288932921234%29.jpg'
const STUPA_DAWN =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/A_Beautiful_Morning.jpg/1920px-A_Beautiful_Morning.jpg'
const SHWENANDAW_INTERIOR =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Shwenandaw_Monastery_interior.jpg/1920px-Shwenandaw_Monastery_interior.jpg'

export const wzkHeroImage = heroImages.watZomKham

export const wzkTimelineImages: [string, string, string, string] = [
  KAMMAVACA_MANUSCRIPT,
  RELIC_CASKETS,
  directoryImages['KT-01'],
  GOLD_LEAF_GILDING,
]

export const wzkGalleryImages: [string, string, string, string, string] = [
  STUPA_DAWN,
  goldenPalaceCarvingImage,
  mahaMuniFaceImage,
  SHWENANDAW_INTERIOR,
  spotlightImage,
]

export const wzkMapImage = naungTungImage

export const wzkNativeNames = 'ဝပ်ဇွမ်ခမ်း · ᩅᩢ᩠ᨯᨧᩬᨾᨤᩣᩴ · วัดจอมคำ'
