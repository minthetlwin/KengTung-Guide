import { useState } from 'react'
import { useLanguage } from '../../context/language-context'

export function WzkOverview() {
  const { t } = useLanguage()
  const h = t.watZomKham.hero
  const [playing, setPlaying] = useState(false)

  return (
    <section className="mx-auto w-full max-w-[1440px] px-gutter pt-10 md:px-gutter-lg">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {h.metaPills.map((pill) => (
          <div
            key={pill.label}
            className="flex flex-col gap-0.5 rounded-xl border border-border bg-bg-elevated p-4 shadow-soft"
          >
            <span className="font-sans text-[11px] font-semibold uppercase tracking-wide text-text-faint">
              {pill.label}
            </span>
            <span className="font-sans text-sm font-bold text-primary">{pill.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-4 shadow-soft md:flex-row md:items-center md:justify-between md:p-5">
        <div className="flex w-full items-center gap-4 md:w-auto">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? t.hero.pause : t.hero.play}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-transform hover:scale-105"
          >
            <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              {playing ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
              {h.audio.label}
            </span>
            <span className="truncate font-sans text-sm font-semibold text-text md:text-base">{h.audio.title}</span>
            <span className="truncate font-sans text-xs text-text-faint">{h.audio.narrator}</span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-1.5 md:max-w-md">
          <div className="flex items-center justify-between font-sans text-[11px] font-semibold text-text-faint">
            <span>{h.audio.currentTime}</span>
            <span className="flex items-center gap-1.5 text-primary">
              <span className="material-symbols-outlined text-[15px]">graphic_eq</span>
              {h.audio.spatialLabel}
            </span>
            <span>{h.audio.totalTime}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-bg-elevated-3">
            <div className="h-full w-1/4 rounded-full bg-primary" />
          </div>
        </div>

        <button
          type="button"
          className="hidden shrink-0 items-center gap-1.5 rounded-lg bg-bg-elevated-2 px-3.5 py-2 font-sans text-xs font-semibold text-text transition-colors hover:bg-bg-elevated-3 lg:flex"
        >
          <span className="material-symbols-outlined text-[16px] text-primary">file_download</span>
          {h.audio.download}
        </button>
      </div>
    </section>
  )
}
