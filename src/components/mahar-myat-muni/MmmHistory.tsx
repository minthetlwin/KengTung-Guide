import { useLanguage } from '../../context/language-context'

export function MmmHistory() {
  const { t } = useLanguage()
  const h = t.maharMyatMuni.history

  return (
    <section className="mx-auto w-full max-w-[1440px] px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">auto_stories</span>
          {h.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{h.title}</h2>
      </div>

      <div className="relative flex flex-col gap-6 border-l-2 border-border-strong pl-6 md:pl-10">
        {h.items.map((item) => (
          <div key={item.title} className="relative">
            <div className="absolute -left-[31px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-bg-elevated ring-2 ring-primary shadow-soft md:-left-[47px] md:h-6 md:w-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
              <span className="w-fit rounded-md bg-primary-soft px-2.5 py-0.5 font-sans text-xs font-bold text-on-primary-soft">
                {item.year}
              </span>
              <h3 className="font-serif text-xl font-bold text-text">{item.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
