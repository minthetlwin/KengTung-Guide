import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { pagodaLocations } from '../data/pagodaLocations'
import { usePageMeta } from '../hooks/usePageMeta'
import { GoogleMapEmbed } from '../components/GoogleMapEmbed'

export function LocationMapPage() {
  const { t } = useLanguage()
  const l = t.locationMapPage

  usePageMeta({
    title: `${l.title} · ${t.meta.title}`,
    description: l.description,
  })

  const pins = useMemo(
    () =>
      pagodaLocations
        .map((loc) => ({ ...loc, card: t.directory.cards.find((c) => c.code === loc.code) }))
        .filter((pin) => pin.card),
    [t.directory.cards],
  )

  const [activeCode, setActiveCode] = useState(pins[0]?.code)
  const activePin = pins.find((pin) => pin.code === activeCode) ?? pins[0]

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">map</span>
          {l.eyebrow}
        </div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{l.title}</h1>
        <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{l.description}</p>
      </div>

      {activePin && (
        <>
          <div className="mb-3 flex flex-wrap gap-2">
            {pins.map((pin) => (
              <button
                key={pin.code}
                type="button"
                onClick={() => setActiveCode(pin.code)}
                aria-pressed={pin.code === activePin.code}
                className={`rounded-full border px-4 py-2 font-sans text-xs font-semibold transition-colors ${
                  pin.code === activePin.code
                    ? 'border-primary bg-primary text-on-primary'
                    : 'border-border bg-bg-elevated text-text-muted hover:bg-bg-elevated-2'
                }`}
              >
                {pin.card!.title}
              </button>
            ))}
          </div>

          <GoogleMapEmbed
            lat={activePin.lat}
            lng={activePin.lng}
            zoom={activePin.approximate ? 13 : 16}
            title={activePin.card!.title}
            streetLabel={l.streetView}
            satelliteLabel={l.satelliteView}
            className="h-[420px] md:h-[520px]"
          />
        </>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pins.map((pin) => {
          const card = pin.card!
          const googleViewUrl = `https://www.google.com/maps/search/?api=1&query=${pin.lat},${pin.lng}`
          const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${pin.lat},${pin.lng}`

          return (
            <div
              key={pin.code}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-soft"
            >
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${pin.image}')` }}
                role="img"
                aria-label={card.title}
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <h3 className="font-serif text-lg font-bold text-text">{card.title}</h3>
                  <p className="mt-0.5 font-sans text-xs font-bold uppercase tracking-wide text-primary/80">
                    {card.subtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  {pin.approximate && (
                    <span className="w-fit rounded bg-bg-elevated-2 px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wide text-text-faint">
                      {l.approximateLabel}
                    </span>
                  )}
                  <span className="font-sans text-xs text-text-muted">
                    {l.coordinatesLabel}: {pin.lat.toFixed(4)}° N, {pin.lng.toFixed(4)}° E
                  </span>
                </div>

                <div className="mt-auto flex flex-col gap-2 border-t border-border pt-3">
                  {card.detailPath && (
                    <Link
                      to={card.detailPath}
                      className="w-full rounded-lg bg-primary py-2 text-center font-sans text-xs font-semibold uppercase tracking-wide text-on-primary transition-transform hover:scale-[1.02]"
                    >
                      {t.common.viewDetails}
                    </Link>
                  )}
                  <div className="flex gap-2">
                    <a
                      href={googleViewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-bg-elevated-2 py-2 font-sans text-[11px] font-semibold text-text transition-colors hover:bg-bg-elevated-3"
                    >
                      <span className="material-symbols-outlined text-[14px]">map</span>
                      {l.viewOnMap}
                    </a>
                    <a
                      href={googleDirectionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-bg-elevated-2 py-2 font-sans text-[11px] font-semibold text-text transition-colors hover:bg-bg-elevated-3"
                    >
                      <span className="material-symbols-outlined text-[14px]">directions</span>
                      {l.getDirections}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
