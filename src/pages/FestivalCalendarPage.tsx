import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { FestivalsCalendar } from '../components/FestivalsCalendar'
import { festivalsMeta, formatFestivalDate } from '../data/festivals'
import { usePageMeta } from '../hooks/usePageMeta'

export function FestivalCalendarPage() {
  const { t, locale } = useLanguage()
  const f = t.festivals
  const fc = t.festivalCalendarPage

  usePageMeta({
    title: `${fc.title} · ${t.meta.title}`,
    description: fc.description,
  })

  return (
    <div className="flex w-full flex-col gap-10 py-14">
      <div className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[18px]">temple_buddhist</span>
            {fc.eyebrow}
          </div>
          <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{fc.title}</h1>
          <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{fc.description}</p>
        </div>
      </div>

      <FestivalsCalendar />

      <div className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
        <div className="mb-6 flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            {f.eyebrow}
          </div>
          <h2 className="font-serif text-[22px] font-bold tracking-tight text-text">{f.title}</h2>
          <p className="font-sans text-sm text-text-muted">{f.dateNote}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {f.slides.map((slide, i) => {
            const meta = festivalsMeta[i]
            const dateLabel = meta.targetDate ? formatFestivalDate(meta.targetDate, locale) : f.dateTba

            return (
              <Link
                key={meta.id}
                to={`/festival-calendar/${meta.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative h-40 w-full">
                  <div
                    className="h-full w-full bg-bg-elevated-3 bg-cover bg-center"
                    style={{ backgroundImage: `url('${meta.image}')` }}
                    role="img"
                    aria-label={slide.heading}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 font-sans text-[11px] font-semibold text-on-primary">
                    {slide.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-wide text-text-faint">
                    {slide.subBadge}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-text transition-colors group-hover:text-primary">
                    {slide.heading}
                  </h3>
                  <p className="line-clamp-3 font-sans text-sm leading-relaxed text-text-muted">
                    {slide.description}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 border-t border-border pt-3 font-sans text-xs font-semibold text-primary">
                    <span className="material-symbols-outlined text-[16px]">event</span>
                    {dateLabel}
                    <span className="ml-auto flex items-center gap-0.5">
                      {t.festivalDetailPage.viewDetails}
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
