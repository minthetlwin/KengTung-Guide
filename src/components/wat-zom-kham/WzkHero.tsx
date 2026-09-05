import { useLanguage } from '../../context/language-context'
import { wzkHeroImage, wzkNativeNames } from '../../data/watZomKham'

export function WzkHero() {
  const { t } = useLanguage()
  const h = t.watZomKham.hero

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[520px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${wzkHeroImage}')` }}
          role="img"
          aria-label={h.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-transparent to-80%" />

        <div className="relative z-10 flex min-h-[520px] w-full flex-col justify-end gap-6 px-gutter pb-12 pt-32 md:px-gutter-lg">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-[#8c6b06] shadow-soft">
              <span className="material-symbols-outlined text-[15px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                stars
              </span>
              {h.catalogBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F2D488]/90 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-black/80 shadow-soft">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
              {h.statusBadge}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_24px_rgb(0_0_0_/_0.4)]">
                {h.title}
              </h1>
            </div>
            <span className="font-sans text-lg font-medium tracking-wide text-[#F2D488]">{wzkNativeNames}</span>
            <p className="mt-2 max-w-3xl font-sans text-base leading-relaxed text-white/85 md:text-lg">
              {h.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
