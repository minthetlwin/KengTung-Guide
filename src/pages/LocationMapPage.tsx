import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useLanguage } from '../context/language-context'
import { pagodaLocations } from '../data/pagodaLocations'
import { MAP_POLISH_OPTIONS, createBaseLayers, enhanceMapInteraction } from '../lib/mapKit'
import { usePageMeta } from '../hooks/usePageMeta'

type ViewMode = 'satellite' | 'street'

function makePinIcon(image: string) {
  return L.divIcon({
    className: '',
    html: `
      <div class="pagoda-pin relative flex flex-col items-center">
        <div class="h-12 w-12 -rotate-45 overflow-hidden rounded-[50%_50%_50%_0] border-[3px] border-white bg-primary shadow-floating">
          <img src="${image}" class="h-full w-full rotate-45 scale-[1.7] object-cover" />
        </div>
        <div class="-mt-1 h-2 w-2 rounded-full bg-black/25 blur-[2px]"></div>
      </div>
    `,
    iconSize: [48, 56],
    iconAnchor: [24, 50],
  })
}

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

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const layersRef = useRef<{ street: L.TileLayer; satellite: L.TileLayer; satelliteLabels: L.TileLayer } | null>(
    null,
  )
  const interactionRef = useRef<ReturnType<typeof enhanceMapInteraction> | null>(null)
  const [view, setView] = useState<ViewMode>('satellite')

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return

    const bounds = L.latLngBounds(pagodaLocations.map((p): [number, number] => [p.lat, p.lng]))
    const map = L.map(mapContainerRef.current, MAP_POLISH_OPTIONS)
    map.fitBounds(bounds, { padding: [70, 70] })
    interactionRef.current = enhanceMapInteraction(map, t.common.scrollToZoomHint)

    const { street, satellite, satelliteLabels } = createBaseLayers()
    satellite.addTo(map)
    satelliteLabels.addTo(map)
    layersRef.current = { street, satellite, satelliteLabels }

    for (const loc of pagodaLocations) {
      L.marker([loc.lat, loc.lng], { icon: makePinIcon(loc.image), riseOnHover: true }).addTo(map)
    }

    mapRef.current = map
    return () => {
      interactionRef.current?.destroy()
      interactionRef.current = null
      map.remove()
      mapRef.current = null
      layersRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    interactionRef.current?.setHintText(t.common.scrollToZoomHint)
  }, [t.common.scrollToZoomHint])

  useEffect(() => {
    const map = mapRef.current
    const layers = layersRef.current
    if (!map || !layers) return
    if (view === 'satellite') {
      map.removeLayer(layers.street)
      layers.satellite.addTo(map)
      layers.satelliteLabels.addTo(map)
    } else {
      map.removeLayer(layers.satellite)
      map.removeLayer(layers.satelliteLabels)
      layers.street.addTo(map)
    }
  }, [view])

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

      <div className="relative isolate h-[420px] overflow-hidden rounded-2xl border border-border shadow-soft md:h-[520px]">
        <div ref={mapContainerRef} className="h-full w-full" />

        <div className="absolute right-3 top-3 z-[1000] flex overflow-hidden rounded-full border border-border bg-bg/95 shadow-elevated backdrop-blur">
          <button
            type="button"
            onClick={() => setView('street')}
            aria-pressed={view === 'street'}
            className={`px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wide transition-colors ${
              view === 'street' ? 'bg-primary text-on-primary' : 'text-text hover:bg-bg-elevated'
            }`}
          >
            {l.streetView}
          </button>
          <button
            type="button"
            onClick={() => setView('satellite')}
            aria-pressed={view === 'satellite'}
            className={`px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wide transition-colors ${
              view === 'satellite' ? 'bg-primary text-on-primary' : 'text-text hover:bg-bg-elevated'
            }`}
          >
            {l.satelliteView}
          </button>
        </div>
      </div>

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
