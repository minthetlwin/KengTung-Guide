import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Panorama360Viewer } from './Panorama360Viewer'

interface Panorama360SectionProps {
  id?: string
  eyebrow: string
  title: string
  description: string
  cta: string
  hint: string
  src: string
}

export function Panorama360Section({
  id = 'panorama-360',
  eyebrow,
  title,
  description,
  cta,
  hint,
  src,
}: Panorama360SectionProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [open])

  return (
    <section id={id} className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-6 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">vrpano</span>
          {eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{description}</p>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative h-72 w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-bg-elevated-3 text-left shadow-soft transition-all duration-300 hover:shadow-elevated sm:h-80 lg:h-96"
      >
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url('${src}')` }}
          role="img"
          aria-label={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10 transition-colors duration-300 group-hover:from-black/70" />

        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-md bg-black/55 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          <span className="material-symbols-outlined text-[15px]">vrpano</span>
          360°
        </span>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 font-sans text-sm font-bold text-[#8c6b06] shadow-floating transition-transform duration-300 group-hover:scale-105">
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_circle
            </span>
            {cta}
          </span>
        </div>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-black"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div
              className="flex items-start justify-between gap-3 p-4 pt-[max(1rem,env(safe-area-inset-top))] sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate font-serif text-base font-bold text-white sm:text-lg">{title}</span>
                <span className="flex items-center gap-1.5 font-sans text-xs text-white/70">
                  <span className="material-symbols-outlined text-[15px]">touch_app</span>
                  {hint}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            <div className="relative min-h-0 flex-1" onClick={(e) => e.stopPropagation()}>
              <Panorama360Viewer src={src} title={title} className="h-full w-full" />
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}
