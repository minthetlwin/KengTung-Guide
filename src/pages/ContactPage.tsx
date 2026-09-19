import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactPage() {
  const { t } = useLanguage()
  const c = t.contactPage

  usePageMeta({
    title: `${c.title} · ${t.meta.title}`,
    description: c.description,
  })

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">mail</span>
          {c.eyebrow}
        </div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{c.title}</h1>
        <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{c.description}</p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8">
          <h2 className="font-serif text-base font-bold text-text">{c.chairmenLabel}</h2>
          <ul className="flex flex-col gap-3">
            {c.chairmen.map((person) => (
              <li
                key={person.phone}
                className="flex flex-col gap-2 rounded-xl border border-border bg-bg px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="flex items-center gap-2 font-sans text-sm font-semibold text-text">
                  <span className="material-symbols-outlined text-[18px] text-primary">person</span>
                  {person.name}
                </span>
                <a
                  href={`tel:${person.phone}`}
                  className="flex items-center gap-2 font-sans text-sm text-primary hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  {person.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft">
            <span
              className="material-symbols-outlined text-[26px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
            <h3 className="font-serif text-base font-bold text-text">{c.infoTitle}</h3>
            <p className="font-sans text-sm leading-relaxed text-text-muted">{c.infoText}</p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">place</span>
              <div>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
                  {c.locationLabel}
                </span>
                <p className="mt-0.5 font-sans text-sm text-text">{c.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">translate</span>
              <div>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
                  {c.languagesLabel}
                </span>
                <p className="mt-0.5 font-sans text-sm text-text">{c.languages}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
