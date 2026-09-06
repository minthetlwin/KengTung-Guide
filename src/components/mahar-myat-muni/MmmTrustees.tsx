import { useState } from 'react'
import { useLanguage } from '../../context/language-context'
import { mmmTrusteePhotos } from '../../data/maharMyatMuni'
import type { MmmTrusteeMember } from '../../i18n/types'

// The roster is a fixed, index-aligned list (8 Sayadaws, 3 Nayaka patrons, the
// Chairperson + 2 Vice Chairpersons, then the rest of the executive
// committee) — the same order `mmmTrusteePhotos` is aligned to.
const GROUP_BOUNDARIES = [0, 8, 11, 14, 22] as const

interface TrusteeCardProps {
  person: MmmTrusteeMember
  photo: string
}

function TrusteeCard({ person, photo }: TrusteeCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
      <div className="p-4 pb-0">
        <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-primary via-primary-strong to-primary p-[3px] shadow-elevated">
          <div
            className="h-full w-full rounded-lg border-[3px] border-bg-elevated bg-cover bg-center"
            style={{ backgroundImage: `url('${photo}')` }}
            role="img"
            aria-label={person.name}
          />
        </div>
      </div>
      <div className="flex flex-col p-5">
        <span className="font-sans text-base font-bold leading-snug text-text">{person.name}</span>
        <span className="mt-1 font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
          {person.role}
        </span>
        {person.location && (
          <span className="mt-1.5 flex items-start gap-1 font-sans text-[11px] leading-snug text-text-faint">
            <span className="material-symbols-outlined mt-px text-[13px]">location_on</span>
            {person.location}
          </span>
        )}
      </div>
    </div>
  )
}

interface TrusteeGroupProps {
  label: string
  people: MmmTrusteeMember[]
  photos: string[]
}

function TrusteeGroup({ label, people, photos }: TrusteeGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-serif text-base font-bold text-text">{label}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((person, i) => (
          <TrusteeCard key={person.name} person={person} photo={photos[i]} />
        ))}
      </div>
    </div>
  )
}

export function MmmTrustees() {
  const { t } = useLanguage()
  const tr = t.maharMyatMuni.trustees
  const [expanded, setExpanded] = useState(false)

  const [sayadawEnd, nayakaEnd, leadershipEnd, othersEnd] = GROUP_BOUNDARIES.slice(1)
  const sayadaws = tr.people.slice(0, sayadawEnd)
  const nayaka = tr.people.slice(sayadawEnd, nayakaEnd)
  const leadership = tr.people.slice(nayakaEnd, leadershipEnd)
  const others = tr.people.slice(leadershipEnd, othersEnd)

  return (
    <section id="trustees" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">account_balance</span>
          {tr.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{tr.title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{tr.description}</p>
      </div>

      <div className="flex flex-col gap-8">
        <TrusteeGroup label={tr.groupSayadaw} people={sayadaws} photos={mmmTrusteePhotos.slice(0, sayadawEnd)} />

        {expanded && (
          <>
            <TrusteeGroup
              label={tr.groupNayaka}
              people={nayaka}
              photos={mmmTrusteePhotos.slice(sayadawEnd, nayakaEnd)}
            />
            <TrusteeGroup
              label={tr.groupLeadership}
              people={leadership}
              photos={mmmTrusteePhotos.slice(nayakaEnd, leadershipEnd)}
            />
            <TrusteeGroup
              label={tr.groupOthers}
              people={others}
              photos={mmmTrusteePhotos.slice(leadershipEnd, othersEnd)}
            />
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mx-auto mt-6 flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wide text-primary shadow-soft transition-colors hover:bg-bg-elevated-2"
      >
        {expanded ? tr.showLessCta : tr.showMoreCta}
        <span className="material-symbols-outlined text-[18px]">{expanded ? 'expand_less' : 'expand_more'}</span>
      </button>
    </section>
  )
}
