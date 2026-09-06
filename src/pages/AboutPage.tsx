import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'

const FEATURE_ICONS = ['translate', 'auto_stories', 'map'] as const

export function AboutPage() {
  const { t } = useLanguage()
  const a = t.aboutPage
  const pagodaCount = t.directory.cards.length

  usePageMeta({
    title: `${a.title} · ${t.meta.title}`,
    description: a.description,
  })

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">info</span>
          {a.eyebrow}
        </div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{a.title}</h1>
        <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{a.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {a.features.map((feature, i) => (
          <div
            key={feature.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-on-primary-soft">
              <span className="material-symbols-outlined text-[22px]">{FEATURE_ICONS[i]}</span>
            </span>
            <h3 className="font-serif text-base font-bold text-text">{feature.title}</h3>
            <p className="font-sans text-sm leading-relaxed text-text-muted">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8 lg:col-span-8">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-secondary">
            <span className="material-symbols-outlined text-[18px]">flag</span>
            {a.missionTitle}
          </div>
          <p className="font-sans text-sm leading-relaxed text-text-muted md:text-base">{a.missionText}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1">
          <div className="flex flex-col justify-center rounded-2xl border border-border bg-bg-elevated p-6 text-center shadow-soft">
            <span className="font-serif text-3xl font-bold text-primary">{pagodaCount}</span>
            <span className="mt-1 font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
              {a.statPagodasLabel}
            </span>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-border bg-bg-elevated p-6 text-center shadow-soft">
            <span className="font-serif text-3xl font-bold text-primary">3</span>
            <span className="mt-1 font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
              {a.statLanguagesLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-soft/50 via-bg-elevated to-bg-elevated p-8 text-center shadow-soft sm:p-10">
        <span
          className="material-symbols-outlined text-[32px] text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          school
        </span>
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">{a.creditEyebrow}</span>
        <h3 className="font-serif text-2xl font-bold text-text">{a.creditTitle}</h3>
        <p className="max-w-xl font-sans text-sm leading-relaxed text-text-muted">{a.creditText}</p>
      </div>
    </div>
  )
}
