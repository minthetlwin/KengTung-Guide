import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { AudioNarrationPlayer } from '../components/AudioNarrationPlayer'
import { narrationTracks } from '../data/narrations'
import { pagodaLocations } from '../data/pagodaLocations'
import { usePageMeta } from '../hooks/usePageMeta'

export function NarrationPage() {
  const { t } = useLanguage()
  const n = t.narrationPage
  const audio = t.maharMyatMuni.audio

  usePageMeta({
    title: `${n.title} · ${t.meta.title}`,
    description: n.description,
  })

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">headphones</span>
          {n.eyebrow}
        </div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{n.title}</h1>
        <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{n.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {t.directory.cards.map((card) => {
          const track = narrationTracks.find((item) => item.code === card.code)
          const pin = pagodaLocations.find((item) => item.code === card.code)

          return (
            <article
              key={card.code}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative h-48 w-full overflow-hidden bg-bg-elevated-3 sm:h-56">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${pin?.image}')` }}
                  role="img"
                  aria-label={card.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                  {card.code}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="font-serif text-xl font-bold text-white drop-shadow-sm sm:text-2xl">{card.title}</h2>
                  <p className="mt-0.5 font-sans text-xs font-semibold uppercase tracking-wide text-white/80">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                {track ? (
                  <AudioNarrationPlayer
                    src={track.audioSrc}
                    title={audio.title}
                    playLabel={audio.play}
                    pauseLabel={audio.pause}
                    credit={audio.credit}
                  />
                ) : (
                  <div className="flex items-center gap-2 rounded-xl border border-dashed border-border bg-bg px-4 py-3.5 font-sans text-xs font-semibold text-text-faint">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    {n.comingSoon}
                  </div>
                )}

                {card.detailPath && (
                  <Link
                    to={card.detailPath}
                    className="mt-auto inline-flex w-fit items-center gap-1 font-sans text-xs font-bold uppercase tracking-wide text-primary hover:underline"
                  >
                    {n.visitPage}
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
