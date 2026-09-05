import { WzkHero } from '../components/wat-zom-kham/WzkHero'
import { WzkOverview } from '../components/wat-zom-kham/WzkOverview'
import { WzkQuickNav } from '../components/wat-zom-kham/WzkQuickNav'
import { WzkHistory } from '../components/wat-zom-kham/WzkHistory'
import { WzkGallery } from '../components/wat-zom-kham/WzkGallery'
import { WzkRituals } from '../components/wat-zom-kham/WzkRituals'
import { WzkTrustees } from '../components/wat-zom-kham/WzkTrustees'
import { WzkWayfinding } from '../components/wat-zom-kham/WzkWayfinding'

export function WatZomKhamPage() {
  return (
    <div className="flex w-full flex-col">
      <WzkHero />
      <WzkQuickNav />
      <WzkOverview />
      <div className="flex w-full flex-col gap-16 py-14 md:gap-20">
        <WzkHistory />
        <WzkGallery />
        <WzkRituals />
        <WzkTrustees />
        <WzkWayfinding />
      </div>
    </div>
  )
}
