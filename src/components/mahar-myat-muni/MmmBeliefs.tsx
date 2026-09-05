import { useLanguage } from '../../context/language-context'
import { mmmFaceImage } from '../../data/maharMyatMuni'

const BELIEF_ICONS = ['self_improvement', 'celebration', 'local_fire_department']

export function MmmBeliefs() {
  const { t } = useLanguage()
  const b = t.maharMyatMuni.beliefs

  return (
    <section className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
          {b.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{b.title}</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div
          className="h-72 rounded-2xl border border-border bg-cover bg-center shadow-soft lg:col-span-5 lg:h-full lg:min-h-[360px]"
          style={{ backgroundImage: `url('${mmmFaceImage}')` }}
          role="img"
          aria-label={b.title}
        />

        <div className="flex flex-col gap-4 lg:col-span-7">
          {b.items.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary-soft text-on-primary-soft">
                <span className="material-symbols-outlined text-[22px]">{BELIEF_ICONS[i]}</span>
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-base font-bold text-text">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
