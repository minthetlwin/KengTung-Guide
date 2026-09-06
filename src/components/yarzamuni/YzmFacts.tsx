import { useLanguage } from '../../context/language-context'

export function YzmFacts() {
  const { t } = useLanguage()
  const pills = t.yarzamuni.facts.pills

  return (
    <section className="mx-auto w-full max-w-[1440px] px-gutter pt-10 md:px-gutter-lg">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {pills.map((pill) => (
          <div
            key={pill.label}
            className="flex flex-col gap-0.5 rounded-xl border border-border bg-bg-elevated p-4 shadow-soft"
          >
            <span className="font-sans text-[11px] font-semibold uppercase tracking-wide text-text-faint">
              {pill.label}
            </span>
            <span className="font-sans text-sm font-bold text-primary">{pill.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
