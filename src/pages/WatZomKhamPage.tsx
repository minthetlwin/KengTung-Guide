import { WzkHero } from '../components/wat-zom-kham/WzkHero'
import { WzkOverview } from '../components/wat-zom-kham/WzkOverview'
import { WzkQuickNav } from '../components/wat-zom-kham/WzkQuickNav'
import { WzkHistory } from '../components/wat-zom-kham/WzkHistory'
import { WzkGallery } from '../components/wat-zom-kham/WzkGallery'
import { WzkRituals } from '../components/wat-zom-kham/WzkRituals'
import { WzkLocation } from '../components/wat-zom-kham/WzkLocation'
import { WzkClosing } from '../components/wat-zom-kham/WzkClosing'
import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'
import { wzkHeroImage, wzkCoordinates } from '../data/watZomKham'

export function WatZomKhamPage() {
  const { t } = useLanguage()
  const w = t.watZomKham

  usePageMeta({
    title: w.meta.title,
    description: w.hero.subtitle,
    image: wzkHeroImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: w.hero.title,
      description: w.hero.subtitle,
      image: wzkHeroImage,
      address: w.location.address,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: wzkCoordinates.lat,
        longitude: wzkCoordinates.lng,
      },
    },
  })

  return (
    <div className="flex w-full flex-col">
      <WzkHero />
      <WzkQuickNav />
      <WzkOverview />
      <div className="flex w-full flex-col gap-16 py-14 md:gap-20">
        <WzkHistory />
        <WzkGallery />
        <WzkRituals />
        <WzkLocation />
        <WzkClosing />
      </div>
    </div>
  )
}
