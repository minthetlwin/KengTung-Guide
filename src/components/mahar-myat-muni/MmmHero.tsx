import { useLanguage } from '../../context/language-context'
import { mmmHeroImage, mmmBannerImages } from '../../data/maharMyatMuni'

export function MmmHero() {
  const { t } = useLanguage()
  const h = t.maharMyatMuni.hero

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[560px] w-full sm:min-h-[620px] lg:min-h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-top lg:hidden"
          style={{ backgroundImage: `url('${mmmHeroImage}')` }}
          role="img"
          aria-label={h.title}
        />
        <div className="absolute inset-0 hidden lg:grid lg:grid-cols-[2fr_1fr]" role="img" aria-label={h.title}>
          <div className="bg-cover bg-top" style={{ backgroundImage: `url('${mmmHeroImage}')` }} />
          <div className="grid grid-rows-3">
            {mmmBannerImages.map((src) => (
              <div key={src} className="bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 via-55% to-black/10 to-100%" />

        <div className="relative z-10 flex h-full min-h-[560px] w-full flex-col justify-end gap-3 px-gutter pb-12 pt-32 sm:min-h-[620px] md:px-gutter-lg lg:min-h-[720px]">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-[#8c6b06] shadow-soft">
            <span className="material-symbols-outlined text-[15px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              stars
            </span>
            {h.badge}
          </span>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_24px_rgb(0_0_0_/_0.5)]">
            {h.title}
          </h1>
          <span className="hidden font-sans text-lg font-medium tracking-wide text-[#F2D488] [text-shadow:0_1px_16px_rgb(0_0_0_/_0.6)] sm:block">
            {h.localName}
          </span>
          <p className="mt-2 hidden max-w-3xl font-sans text-base leading-relaxed text-white/90 [text-shadow:0_1px_12px_rgb(0_0_0_/_0.5)] sm:block md:text-lg">
            {h.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
