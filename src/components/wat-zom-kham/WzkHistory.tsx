import { useLanguage } from '../../context/language-context'
import { wzkTimelineImages } from '../../data/watZomKham'

export function WzkHistory() {
  const { t } = useLanguage()
  const h = t.watZomKham.history

  return (
    <section id="history-timeline" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">auto_stories</span>
          {h.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{h.title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{h.description}</p>
      </div>

      <div className="relative flex flex-col gap-6 border-l-2 border-border-strong pl-6 md:pl-10">
        {h.items.map((item, i) => (
          <div key={item.title} className="relative">
            <div className="absolute -left-[31px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-bg-elevated ring-2 ring-primary shadow-soft md:-left-[47px] md:h-6 md:w-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated md:flex-row md:items-start md:justify-between md:gap-6">
              <div className="flex max-w-2xl flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-md bg-primary-soft px-2.5 py-0.5 font-sans text-xs font-bold text-on-primary-soft">
                    {item.dateBadge}
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
                    {item.eyebrow}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-text">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-text-muted">{item.description}</p>
                <span className="pt-1 font-sans text-xs font-medium text-text-faint">{item.citation}</span>
              </div>
              <div
                className="h-36 w-full shrink-0 rounded-xl border border-border bg-cover bg-center md:w-56"
                style={{ backgroundImage: `url('${wzkTimelineImages[i]}')` }}
                role="img"
                aria-label={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
