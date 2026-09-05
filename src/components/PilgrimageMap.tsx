import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { naungTungImage } from '../data/images'

const PIN_ACCENTS = ['bg-primary', 'bg-secondary', 'bg-tertiary'] as const

export function PilgrimageMap() {
  const { t } = useLanguage()
  const m = t.pilgrimageMap

  return (
    <section id="map" className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
      <div className="flex flex-col gap-8 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft lg:flex-row lg:items-center lg:p-8">
        <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border shadow-soft md:h-80 lg:w-3/5">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${naungTungImage}')` }}
            role="img"
            aria-label={m.title}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4">
            <div className="flex flex-wrap items-center gap-2">
              {m.pins.map((pin, i) => (
                <span
                  key={pin.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-sans text-xs font-semibold text-slate-800 shadow-soft"
                >
                  <span className={`h-2 w-2 rounded-full ${PIN_ACCENTS[i]}`} />
                  {pin.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-2/5">
          <div>
            <span className="font-sans text-eyebrow uppercase text-primary">{m.eyebrow}</span>
            <h3 className="mt-1 font-serif text-headline text-text">{m.title}</h3>
          </div>
          <p className="font-sans text-sm leading-relaxed text-text-muted">{m.description}</p>

          <div className="flex flex-col gap-2">
            {m.infoRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-lg border border-border bg-bg-elevated-2 px-4 py-2.5"
              >
                <span className="font-sans text-sm font-medium text-text">{row.label}</span>
                <span className="font-sans text-xs font-semibold text-primary">{row.value}</span>
              </div>
            ))}
          </div>

          <Link
            to="/location-map"
            className="inline-flex items-center gap-1.5 pt-1 font-sans text-xs font-bold uppercase tracking-wide text-primary hover:underline"
          >
            {m.cta}
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
