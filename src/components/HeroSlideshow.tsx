import { useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from '../context/language-context'
import { heroImages } from '../data/images'

const SLIDE_DURATION_MS = 7000
const TICK_MS = 100

const IMAGE_KEYS = ['watZomKham', 'mahaMyatMuni', 'yarzamuni'] as const

export function HeroSlideshow() {
  const { t } = useLanguage()
  const slides = t.hero.slides
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(true)
  const total = slides.length
  const intervalRef = useRef<number | null>(null)

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total)
    setProgress(0)
  }

  useEffect(() => {
    if (!playing) return
    intervalRef.current = window.setInterval(() => {
      setProgress((p) => {
        const increment = (100 * TICK_MS) / SLIDE_DURATION_MS
        if (p + increment >= 100) {
          setIndex((i) => (i + 1) % total)
          return 0
        }
        return p + increment
      })
    }, TICK_MS)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [playing, total])

  const slide = slides[index]
  const bgImage = useMemo(() => heroImages[IMAGE_KEYS[index]], [index])

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-bg-inset select-none"
      aria-roledescription="carousel"
      aria-label="Featured sacred sites"
    >
      <div className="relative min-h-[560px] w-full sm:min-h-[620px] lg:min-h-[720px]">
        <div key={index} className="absolute inset-0">
          <div
            className="absolute inset-0 animate-kenburns bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')` }}
            role="img"
            aria-label={`${slide.title} — ${slide.titleAccent}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 via-45% to-transparent to-75%" />

          <div className="relative z-10 flex h-full min-h-[560px] w-full flex-col justify-end px-gutter pb-28 pt-32 sm:min-h-[620px] md:px-gutter-lg lg:min-h-[720px] lg:pb-32">
            <div className="flex max-w-3xl flex-col gap-4 animate-hero-in">
              <div className="flex flex-wrap items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F2D488]" />
                <span className="font-sans text-eyebrow uppercase text-[#F2D488]">{slide.tag}</span>
                <span className="text-white/40">/</span>
                <span className="font-sans text-[11px] font-semibold text-white/70">
                  {slide.coordinate}
                </span>
              </div>

              <h1 className="font-serif text-[2.1rem] leading-[1.1] tracking-tight text-white sm:text-display-sm lg:text-display-lg [text-shadow:0_2px_24px_rgb(0_0_0_/_0.35)]">
                {slide.title}
                <span className="block font-serif text-[1.35rem] font-medium italic text-[#F2D488] sm:text-[1.6rem] lg:text-[2rem]">
                  {slide.titleAccent}
                </span>
              </h1>

              <p className="max-w-xl font-sans text-subhead text-white/80 [text-shadow:0_1px_12px_rgb(0_0_0_/_0.3)]">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {slide.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-black/35 px-3 py-1 font-sans text-xs font-semibold text-white backdrop-blur-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="#spotlight"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-on-primary shadow-elevated transition-transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  {slide.primaryCta}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-6 py-3 font-sans text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/50"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#F2D488]">headphones</span>
                  {slide.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-28 right-gutter z-20 hidden items-center gap-2 sm:flex md:right-gutter-lg lg:bottom-32">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:bg-black/50"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_left</span>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:bg-black/50"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-3 z-20 px-gutter md:px-gutter-lg">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-3 rounded-xl border border-border bg-bg-elevated/85 px-4 py-3 shadow-elevated backdrop-blur-2xl md:flex-row">
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex items-center gap-1 font-sans text-xs font-bold text-text-muted">
              <span className="text-primary">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-text-faint">/</span>
              <span className="text-text-faint">{String(total).padStart(2, '0')}</span>
            </div>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? t.hero.pause : t.hero.play}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-bg-elevated-2 text-text-muted transition-colors hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined text-[15px]">
                {playing ? 'pause' : 'play_arrow'}
              </span>
            </button>
          </div>

          <div className="grid w-full grid-cols-3 gap-3">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => goTo(i)}
                className="group flex flex-col gap-1.5 py-1 text-left"
              >
                <span className="relative block h-1 w-full overflow-hidden rounded-full bg-bg-elevated-3">
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    style={{
                      width: `${i < index ? 100 : i === index ? progress : 0}%`,
                      transition: i === index ? 'none' : 'width 0.3s ease',
                    }}
                  />
                </span>
                <span
                  className={`truncate font-sans text-[11px] font-semibold transition-colors ${
                    i === index ? 'text-primary' : 'text-text-faint group-hover:text-text-muted'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')} · {s.title}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-1.5 font-sans text-[11px] text-text-faint lg:flex">
            <span className="material-symbols-outlined text-[15px] text-secondary">explore</span>
            {t.hero.atlasLabel}
          </div>
        </div>
      </div>
    </section>
  )
}
