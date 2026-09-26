import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
  onClick: () => void
}

function TrusteeCard({ person, photo, onClick }: TrusteeCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft transition-all hover:border-primary/40 hover:shadow-elevated">
      <div className="p-4 pb-0">
        <button
          type="button"
          onClick={onClick}
          aria-label={`View ${person.name} photo large`}
          className="group aspect-square w-full cursor-pointer rounded-xl bg-gradient-to-br from-primary via-primary-strong to-primary p-[3px] shadow-elevated"
        >
          <div
            className="h-full w-full overflow-hidden rounded-lg border-[3px] border-bg-elevated bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.04]"
            style={{ backgroundImage: `url('${photo}')` }}
            role="img"
            aria-label={person.name}
          />
        </button>
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
  onPhotoClick: (i: number) => void
}

function TrusteeGroup({ label, people, photos, onPhotoClick }: TrusteeGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-serif text-base font-bold text-text">{label}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((person, i) => (
          <TrusteeCard key={person.name} person={person} photo={photos[i]} onClick={() => onPhotoClick(i)} />
        ))}
      </div>
    </div>
  )
}

interface OldBoardGroupProps {
  label: string
  groupPhoto: string
  memberPhotos: string[]
  onGroupPhotoClick: () => void
  onMemberClick: (i: number) => void
}

// Each old-board photo already has its subject's name and tenure years
// printed on the scan itself, so — unlike TrusteeGroup — there's no separate
// name/role text to render here.
function OldBoardGroup({ label, groupPhoto, memberPhotos, onGroupPhotoClick, onMemberClick }: OldBoardGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-serif text-base font-bold text-text">{label}</h3>
      <button
        type="button"
        onClick={onGroupPhotoClick}
        aria-label={`View ${label} photo large`}
        className="group overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft"
      >
        <img
          src={groupPhoto}
          alt={label}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </button>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {memberPhotos.map((photo, i) => (
          <button
            key={photo}
            type="button"
            onClick={() => onMemberClick(i)}
            aria-label="View trustee photo large"
            className="group overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft"
          >
            <img
              src={photo}
              alt=""
              className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
            />
          </button>
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

  const sayadawPhotos = mmmTrusteePhotos.slice(0, sayadawEnd)
  const nayakaPhotos = mmmTrusteePhotos.slice(sayadawEnd, nayakaEnd)
  const leadershipPhotos = mmmTrusteePhotos.slice(nayakaEnd, leadershipEnd)
  const othersPhotos = mmmTrusteePhotos.slice(leadershipEnd, othersEnd)

  // A single flat, click-to-enlarge sequence spanning every photo in this
  // section, in on-page order, so the lightbox's prev/next arrows walk
  // through the whole section like the site's other photo galleries.
  const photos: { src: string; alt: string }[] = [
    ...sayadaws.map((p, i) => ({ src: sayadawPhotos[i], alt: p.name })),
    { src: mmmOldBoardPhotos.groupPhoto, alt: tr.groupOldBoard },
    ...mmmOldBoardPhotos.members.map((src) => ({ src, alt: tr.groupOldBoard })),
    { src: mmmTodayBoardPhoto, alt: tr.groupNewBoard },
    ...nayaka.map((p, i) => ({ src: nayakaPhotos[i], alt: p.name })),
    ...leadership.map((p, i) => ({ src: leadershipPhotos[i], alt: p.name })),
    ...others.map((p, i) => ({ src: othersPhotos[i], alt: p.name })),
  ]

  const oldBoardGroupIndex = sayadawEnd
  const oldBoardMembersStart = oldBoardGroupIndex + 1
  const todayBoardIndex = oldBoardMembersStart + mmmOldBoardPhotos.members.length
  const nayakaStart = todayBoardIndex + 1
  const leadershipStart = nayakaStart + nayaka.length
  const othersStart = leadershipStart + leadership.length

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function close() {
    setOpenIndex(null)
  }

  useEffect(() => {
    if (openIndex === null) return
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length))
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex])

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
        <TrusteeGroup
          label={tr.groupSayadaw}
          people={sayadaws}
          photos={sayadawPhotos}
          onPhotoClick={(i) => setOpenIndex(i)}
        />

        <OldBoardGroup
          label={tr.groupOldBoard}
          groupPhoto={mmmOldBoardPhotos.groupPhoto}
          memberPhotos={mmmOldBoardPhotos.members}
          onGroupPhotoClick={() => setOpenIndex(oldBoardGroupIndex)}
          onMemberClick={(i) => setOpenIndex(oldBoardMembersStart + i)}
        />

        <div className="flex flex-col gap-8 rounded-2xl border border-border bg-bg-elevated-2/40 p-6">
          <h3 className="font-serif text-lg font-bold text-text">{tr.groupNewBoard}</h3>
          <button
            type="button"
            onClick={() => setOpenIndex(todayBoardIndex)}
            aria-label={`View ${tr.groupNewBoard} photo large`}
            className="group overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft"
          >
            <img
              src={mmmTodayBoardPhoto}
              alt={tr.groupNewBoard}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
          <TrusteeGroup
            label={tr.groupNayaka}
            people={nayaka}
            photos={nayakaPhotos}
            onPhotoClick={(i) => setOpenIndex(nayakaStart + i)}
          />
          <TrusteeGroup
            label={tr.groupLeadership}
            people={leadership}
            photos={leadershipPhotos}
            onPhotoClick={(i) => setOpenIndex(leadershipStart + i)}
          />
          <TrusteeGroup
            label={tr.groupOthers}
            people={others}
            photos={othersPhotos}
            onPhotoClick={(i) => setOpenIndex(othersStart + i)}
          />
        </div>
      </div>

      {openIndex !== null &&
        createPortal(
          <div
            className="animate-fade-in fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation()
                setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_left</span>
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation()
                setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length))
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_right</span>
            </button>

            <img
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-floating"
            />
            <h4 className="mt-4 max-w-2xl text-center font-serif text-lg font-bold text-white">
              {photos[openIndex].alt}
            </h4>
            <span className="mt-2 font-sans text-xs font-semibold text-white/50">
              {openIndex + 1} / {photos.length}
            </span>
          </div>,
          document.body,
        )}
    </section>
  )
}
