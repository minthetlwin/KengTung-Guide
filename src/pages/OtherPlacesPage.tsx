import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'

export function OtherPlacesPage() {
  const { t } = useLanguage()
  const p = t.otherPlaces

  usePageMeta({
    title: `${p.title} · ${t.meta.title}`,
    description: p.description,
  })

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">explore</span>
          {p.eyebrow}
        </div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{p.title}</h1>
        <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{p.description}</p>
      </div>

      {p.places.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-bg-elevated px-6 py-16 text-center">
          <span className="material-symbols-outlined text-[32px] text-text-faint">explore</span>
          <p className="max-w-md font-sans text-sm text-text-muted">{p.emptyState}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.places.map((place) => (
            <div
              key={place.name}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <h3 className="font-serif text-lg font-bold text-text">{place.name}</h3>
              <p className="font-sans text-sm leading-relaxed text-text-muted">{place.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
