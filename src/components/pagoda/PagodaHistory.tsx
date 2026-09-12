import { useState } from 'react'
import { AudioNarrationPlayer } from '../AudioNarrationPlayer'
import type { PagodaDetailDictionary } from '../../i18n/types'

interface PagodaHistoryProps {
  history: PagodaDetailDictionary['history']
  audio: PagodaDetailDictionary['audio']
  audioSrc: string
}

export function PagodaHistory({ history: h, audio: a, audioSrc }: PagodaHistoryProps) {
  const [expanded, setExpanded] = useState(false)
  const collapsible = Boolean(h.readMoreCta && h.readLessCta)

  return (
    <section id="history-timeline" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-6 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">auto_stories</span>
          {h.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{h.title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{h.description}</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {h.quickFacts.map((fact) => (
          <div key={fact.label} className="rounded-xl border border-border bg-bg-elevated p-4 shadow-soft">
            <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
              {fact.label}
            </span>
            <span className="mt-0.5 block font-sans text-sm font-bold text-primary">{fact.value}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <AudioNarrationPlayer src={audioSrc} title={a.title} playLabel={a.play} pauseLabel={a.pause} credit={a.credit} />
      </div>

      {collapsible ? (
        <>
          <div className="relative">
            <div
              className={`flex flex-col gap-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                expanded ? 'max-h-[10000px]' : 'max-h-[360px]'
              }`}
            >
              {h.sections.map((section) => (
                <div key={section.heading} className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft">
                  <h3 className="font-serif text-lg font-bold text-text">{section.heading}</h3>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} className="font-sans text-sm leading-relaxed text-text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            {!expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg to-transparent" />
            )}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="relative z-10 mx-auto mt-4 flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wide text-primary shadow-soft transition-colors hover:bg-bg-elevated-2"
          >
            {expanded ? h.readLessCta : h.readMoreCta}
            <span className="material-symbols-outlined text-[18px]">{expanded ? 'expand_less' : 'expand_more'}</span>
          </button>
        </>
      ) : (
        <div className="flex flex-col gap-6">
          {h.sections.map((section) => (
            <div
              key={section.heading}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft"
            >
              <h3 className="font-serif text-lg font-bold text-text">{section.heading}</h3>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-sans text-sm leading-relaxed text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
