import { useLanguage } from '../context/language-context'
import { newsImages } from '../data/news'
import { NewsCard } from '../components/news/NewsCard'
import { usePageMeta } from '../hooks/usePageMeta'

export function NewsPage() {
  const { t } = useLanguage()
  const n = t.news

  usePageMeta({
    title: `${n.title} · ${t.meta.title}`,
    description: n.description,
  })

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">newspaper</span>
          {n.eyebrow}
        </div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{n.title}</h1>
        <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{n.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {n.articles.map((article, i) => (
          <NewsCard key={article.slug} article={article} image={newsImages[i]} />
        ))}
      </div>
    </div>
  )
}
