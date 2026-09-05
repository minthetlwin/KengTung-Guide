import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import type { DirectoryCard } from '../i18n/types'

interface SanctuaryCardProps {
  card: DirectoryCard
  image: string
}

export function SanctuaryCard({ card, image }: SanctuaryCardProps) {
  const { t } = useLanguage()

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative h-52 w-full overflow-hidden bg-bg-elevated-3">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
          role="img"
          aria-label={card.title}
        />
        <span className="absolute right-3 top-3 rounded bg-bg-elevated/90 px-2 py-0.5 font-sans text-[11px] font-bold text-primary shadow-soft backdrop-blur-sm">
          {card.code}
        </span>
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-black/55 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="font-serif text-lg font-semibold leading-snug text-text transition-colors group-hover:text-primary">
            {card.title}
          </h3>
          <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-wide text-primary/80">
            {card.subtitle}
          </p>
          <p className="line-clamp-3 font-sans text-[13px] leading-relaxed text-text-muted">
            {card.description}
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
          <div className="flex items-center justify-between font-sans text-[11px] text-text-faint">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
              {card.hours}
            </span>
            <span className="font-semibold text-text-muted">{card.price}</span>
          </div>
          {card.detailPath ? (
            <Link
              to={card.detailPath}
              className="w-full rounded-lg bg-bg-elevated-2 py-2 text-center font-sans text-xs font-semibold uppercase tracking-wide text-text transition-colors hover:bg-primary hover:text-on-primary"
            >
              {t.common.viewDetails}
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-lg bg-bg-elevated-2 py-2 font-sans text-xs font-semibold uppercase tracking-wide text-text-faint"
            >
              {t.common.viewDetails}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
