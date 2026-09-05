import { useLanguage } from '../../context/language-context'
import { wzkMapImage } from '../../data/watZomKham'

export function WzkWayfinding() {
  const { t } = useLanguage()
  const w = t.watZomKham.wayfinding

  return (
    <section id="wayfinding-guide" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter pb-16 md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">explore</span>
          {w.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{w.title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{w.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative h-96 overflow-hidden rounded-2xl border border-border shadow-soft lg:col-span-7 lg:h-[420px]">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${wzkMapImage}')` }}
            role="img"
            aria-label={w.pinLabel}
          />
          <div className="absolute left-4 top-4 flex max-w-xs flex-col gap-1 rounded-xl border border-white/20 bg-white/95 p-3.5 shadow-elevated">
            <div className="flex items-center gap-1.5 font-sans text-[12px] font-bold text-primary">
              <span className="material-symbols-outlined text-[17px]">pin_drop</span>
              {w.pinLabel}
            </div>
            <p className="font-sans text-xs leading-relaxed text-slate-600">{w.pinDetail}</p>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/20 bg-white/95 p-3 shadow-elevated">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="font-sans text-[12px] font-semibold text-slate-800">{w.routeLegendA}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="font-sans text-[12px] font-semibold text-slate-800">{w.routeLegendB}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5">
          {w.routes.map((route, i) => (
            <div key={route.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft">
              <div
                className={`flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wide ${
                  i === 0 ? 'text-primary' : 'text-secondary'
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">
                  {i === 0 ? 'directions_walk' : 'local_taxi'}
                </span>
                {route.eyebrow}
              </div>
              <h4 className="font-serif text-base font-bold text-text">{route.title}</h4>
              <p className="font-sans text-xs leading-relaxed text-text-muted">{route.description}</p>
            </div>
          ))}

          <div className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft">
            <div className="flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
              <span className="material-symbols-outlined text-[17px] text-primary">wb_twilight</span>
              {w.timingHeading}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {w.timingSlots.map((slot) => (
                <div key={slot.label} className="rounded-xl border border-border bg-bg-elevated-2 p-3">
                  <span className="block font-sans text-[10px] font-bold uppercase text-primary">{slot.label}</span>
                  <span className="block font-sans text-xs font-bold text-text">{slot.time}</span>
                  <span className="mt-0.5 block font-sans text-[11px] text-text-faint">{slot.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
