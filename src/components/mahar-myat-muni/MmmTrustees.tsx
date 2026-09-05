import { useLanguage } from '../../context/language-context'
import { mmmTrusteePhotos } from '../../data/maharMyatMuni'

export function MmmTrustees() {
  const { t } = useLanguage()
  const tr = t.maharMyatMuni.trustees

  return (
    <section id="trustees" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">account_balance</span>
          {tr.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{tr.title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{tr.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tr.people.map((person, i) => (
          <div
            key={person.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="p-4 pb-0">
              <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-primary via-primary-strong to-primary p-[3px] shadow-elevated">
                <div
                  className="h-full w-full rounded-lg border-[3px] border-bg-elevated bg-cover bg-center"
                  style={{ backgroundImage: `url('${mmmTrusteePhotos[i]}')` }}
                  role="img"
                  aria-label={person.name}
                />
              </div>
            </div>
            <div className="flex flex-col p-5">
              <span className="font-sans text-base font-bold leading-snug text-text">{person.name}</span>
              <span className="mt-1 font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
                {person.role}
              </span>
              {person.location && (
                <span className="mt-1.5 flex items-start gap-1 font-sans text-[11px] leading-snug text-text-faint">
                  <span className="material-symbols-outlined mt-px text-[13px]">location_on</span>
                  {person.location}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
