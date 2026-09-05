import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/language-context'
import type { NewsArticle } from '../../i18n/types'

interface NewsCardProps {
  article: NewsArticle
  image: string
}

export function NewsCard({ article, image }: NewsCardProps) {
  const { t } = useLanguage()

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative h-48 w-full overflow-hidden bg-bg-elevated-3">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
          role="img"
          aria-label={article.title}
        />
        <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 font-sans text-[11px] font-bold uppercase tracking-wide text-on-primary shadow-soft">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <span className="font-sans text-[11px] font-semibold text-text-faint">{article.date}</span>
          <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-text transition-colors group-hover:text-primary">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-3 font-sans text-[13px] leading-relaxed text-text-muted">
            {article.excerpt}
          </p>
        </div>

        <Link
          to={`/news/${article.slug}`}
          className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wide text-primary hover:underline"
        >
          {t.news.readMore}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </article>
  )
}
