import { useState } from 'react'
import { useLanguage } from '../context/language-context'
import { spotlightImage } from '../data/images'

export function FlagshipSpotlight() {
  const { t } = useLanguage()
  const s = t.spotlight
  const [playing, setPlaying] = useState(false)

  return (
    <section id="spotlight" className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            stars
          </span>
          <span className="font-sans text-eyebrow uppercase text-primary">{s.eyebrow}</span>
        </div>
        <span className="font-sans text-[11px] font-semibold text-text-faint">{s.catalogId}</span>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-elevated lg:grid-cols-12">
        <div className="relative min-h-[320px] lg:col-span-7 lg:min-h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${spotlightImage}')` }}
            role="img"
            aria-label={`${s.title} — ${s.subtitle}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-bg-elevated/90 p-3 shadow-elevated backdrop-blur-md sm:inset-x-5 sm:bottom-5">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? t.hero.pause : t.hero.play}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-transform hover:scale-105"
            >
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                {playing ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
                {s.audioLabel}
              </span>
              <span className="truncate font-sans text-sm text-text">{s.audioTitle}</span>
            </div>
            <div className="ml-auto hidden shrink-0 items-center gap-1.5 font-sans text-xs font-semibold text-secondary sm:flex">
              <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
              {s.audioMeta}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 p-6 lg:col-span-5 lg:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {s.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`rounded-full px-2.5 py-1 font-sans text-[11px] font-semibold ${
                    i === 0
                      ? 'bg-secondary-soft text-on-secondary-soft'
                      : i === 1
                        ? 'bg-bg-elevated-2 text-text-muted'
                        : 'bg-primary-soft text-on-primary-soft'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h2 className="font-serif text-headline text-[1.75rem] leading-tight text-text">{s.title}</h2>
              <span className="font-serif text-base italic text-primary">{s.subtitle}</span>
            </div>

            <p className="font-sans text-sm leading-relaxed text-text-muted">{s.description}</p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              {s.statCards.map((card) => (
                <div key={card.label} className="rounded-lg bg-bg-elevated-2 p-3">
                  <span className="block font-sans text-[10px] font-bold uppercase tracking-wide text-text-faint">
                    {card.label}
                  </span>
                  <span className="block font-serif text-lg font-semibold text-text">{card.value}</span>
                  <span className="block font-sans text-[11px] text-text-muted">{card.sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row">
            <a
              href="#directory"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-sans text-sm font-semibold text-on-primary shadow-soft transition-transform hover:scale-[1.02]"
            >
              {s.ctaPrimary}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg bg-bg-elevated-2 px-4 py-3 font-sans text-sm font-semibold text-text transition-colors hover:bg-bg-elevated-3"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">map</span>
              {s.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
