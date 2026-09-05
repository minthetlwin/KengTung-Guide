import { useLanguage } from '../context/language-context'
import { newsImages } from '../data/news'
import { NewsCard } from '../components/news/NewsCard'

export function NewsPage() {
  const { t } = useLanguage()
  const n = t.news

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">newspaper</span>
          {n.eyebrow}
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-text lg:text-4xl">{n.title}</h1>
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{n.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {n.articles.map((article, i) => (
          <NewsCard key={article.slug} article={article} image={newsImages[i]} />
        ))}
      </div>
    </div>
  )
}
