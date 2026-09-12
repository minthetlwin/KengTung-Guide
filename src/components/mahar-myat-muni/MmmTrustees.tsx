import { useLanguage } from '../../context/language-context'
import { mmmTrusteePhotos, mmmOldBoardPhotos, mmmTodayBoardPhoto } from '../../data/maharMyatMuni'
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

interface OldBoardGroupProps {
  label: string
  groupPhoto: string
  memberPhotos: string[]
}

// Each old-board photo already has its subject's name and tenure years
// printed on the scan itself, so — unlike TrusteeGroup — there's no separate
// name/role text to render here.
function OldBoardGroup({ label, groupPhoto, memberPhotos }: OldBoardGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-serif text-base font-bold text-text">{label}</h3>
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft">
        <img src={groupPhoto} alt={label} className="w-full object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {memberPhotos.map((photo) => (
          <div key={photo} className="overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft">
            <img src={photo} alt="" className="aspect-[3/4] w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function MmmTrustees() {
  const { t } = useLanguage()
  const tr = t.maharMyatMuni.trustees

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

        <OldBoardGroup
          label={tr.groupOldBoard}
          groupPhoto={mmmOldBoardPhotos.groupPhoto}
          memberPhotos={mmmOldBoardPhotos.members}
        />

        <div className="flex flex-col gap-8 rounded-2xl border border-border bg-bg-elevated-2/40 p-6">
          <h3 className="font-serif text-lg font-bold text-text">{tr.groupNewBoard}</h3>
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft">
            <img src={mmmTodayBoardPhoto} alt={tr.groupNewBoard} className="w-full object-cover" />
          </div>
          <TrusteeGroup label={tr.groupNayaka} people={nayaka} photos={mmmTrusteePhotos.slice(sayadawEnd, nayakaEnd)} />
          <TrusteeGroup
            label={tr.groupLeadership}
            people={leadership}
            photos={mmmTrusteePhotos.slice(nayakaEnd, leadershipEnd)}
          />
          <TrusteeGroup label={tr.groupOthers} people={others} photos={mmmTrusteePhotos.slice(leadershipEnd, othersEnd)} />
        </div>
      </div>
    </section>
  )
}
