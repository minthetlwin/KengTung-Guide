import { useLanguage } from '../../context/language-context'

const TRUSTEE_ICONS = ['shield_person', 'account_balance_wallet', 'architecture', 'menu_book']

export function WzkTrustees() {
  const { t } = useLanguage()
  const tr = t.watZomKham.trustees

  return (
    <section id="trustee-board" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[18px]">account_balance</span>
            {tr.eyebrow}
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{tr.title}</h2>
        </div>
        <div className="flex items-center gap-2 font-sans text-[12px] font-medium text-text-faint">
          <span>{tr.registrationLabel}</span>
          <span className="rounded border border-border bg-bg-elevated-2 px-2.5 py-1 font-mono font-bold text-on-primary-soft">
            {tr.registrationId}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tr.people.map((person, i) => (
          <div
            key={person.name}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary-soft text-on-primary-soft">
              <span className="material-symbols-outlined text-[28px]">{TRUSTEE_ICONS[i]}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-bold text-text">{person.name}</span>
              <span className="mt-0.5 font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
                {person.role}
              </span>
              <span className="mt-2 font-sans text-xs leading-relaxed text-text-muted">{person.bio}</span>
            </div>
            <div className="mt-auto border-t border-border pt-3">
              <span className="inline-flex items-center gap-1 font-sans text-[11px] font-semibold text-on-secondary-soft">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                {person.tenure}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-bg-elevated-2 p-6 lg:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-elevated text-primary shadow-soft">
            <span className="material-symbols-outlined text-[26px]">account_balance</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
              {tr.contactEyebrow}
            </span>
            <span className="font-sans text-base font-bold text-text">{tr.contactAddress}</span>
            <span className="font-sans text-xs text-text-faint">{tr.contactHours}</span>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-sans text-[13px] font-semibold text-on-primary shadow-soft transition-transform hover:scale-[1.02] lg:flex-initial">
            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            {tr.ctaLedger}
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-bg-elevated px-5 py-2.5 font-sans text-[13px] font-semibold text-text shadow-soft transition-colors hover:bg-bg-elevated-3 lg:flex-initial">
            <span className="material-symbols-outlined text-[18px]">mail</span>
            {tr.ctaContact}
          </button>
        </div>
      </div>
    </section>
  )
}
