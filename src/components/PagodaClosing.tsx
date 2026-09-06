import { Link } from 'react-router-dom'

interface PagodaClosingProps {
  text: string
  cta?: string
}

export function PagodaClosing({ text, cta }: PagodaClosingProps) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-gutter pb-16 md:px-gutter-lg">
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-soft/50 via-bg-elevated to-bg-elevated p-8 text-center shadow-soft sm:p-12">
        <span
          className="material-symbols-outlined text-[32px] text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          stars
        </span>
        <p className="max-w-2xl font-serif text-xl leading-relaxed text-text sm:text-2xl">{text}</p>
        {cta && (
          <Link
            to="/#directory"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-on-primary shadow-soft transition-transform hover:scale-[1.02]"
          >
            {cta}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        )}
      </div>
    </section>
  )
}
