import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'
import { PagodaHero } from '../components/pagoda/PagodaHero'
import { PagodaGallery } from '../components/pagoda/PagodaGallery'
import { festivalsMeta, formatFestivalDate } from '../data/festivals'
import { mmmGalleryAlbums } from '../data/maharMyatMuni'
import { getCountdown, pad } from '../utils/countdown'

export function FestivalDetailPage() {
  const { festivalId } = useParams()
  const index = festivalsMeta.findIndex((meta) => meta.id === festivalId)
  if (index === -1) return <Navigate to="/festival-calendar" replace />
  return <FestivalDetail key={index} index={index} />
}

function FestivalDetail({ index }: { index: number }) {
  const { t, locale } = useLanguage()
  const meta = festivalsMeta[index]
  const slide = t.festivals.slides[index]
  const fd = t.festivalDetailPage
  const detail = fd.festivals[index]
  const mmmAlbumIndex = mmmGalleryAlbums.findIndex((album) => album.id === meta.albumId)
  const album = meta.images ? { id: meta.id, images: meta.images } : mmmGalleryAlbums[mmmAlbumIndex]
  const albumCopy = meta.images ? detail.album : t.maharMyatMuni.gallery.albums[mmmAlbumIndex]
  const heldAt = detail.heldAt ?? fd.heldAt
  const tips = detail.tips ?? fd.tips
  const dateLabel = meta.targetDate ? formatFestivalDate(meta.targetDate, locale) : t.festivals.dateTba

  usePageMeta({
    title: `${slide.badge} · ${t.festivalCalendarPage.title}`,
    description: slide.description,
    image: meta.image,
  })

  const [, setTick] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setTick((n) => n + 1), 1000)
    return () => window.clearInterval(id)
  }, [])
  const countdown = meta.targetDate ? getCountdown(meta.targetDate) : null
  const countdownFields = countdown && [
    { label: t.festivals.countdown.days, value: pad(countdown.days) },
    { label: t.festivals.countdown.hours, value: pad(countdown.hours) },
    { label: t.festivals.countdown.mins, value: pad(countdown.mins) },
    { label: t.festivals.countdown.secs, value: pad(countdown.secs) },
  ]

  return (
    <div className="flex w-full flex-col">
      <PagodaHero
        image={meta.image}
        bannerImages={album?.images.filter((src) => src !== meta.image).slice(0, 2)}
        title={slide.badge}
        localName={slide.subBadge}
        subtitle={slide.heading}
        badges={[{ label: t.festivalCalendarPage.title }]}
      />

      <div className="flex w-full flex-col gap-16 py-14 md:gap-20">
        <section className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 px-gutter md:px-gutter-lg lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-[18px]">auto_stories</span>
              {fd.aboutEyebrow}
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{slide.heading}</h2>
            <p className="font-sans text-sm leading-relaxed text-text-muted md:text-base">{slide.description}</p>
            <div className="mt-2 flex flex-col gap-0.5 border-t border-border pt-4">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
                {fd.heldAtLabel}
              </span>
              {meta.venuePath ? (
                <Link to={meta.venuePath} className="font-sans text-sm font-bold text-primary hover:underline">
                  {heldAt}
                </Link>
              ) : (
                <span className="font-sans text-sm font-bold text-text">{heldAt}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
                {fd.nextObservance}
              </span>
              <span className="flex items-center gap-2 font-serif text-xl font-bold text-text">
                <span className="material-symbols-outlined text-[22px] text-primary">event</span>
                {dateLabel}
              </span>
              {meta.targetDate && <span className="font-sans text-xs text-text-muted">{t.festivals.dateNote}</span>}
            </div>
            {countdownFields && (
              <div className="grid grid-cols-4 gap-2 text-center">
                {countdownFields.map((field) => (
                  <div key={field.label} className="rounded-xl border border-border bg-bg-elevated-2 p-3">
                    <span className="block font-serif text-2xl font-semibold leading-none text-text">{field.value}</span>
                    <span className="mt-1 block font-sans text-[10px] font-semibold uppercase text-text-muted">
                      {field.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-auto flex flex-col gap-2 sm:flex-row">
              {meta.venuePath && (
                <Link
                  to={meta.venuePath}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-on-primary shadow-soft transition-transform hover:scale-[1.02]"
                >
                  {fd.visitPagoda}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              )}
              <Link
                to="/festival-calendar"
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-border px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-bg-elevated-2"
              >
                {fd.backToCalendar}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-gutter md:px-gutter-lg lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-6">
            {detail.sections.map((section) => (
              <div
                key={section.heading}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft"
              >
                <h3 className="font-serif text-lg font-bold text-text">{section.heading}</h3>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="font-sans text-sm leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold text-text">
                <span className="material-symbols-outlined text-[20px] text-primary">schedule</span>
                {fd.programTitle}
              </h3>
              <ol className="flex flex-col">
                {detail.program.map((step, i) => (
                  <li key={i} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < detail.program.length - 1 && (
                      <span className="absolute left-[5px] top-4 h-full w-px bg-border" aria-hidden />
                    )}
                    <span className="relative mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full bg-primary" aria-hidden />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
                        {step.time}
                      </span>
                      <span className="font-sans text-sm leading-relaxed text-text">{step.activity}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft">
              <h3 className="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-text">
                <span className="material-symbols-outlined text-[20px] text-primary">tips_and_updates</span>
                {fd.tipsTitle}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {tips.map((tip) => (
                  <li key={tip} className="flex gap-2 font-sans text-sm leading-relaxed text-text-muted">
                    <span className="material-symbols-outlined mt-0.5 text-[16px] text-primary">check_circle</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {album && albumCopy && (
          <PagodaGallery gallery={{ ...t.maharMyatMuni.gallery, albums: [albumCopy] }} albums={[album]} />
        )}
      </div>
    </div>
  )
}
