import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'
import { PagodaHero } from '../components/pagoda/PagodaHero'
import { QuickSectionNav } from '../components/QuickSectionNav'
import { PagodaFactPills } from '../components/pagoda/PagodaFactPills'
import { PagodaHistory } from '../components/pagoda/PagodaHistory'
import { PagodaGallery } from '../components/pagoda/PagodaGallery'
import { PagodaRituals } from '../components/pagoda/PagodaRituals'
import { PagodaLocationSection } from '../components/pagoda/PagodaLocationSection'
import { PagodaClosing } from '../components/PagodaClosing'
import type { PagodaConfig } from '../data/pagodas'

interface PagodaDetailPageProps {
  config: PagodaConfig
}

export function PagodaDetailPage({ config }: PagodaDetailPageProps) {
  const { t } = useLanguage()
  const dict = t[config.dictKey]

  usePageMeta({
    title: dict.meta.title,
    description: dict.hero.subtitle,
    image: config.heroImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: dict.hero.title,
      description: dict.hero.subtitle,
      image: config.heroImage,
      address: dict.location.address,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: config.coordinates.lat,
        longitude: config.coordinates.lng,
      },
    },
  })

  return (
    <div className="flex w-full flex-col">
      <PagodaHero
        image={config.heroImage}
        title={dict.hero.title}
        localName={dict.hero.localName}
        subtitle={dict.hero.subtitle}
        badges={dict.hero.badges}
      />
      <QuickSectionNav label={dict.quickNav.label} items={dict.quickNav.items} sectionIds={config.quickNavSectionIds} />
      <PagodaFactPills pills={dict.facts.pills} />
      <div className="flex w-full flex-col gap-16 py-14 md:gap-20">
        <PagodaHistory history={dict.history} audio={dict.audio} audioSrc={config.audioSrc} />
        {dict.gallery && config.gallery && <PagodaGallery gallery={dict.gallery} albums={config.gallery.albums} />}
        {dict.rituals && <PagodaRituals rituals={dict.rituals} />}
        <PagodaLocationSection coordinates={config.coordinates} zoom={config.locationZoom} location={dict.location} />
        <PagodaClosing text={dict.closing.text} cta={dict.closing.cta} />
      </div>
    </div>
  )
}
