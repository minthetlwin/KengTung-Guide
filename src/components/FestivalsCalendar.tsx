import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { festivalsMeta } from '../data/festivals'

interface Countdown {
  days: number
  hours: number
  mins: number
  secs: number
}

function getCountdown(targetDate: string): Countdown {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    mins: Math.floor((totalSeconds % 3600) / 60),
    secs: totalSeconds % 60,
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function FestivalsCalendar() {
  const { t } = useLanguage()
  const f = t.festivals
  const [index, setIndex] = useState(0)
  const total = f.slides.length
  const target = festivalsMeta[index].targetDate

  const [, setTick] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setTick((n) => n + 1), 1000)
    return () => window.clearInterval(id)
  }, [])
  const countdown = getCountdown(target)

  useEffect(() => {
    festivalsMeta.forEach((meta) => {
      const img = new Image()
      img.src = meta.image
    })
  }, [])

  const goTo = (next: number) => setIndex(((next % total) + total) % total)

  const slide = f.slides[index]
  const image = festivalsMeta[index].image

  const countdownFields = useMemo(
    () => [
      { label: f.countdown.days, value: pad(countdown.days) },
      { label: f.countdown.hours, value: pad(countdown.hours) },
      { label: f.countdown.mins, value: pad(countdown.mins) },
      { label: f.countdown.secs, value: pad(countdown.secs) },
    ],
    [countdown, f.countdown],
  )

  return (
    <section id="festivals" className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[18px]">celebration</span>
            {f.eyebrow}
          </div>
          <h3 className="font-serif text-[22px] font-bold tracking-tight text-text">{f.title}</h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="font-sans text-[11px] text-text-faint">{f.dateNote}</span>
          <div className="flex items-center gap-1.5">
            {f.slides.map((s, i) => (
              <button
                key={s.badge}
                type="button"
                onClick={() => goTo(i)}
                aria-label={s.heading}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-primary' : 'w-1.5 bg-border-strong hover:bg-text-faint'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border shadow-elevated">
        <div key={index} className="relative min-h-[520px] w-full lg:min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
            role="img"
            aria-label={slide.heading}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 via-45% to-transparent to-75%" />

          <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-end gap-6 p-6 sm:p-8 lg:min-h-[400px] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl animate-hero-in">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary px-2.5 py-0.5 font-sans text-xs font-semibold text-on-primary">
                  {slide.badge}
                </span>
                <span className="font-sans text-xs font-medium text-white/70">{slide.subBadge}</span>
              </div>
              <h4 className="mb-2 font-serif text-2xl font-semibold leading-tight text-white [text-shadow:0_2px_20px_rgb(0_0_0_/_0.4)] sm:text-[1.75rem]">
                {slide.heading}
              </h4>
              <p className="font-sans text-sm leading-relaxed text-white/85">{slide.description}</p>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <div className="grid grid-cols-4 gap-2 text-center">
                {countdownFields.map((field) => (
                  <div
                    key={field.label}
                    className="min-w-[62px] rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md"
                  >
                    <span className="block font-serif text-2xl font-semibold leading-none text-white">
                      {field.value}
                    </span>
                    <span className="mt-1 block font-sans text-[10px] font-semibold uppercase text-white/70">
                      {field.label}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/festival-calendar"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-on-primary shadow-soft transition-transform hover:scale-[1.02] whitespace-nowrap"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous festival"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/50"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button
          type="button"
          aria-label="Next festival"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/50"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
    </section>
  )
}
