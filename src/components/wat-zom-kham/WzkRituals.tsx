import { useLanguage } from '../../context/language-context'

export function WzkRituals() {
  const { t } = useLanguage()
  const r = t.watZomKham.rituals

  return (
    <section id="festivals-rituals" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">celebration</span>
          {r.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{r.title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{r.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {r.festivals.map((festival) => (
          <div
            key={festival.title}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-bg-elevated p-7 shadow-soft transition-shadow hover:shadow-elevated"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-md bg-primary-soft px-3 py-1 font-sans text-xs font-bold text-on-primary-soft">
                  {festival.period}
                </span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
                  {festival.cycle}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-text">{festival.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-text-muted">{festival.description}</p>

              <div className="flex flex-col gap-2 rounded-xl border border-border bg-bg-elevated-2 p-4">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
                  {festival.checklistHeading}
                </span>
                <ul className="flex flex-col gap-2">
                  {festival.checklist.map((line) => (
                    <li key={line} className="flex items-start gap-2 font-sans text-sm text-text-muted">
                      <span className="material-symbols-outlined mt-0.5 shrink-0 text-[17px] text-primary">
                        check_circle
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border pt-4 font-sans text-xs font-medium text-text-faint">
              <span>{festival.nextObservance}</span>
              <span className="rounded bg-secondary-soft px-2.5 py-0.5 font-bold text-on-secondary-soft">
                {festival.statusBadge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
