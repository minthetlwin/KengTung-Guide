import { useLanguage } from '../context/language-context'

export function AboutPage() {
  const { t } = useLanguage()
  const a = t.aboutPage

  return (
    <div className="mx-auto w-full max-w-[900px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">info</span>
          {a.eyebrow}
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-text lg:text-4xl">{a.title}</h1>
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{a.description}</p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8">
        <h2 className="font-serif text-xl font-bold text-text">{a.missionTitle}</h2>
        <p className="font-sans text-sm leading-relaxed text-text-muted md:text-base">{a.missionText}</p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-soft/50 via-bg-elevated to-bg-elevated p-8 text-center shadow-soft sm:p-10">
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
