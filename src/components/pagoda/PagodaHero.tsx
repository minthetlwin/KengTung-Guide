import type { PagodaHeroBadge } from '../../i18n/types'
import { BackButton } from '../BackButton'

interface PagodaHeroProps {
  image: string
  bannerImages?: string[]
  title: string
  localName: string
  subtitle: string
  badges: PagodaHeroBadge[]
}

export function PagodaHero({ image, bannerImages, title, localName, subtitle, badges }: PagodaHeroProps) {
  const bannerCount = Math.min(bannerImages?.length ?? 0, 3)
  const hasBannerGrid = bannerCount >= 2
  const bannerRowsClass = bannerCount === 2 ? 'grid-rows-2' : 'grid-rows-3'

  return (
    <section className="relative w-full overflow-hidden">
      <BackButton />
      <div className="relative min-h-[560px] w-full sm:min-h-[620px] lg:min-h-[720px]">
        <div
          className={`absolute inset-0 bg-cover bg-top ${hasBannerGrid ? 'lg:hidden' : ''}`}
          style={{ backgroundImage: `url('${image}')` }}
          role="img"
          aria-label={title}
        />
        {hasBannerGrid && (
          <div className="absolute inset-0 hidden lg:grid lg:grid-cols-[2fr_1fr]" role="img" aria-label={title}>
            <div className="bg-cover bg-top" style={{ backgroundImage: `url('${image}')` }} />
            <div className={`grid ${bannerRowsClass}`}>
              {bannerImages!.slice(0, 3).map((src) => (
                <div key={src} className="bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
              ))}
            </div>
          </div>
        )}
        <div className="relative z-10 flex h-full min-h-[560px] w-full flex-col justify-end gap-3 px-gutter pb-12 pt-32 sm:min-h-[620px] md:px-gutter-lg lg:min-h-[720px]">
          <div className="flex flex-wrap items-center gap-2">
            {badges.map((badge, i) => (
              <span
                key={i}
                className={
                  badge.pulsingDot
                    ? 'inline-flex items-center gap-1.5 rounded-full bg-[#F2D488]/90 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-black/80 shadow-soft'
                    : 'inline-flex w-fit items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-[#8c6b06] shadow-soft'
                }
              >
                {badge.pulsingDot ? (
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
                ) : (
                  <span
                    className="material-symbols-outlined text-[15px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                )}
                {badge.label}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_24px_rgb(0_0_0_/_0.5)]">
            {title}
          </h1>
          <span className="hidden font-sans text-lg font-medium tracking-wide text-[#F2D488] [text-shadow:0_1px_16px_rgb(0_0_0_/_0.6)] sm:block">
            {localName}
          </span>
          <p className="mt-2 hidden max-w-3xl font-sans text-base leading-relaxed text-white/90 [text-shadow:0_1px_12px_rgb(0_0_0_/_0.5)] sm:block md:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
