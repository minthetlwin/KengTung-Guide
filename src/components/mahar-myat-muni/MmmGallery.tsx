import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../../context/language-context'
import { mmmGalleryAlbums } from '../../data/maharMyatMuni'

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
      <div className="mb-8 flex flex-col gap-1">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">photo_library</span>
          {g.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{g.title}</h2>
      </div>

      <div className="flex flex-col gap-10">
        {mmmGalleryAlbums.map((album, albumIndex) => {
          const a = g.albums[albumIndex]
          return (
            <div key={album.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest text-primary">
                  <span>{a.eyebrow}</span>
                  {a.date && (
                    <>
                      <span className="text-text-faint">·</span>
                      <span className="normal-case tracking-normal text-text-faint">{a.date}</span>
                    </>
                  )}
                </div>
                <h3 className="font-serif text-lg font-bold text-text">{a.title}</h3>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                {album.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => {
                      setOpenAlbumIndex(albumIndex)
                      setPhotoIndex(i)
                    }}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-border bg-bg-elevated-3 shadow-soft transition-all duration-300 hover:shadow-elevated"
                  >
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${src}')` }}
                      role="img"
                      aria-label={a.title}
                    />
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {openAlbum &&
        openAlbumCopy &&
        createPortal(
          <div
            className="animate-fade-in fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={close}
          >
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
            <h4 className="mt-4 max-w-2xl text-center font-serif text-lg font-bold text-white">
              {openAlbumCopy.title}
            </h4>
            {openAlbumCopy.date && (
              <span className="mt-0.5 font-sans text-xs font-semibold text-[#F2D488]">{openAlbumCopy.date}</span>
            )}
            <p className="mt-1 max-h-[22vh] max-w-2xl overflow-y-auto whitespace-pre-line text-center font-sans text-sm text-white/85">
              {openAlbumCopy.caption}
            </p>
            <span className="mt-2 font-sans text-xs font-semibold text-white/50">
              {photoIndex + 1} / {openAlbum.images.length}
            </span>
          </div>,
          document.body,
        )}
    </section>
  )
}
