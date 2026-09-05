import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { newsImages } from '../data/news'

export function NewsArticlePage() {
  const { t } = useLanguage()
  const { slug } = useParams<{ slug: string }>()
  const n = t.news

  const index = n.articles.findIndex((article) => article.slug === slug)
  const article = index === -1 ? null : n.articles[index]

  if (!article) {
    return (
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-4 px-gutter py-24 text-center md:px-gutter-lg">
        <p className="font-sans text-base text-text-muted">{n.notFound}</p>
        <Link
          to="/news"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-bold uppercase tracking-wide text-primary hover:underline"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {n.backToNews}
        </Link>
      </div>
    )
  }

  return (
    <article className="flex w-full flex-col">
      <div className="relative h-72 w-full overflow-hidden md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${newsImages[index]}')` }}
          role="img"
          aria-label={article.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1000px] flex-col justify-end gap-2 px-gutter pb-10 md:px-gutter-lg">
          <span className="inline-flex w-fit items-center rounded bg-primary px-2.5 py-0.5 font-sans text-[11px] font-bold uppercase tracking-wide text-on-primary">
            {article.category}
          </span>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl [text-shadow:0_2px_20px_rgb(0_0_0_/_0.5)]">
            {article.title}
          </h1>
          <span className="font-sans text-xs font-semibold text-white/70">{article.date}</span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-gutter py-10 md:px-gutter-lg">
        <Link
          to="/news"
          className="mb-2 inline-flex w-fit items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wide text-primary hover:underline"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          {n.backToNews}
        </Link>
        {article.body.map((paragraph, i) => (
          <p key={i} className="font-sans text-base leading-relaxed text-text">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}
