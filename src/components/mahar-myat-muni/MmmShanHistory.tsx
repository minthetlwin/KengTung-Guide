import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/language-context'
import { mmmShanHistoryPages } from '../../data/maharMyatMuni'

export function MmmShanHistory() {
  const { t } = useLanguage()
  const s = t.maharMyatMuni.shanHistory

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function close() {
    setOpenIndex(null)
  }

  useEffect(() => {
    if (openIndex === null) return
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % mmmShanHistoryPages.length))
      if (e.key === 'ArrowLeft')
        setOpenIndex((i) => (i === null ? i : (i - 1 + mmmShanHistoryPages.length) % mmmShanHistoryPages.length))
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [openIndex])

  return (
    <section id="shan-history" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-6 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">menu_book</span>
          {s.title}
        </div>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{s.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {mmmShanHistoryPages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-border bg-bg-elevated-3 shadow-soft transition-all duration-300 hover:shadow-elevated"
          >
            <div
              className="h-full w-full bg-cover bg-top transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${src}')` }}
              role="img"
              aria-label={`${s.title} ${i + 1}`}
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
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
            aria-label="Previous page"
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((i) => (i === null ? i : (i - 1 + mmmShanHistoryPages.length) % mmmShanHistoryPages.length))
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          </button>
          <button
            type="button"
            aria-label="Next page"
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((i) => (i === null ? i : (i + 1) % mmmShanHistoryPages.length))
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_right</span>
          </button>

          <img
            src={mmmShanHistoryPages[openIndex]}
            alt={`${s.title} ${openIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-floating"
          />
          <span className="mt-2 font-sans text-xs font-semibold text-white/50">
            {openIndex + 1} / {mmmShanHistoryPages.length}
          </span>
        </div>
      )}
    </section>
  )
}
