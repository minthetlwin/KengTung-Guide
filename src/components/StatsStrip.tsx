import { useLanguage } from '../context/language-context'

const ACCENTS = [
  { text: 'text-primary', border: 'hover:border-primary/50' },
  { text: 'text-secondary', border: 'hover:border-secondary/50' },
  { text: 'text-tertiary', border: 'hover:border-tertiary/50' },
  { text: 'text-primary', border: 'hover:border-primary/50' },
] as const

export function StatsStrip() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-3 px-gutter md:px-gutter-lg lg:grid-cols-4 lg:gap-4">
      {t.stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col rounded-xl border border-border bg-bg-elevated p-5 shadow-soft transition-colors ${ACCENTS[i].border}`}
        >
          <span className={`font-serif text-3xl font-semibold leading-none ${ACCENTS[i].text}`}>
            {stat.value}
          </span>
          <span className="mt-2 font-sans text-[11px] font-bold uppercase tracking-wide text-text">
            {stat.label}
          </span>
          <span className="mt-1 font-sans text-xs text-text-faint">{stat.sub}</span>
        </div>
      ))}
    </section>
  )
}
