import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/language-context'
import { mmmGalleryAlbums } from '../../data/maharMyatMuni'

const SPANS = ['lg:col-span-2 h-96', 'h-96', 'h-96', 'lg:col-span-2 h-72', 'lg:col-span-2 h-72']

export function MmmGallery() {
  const { t } = useLanguage()
  const g = t.maharMyatMuni.gallery

  const [openAlbumIndex, setOpenAlbumIndex] = useState<number | null>(null)
  const [photoIndex, setPhotoIndex] = useState(0)

  const openAlbum = openAlbumIndex === null ? null : mmmGalleryAlbums[openAlbumIndex]
  const openAlbumCopy = openAlbumIndex === null ? null : g.albums[openAlbumIndex]

  function close() {
    setOpenAlbumIndex(null)
  }

  useEffect(() => {
    if (!openAlbum) return
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setPhotoIndex((i) => (i + 1) % openAlbum!.images.length)
      if (e.key === 'ArrowLeft') setPhotoIndex((i) => (i - 1 + openAlbum!.images.length) % openAlbum!.images.length)
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [openAlbum])

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
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {mmmGalleryAlbums.map((album, i) => {
          const a = g.albums[i]
          return (
            <button
              key={album.id}
              type="button"
              onClick={() => {
                setOpenAlbumIndex(i)
                setPhotoIndex(0)
              }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-bg-elevated-3 text-left shadow-soft transition-all duration-300 hover:shadow-elevated ${SPANS[i % SPANS.length]}`}
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${album.images[0]}')` }}
                role="img"
                aria-label={a.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <span className="absolute right-4 top-4 flex items-center gap-1 rounded-md bg-white/90 px-3 py-1 font-sans text-[11px] font-bold text-[#8c6b06] shadow-soft">
                <span className="material-symbols-outlined text-[15px]">photo_library</span>
                {g.photoCount(album.images.length)}
              </span>
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1">
                <div className="flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest text-[#F2D488]">
                  <span>{a.eyebrow}</span>
                  {a.date && (
                    <>
                      <span className="text-white/40">·</span>
                      <span className="normal-case tracking-normal text-white/70">{a.date}</span>
                    </>
                  )}
                </div>
                <h4 className="font-serif text-lg font-bold text-white">{a.title}</h4>
                <p className="line-clamp-2 font-sans text-xs text-white/85 md:text-sm">{a.caption}</p>
              </div>
            </button>
          )
        })}
      </div>

      {openAlbum && openAlbumCopy && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4" onClick={close}>
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              setPhotoIndex((i) => (i - 1 + openAlbum.images.length) % openAlbum.images.length)
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              setPhotoIndex((i) => (i + 1) % openAlbum.images.length)
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_right</span>
          </button>

          <img
            src={openAlbum.images[photoIndex]}
            alt={openAlbumCopy.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-floating"
          />
          <h4 className="mt-4 font-serif text-lg font-bold text-white">{openAlbumCopy.title}</h4>
          {openAlbumCopy.date && (
            <span className="mt-0.5 font-sans text-xs font-semibold text-[#F2D488]">{openAlbumCopy.date}</span>
          )}
          <p className="mt-1 max-h-[22vh] max-w-2xl overflow-y-auto whitespace-pre-line text-center font-sans text-sm text-white/85">
            {openAlbumCopy.caption}
          </p>
          <span className="mt-2 font-sans text-xs font-semibold text-white/50">
            {photoIndex + 1} / {openAlbum.images.length}
          </span>
        </div>
      )}
    </section>
  )
}
