import { MmmHero } from '../components/mahar-myat-muni/MmmHero'
import { MmmFacts } from '../components/mahar-myat-muni/MmmFacts'
import { MmmHistory } from '../components/mahar-myat-muni/MmmHistory'
import { MmmGallery } from '../components/mahar-myat-muni/MmmGallery'
import { MmmBeliefs } from '../components/mahar-myat-muni/MmmBeliefs'
import { MmmTrustees } from '../components/mahar-myat-muni/MmmTrustees'
import { MmmLocation } from '../components/mahar-myat-muni/MmmLocation'
import { MmmClosing } from '../components/mahar-myat-muni/MmmClosing'

export function MaharMyatMuniPage() {
  return (
    <div className="flex w-full flex-col">
      <MmmHero />
      <MmmFacts />
      <div className="flex w-full flex-col gap-16 py-14 md:gap-20">
        <MmmHistory />
        <MmmGallery />
        <MmmBeliefs />
        <MmmTrustees />
        <MmmLocation />
        <MmmClosing />
      </div>
    </div>
  )
}
