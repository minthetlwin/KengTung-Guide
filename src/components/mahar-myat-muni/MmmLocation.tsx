import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useLanguage } from '../../context/language-context'
import { mmmCoordinates, mmmHeroImage } from '../../data/maharMyatMuni'
import { MAP_POLISH_OPTIONS, createBaseLayers, enhanceMapInteraction } from '../../lib/mapKit'

const { lat, lng } = mmmCoordinates
const googleViewUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

type ViewMode = 'satellite' | 'street'

const pinIcon = L.divIcon({
  className: '',
  html: `
    <div class="pagoda-pin relative flex flex-col items-center">
      <div class="h-14 w-14 -rotate-45 overflow-hidden rounded-[50%_50%_50%_0] border-[3px] border-white bg-primary shadow-floating">
        <img src="${mmmHeroImage}" class="h-full w-full rotate-45 scale-[1.7] object-cover" />
      </div>
      <div class="-mt-1 h-2.5 w-2.5 rounded-full bg-black/25 blur-[2px]"></div>
    </div>
  `,
  iconSize: [56, 66],
  iconAnchor: [28, 58],
})

export function MmmLocation() {
  const { t } = useLanguage()
  const l = t.maharMyatMuni.location

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const layersRef = useRef<{ street: L.TileLayer; satellite: L.TileLayer; satelliteLabels: L.TileLayer } | null>(
    null,
  )
  const interactionRef = useRef<ReturnType<typeof enhanceMapInteraction> | null>(null)
  const [view, setView] = useState<ViewMode>('satellite')

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return

    const map = L.map(mapContainerRef.current, {
      ...MAP_POLISH_OPTIONS,
      center: [lat, lng],
      zoom: 17,
    })
    interactionRef.current = enhanceMapInteraction(map, t.common.scrollToZoomHint)

    const { street, satellite, satelliteLabels } = createBaseLayers()
    satellite.addTo(map)
    satelliteLabels.addTo(map)
    layersRef.current = { street, satellite, satelliteLabels }

    L.marker([lat, lng], { icon: pinIcon, riseOnHover: true }).addTo(map)

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
    <section id="location" className="mx-auto w-full max-w-[1440px] scroll-mt-32 px-gutter md:px-gutter-lg">
      <div className="mb-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">location_on</span>
          {l.eyebrow}
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-text lg:text-3xl">{l.title}</h2>
        <p className="max-w-3xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{l.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative isolate h-96 overflow-hidden rounded-2xl border border-border shadow-soft lg:col-span-7 lg:h-[440px]">
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

        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">place</span>
              <div>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
                  {l.addressLabel}
                </span>
                <p className="mt-0.5 font-sans text-sm leading-relaxed text-text">{l.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">my_location</span>
              <div>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
                  {l.coordinatesLabel}
                </span>
                <p className="mt-0.5 font-sans text-sm font-medium text-text">
                  {lat.toFixed(6)}° N, {lng.toFixed(6)}° E
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">schedule</span>
              <div>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
                  {l.hoursLabel}
                </span>
                <p className="mt-0.5 font-sans text-sm font-medium text-text">{l.hours}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={googleViewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-3 font-sans text-sm font-semibold text-text shadow-soft transition-colors hover:bg-bg-elevated-2"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              {l.viewMapCta}
            </a>
            <a
              href={googleDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-sans text-sm font-semibold text-on-primary shadow-soft transition-transform hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              {l.directionsCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
