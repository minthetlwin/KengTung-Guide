import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/language-context'
import { directoryImages } from '../../data/images'
import { SanctuaryCard } from '../SanctuaryCard'

export function MmmOtherPagodas() {
  const { t } = useLanguage()
  const o = t.maharMyatMuni.otherPagodas
  const otherCards = t.directory.cards.filter((card) => card.code !== 'KT-04')

  return (
    <section className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[18px]">explore</span>
            {o.eyebrow}
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{o.title}</h2>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-text-muted">{o.description}</p>
        </div>
        <Link
          to="/pagodas"
          className="inline-flex w-fit items-center gap-1 font-sans text-xs font-bold uppercase tracking-wide text-primary hover:underline"
        >
          {o.viewAll}
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {otherCards.map((card) => (
          <SanctuaryCard key={card.code} card={card} image={directoryImages[card.code as keyof typeof directoryImages]} />
        ))}
      </div>
    </section>
  )
}
