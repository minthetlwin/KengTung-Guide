import { YzmHero } from '../components/yarzamuni/YzmHero'
import { YzmQuickNav } from '../components/yarzamuni/YzmQuickNav'
import { YzmFacts } from '../components/yarzamuni/YzmFacts'
import { YzmHistory } from '../components/yarzamuni/YzmHistory'
import { YzmLocation } from '../components/yarzamuni/YzmLocation'
import { YzmClosing } from '../components/yarzamuni/YzmClosing'
import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'
import { yzmHeroImage, yzmCoordinates } from '../data/yarzamuni'

export function YarzamuniPage() {
  const { t } = useLanguage()
  const y = t.yarzamuni

  usePageMeta({
    title: y.meta.title,
    description: y.hero.subtitle,
    image: yzmHeroImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: y.hero.title,
      description: y.hero.subtitle,
      image: yzmHeroImage,
      address: y.location.address,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: yzmCoordinates.lat,
        longitude: yzmCoordinates.lng,
      },
    },
  })

  return (
    <div className="flex w-full flex-col">
      <YzmHero />
      <YzmQuickNav />
      <YzmFacts />
      <div className="flex w-full flex-col gap-16 py-14 md:gap-20">
        <YzmHistory />
        <YzmLocation />
        <YzmClosing />
      </div>
    </div>
  )
}
