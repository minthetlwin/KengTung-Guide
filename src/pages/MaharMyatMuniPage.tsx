import { MmmHero } from '../components/mahar-myat-muni/MmmHero'
import { MmmQuickNav } from '../components/mahar-myat-muni/MmmQuickNav'
import { MmmFacts } from '../components/mahar-myat-muni/MmmFacts'
import { MmmHistory } from '../components/mahar-myat-muni/MmmHistory'
import { MmmGallery } from '../components/mahar-myat-muni/MmmGallery'
import { MmmBeliefs } from '../components/mahar-myat-muni/MmmBeliefs'
import { MmmTrustees } from '../components/mahar-myat-muni/MmmTrustees'
import { MmmLocation } from '../components/mahar-myat-muni/MmmLocation'
import { MmmClosing } from '../components/mahar-myat-muni/MmmClosing'
import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'
import { mmmHeroImage, mmmCoordinates } from '../data/maharMyatMuni'

export function MaharMyatMuniPage() {
  const { t } = useLanguage()
  const m = t.maharMyatMuni

  usePageMeta({
    title: m.meta.title,
    description: m.hero.subtitle,
    image: mmmHeroImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: m.hero.title,
      description: m.hero.subtitle,
      image: mmmHeroImage,
      address: m.location.address,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: mmmCoordinates.lat,
        longitude: mmmCoordinates.lng,
      },
    },
  })

  return (
    <div className="flex w-full flex-col">
      <MmmHero />
      <MmmQuickNav />
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
