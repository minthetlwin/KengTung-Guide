import { useLanguage } from '../../context/language-context'
import { wzkGalleryImages } from '../../data/watZomKham'

const SPANS = ['lg:col-span-2 h-96', 'h-96', 'h-96', 'lg:col-span-2 h-72', 'lg:col-span-2 h-72']

export function WzkGallery() {
  const { t } = useLanguage()
  const g = t.watZomKham.gallery

  return (
    <section id="photo-gallery" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[18px]">photo_library</span>
            {g.eyebrow}
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{g.title}</h2>
        </div>
        <span className="font-sans text-[13px] font-medium text-text-faint">{g.countLabel}</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {g.items.map((item, i) => (
          <div
            key={item.plate}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-bg-elevated-3 shadow-soft transition-all duration-300 hover:shadow-elevated ${SPANS[i]}`}
          >
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${wzkGalleryImages[i]}')` }}
              role="img"
              aria-label={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <span className="absolute right-4 top-4 rounded-md bg-white/90 px-3 py-1 font-sans text-[11px] font-bold text-[#8c6b06] shadow-soft">
              {item.plate}
            </span>
            <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1">
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#F2D488]">
                {item.eyebrow}
              </span>
              <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
              <p className="line-clamp-2 font-sans text-xs text-white/85 md:text-sm">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
