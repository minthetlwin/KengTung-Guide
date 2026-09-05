import { useLanguage } from '../context/language-context'
import { FestivalsCalendar } from '../components/FestivalsCalendar'
import { festivalsMeta } from '../data/festivals'

const INTL_LOCALES: Record<string, string> = { en: 'en-US', my: 'my-MM', th: 'th-TH' }

export function FestivalCalendarPage() {
  const { t, locale } = useLanguage()
  const f = t.festivals

  return (
    <div className="flex w-full flex-col gap-10 py-14">
      <FestivalsCalendar />

      <div className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
        <div className="mb-6 flex flex-col gap-1.5">
          <span className="font-sans text-eyebrow uppercase text-primary">{f.eyebrow}</span>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{f.title}</h2>
          <p className="font-sans text-sm text-text-muted">{f.dateNote}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {f.slides.map((slide, i) => {
            const meta = festivalsMeta[i]
            const dateLabel = new Intl.DateTimeFormat(INTL_LOCALES[locale] ?? 'en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format(new Date(meta.targetDate))

            return (
              <div
                key={meta.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft"
              >
                <div className="relative h-40 w-full">
                  <div
                    className="h-full w-full bg-cover bg-center"
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
                  <h3 className="font-serif text-lg font-bold text-text">{slide.heading}</h3>
                  <p className="line-clamp-3 font-sans text-sm leading-relaxed text-text-muted">
                    {slide.description}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 border-t border-border pt-3 font-sans text-xs font-semibold text-primary">
                    <span className="material-symbols-outlined text-[16px]">event</span>
                    {dateLabel}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
