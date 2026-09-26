import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export interface LeafletMapPin {
  code: string
  lat: number
  lng: number
  image: string
  title: string
  subtitle: string
  approximate?: boolean
  detailPath?: string
}

interface PagodaLeafletMapProps {
  pins: LeafletMapPin[]
  activeCode?: string
  streetLabel: string
  satelliteLabel: string
  viewDetailsLabel: string
  approximateLabel: string
  onSelect?: (code: string) => void
  onViewDetails: (path: string) => void
  className?: string
}

const STREET_TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const STREET_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const SATELLITE_TILES =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
const SATELLITE_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics'

// Zoom level at and above which pins earn their name label. Below it, several
// pagodas cluster tightly around the town center and stacked labels overlap
// into an unreadable pile — so, same as Google/Apple Maps, labels only
// appear once the user has zoomed in enough for pins to have breathing room.
const LABEL_MIN_ZOOM = 13

// Circular photo pin (avatar + pointer tail), with the name label above it
// shown only once `showLabel` is true, built as one piece of marker HTML so
// no extra Leaflet tooltip CSS overrides are needed — matches the
// card-photo language used elsewhere in the site (SanctuaryCard, gallery
// thumbnails) instead of a stock map pin.
function buildPinIcon(pin: LeafletMapPin, active: boolean, showLabel: boolean) {
  const ring = active ? '#c9a336' : '#ffffff'
  const scale = active ? 1.12 : 1
  const label = showLabel
    ? `<span style="position:absolute;top:0;left:50%;transform:translateX(-50%);max-width:112px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:2px 8px;border-radius:999px;background:rgba(255,255,255,0.97);box-shadow:0 1px 4px rgba(0,0,0,.28);font:700 10px/1.5 sans-serif;color:#2a2118;">
        ${pin.title}
      </span>`
    : ''
  const circleTop = showLabel ? 22 : 0
  const html = `
    <div style="position:relative;width:120px;height:${circleTop + 52}px;transform:scale(${scale});transform-origin:50% 100%;transition:transform .15s ease-out;">
      ${label}
      <div style="position:absolute;top:${circleTop}px;left:50%;transform:translateX(-50%);width:40px;height:40px;border-radius:9999px;overflow:hidden;border:3px solid ${ring};box-shadow:0 2px 6px rgba(0,0,0,.35);background-size:cover;background-position:center;background-image:url('${pin.image}');"></div>
      <div style="position:absolute;top:${circleTop + 36}px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid ${ring};filter:drop-shadow(0 2px 2px rgba(0,0,0,.25));"></div>
    </div>
  `
  const height = circleTop + 52
  return L.divIcon({
    html,
    className: '',
    iconSize: [120, height],
    iconAnchor: [60, height - 6],
    popupAnchor: [0, -(height - 12)],
  })
}

export function PagodaLeafletMap({
  pins,
  activeCode,
  streetLabel,
  satelliteLabel,
  viewDetailsLabel,
  approximateLabel,
  onSelect,
  onViewDetails,
  className = '',
}: PagodaLeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<Map<string, L.Marker>>(new Map())
  const layersRef = useRef<{ street: L.TileLayer; satellite: L.TileLayer } | null>(null)
  const [view, setView] = useState<'street' | 'satellite'>('satellite')
  const [showLabels, setShowLabels] = useState(false)

  // Mount once: build the map, both tile layers, and every marker.
  useEffect(() => {
    const el = containerRef.current
    if (!el || mapRef.current) return

    // Wheel/trackpad zoom tuned for a continuous feel: fractional zoom levels
    // instead of whole-level jumps, more wheel travel per level so a mouse
    // notch glides rather than lurches, and a short debounce so trackpad
    // swipes track the fingers closely. The +/- buttons keep whole steps.
    const map = L.map(el, {
      zoomControl: false,
      scrollWheelZoom: true,
      zoomSnap: 0.25,
      wheelPxPerZoomLevel: 120,
      wheelDebounceTime: 20,
    })
    L.control.zoom({ position: 'bottomright' }).addTo(map)
    mapRef.current = map

    // A wider off-screen tile buffer so zooming out or panning reveals
    // already-loaded tiles instead of flashing blank grey edges.
    const street = L.tileLayer(STREET_TILES, { attribution: STREET_ATTRIBUTION, maxZoom: 19, keepBuffer: 4 })
    const satellite = L.tileLayer(SATELLITE_TILES, { attribution: SATELLITE_ATTRIBUTION, maxZoom: 19, keepBuffer: 4 })
    layersRef.current = { street, satellite }
    satellite.addTo(map)

    const bounds = L.latLngBounds(pins.map((pin) => [pin.lat, pin.lng]))
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 13 })

    const syncLabelsToZoom = () => setShowLabels(map.getZoom() >= LABEL_MIN_ZOOM)
    syncLabelsToZoom()
    map.on('zoomend', syncLabelsToZoom)

    const markers = markersRef.current
    for (const pin of pins) {
      const marker = L.marker([pin.lat, pin.lng], {
        icon: buildPinIcon(pin, pin.code === activeCode, map.getZoom() >= LABEL_MIN_ZOOM),
      }).addTo(map)

      const popup = document.createElement('div')
      popup.className = 'flex w-56 flex-col gap-2 font-sans'

      const thumb = document.createElement('div')
      thumb.className = 'h-24 w-full rounded-lg bg-cover bg-center'
      thumb.style.backgroundImage = `url('${pin.image}')`
      popup.appendChild(thumb)

      const title = document.createElement('p')
      title.className = 'text-sm font-bold leading-snug text-[#221a10]'
      title.textContent = pin.title
      popup.appendChild(title)

      const subtitle = document.createElement('p')
      subtitle.className = 'text-[11px] font-semibold uppercase tracking-wide text-[#a3823a]'
      subtitle.textContent = pin.subtitle
      popup.appendChild(subtitle)

      if (pin.approximate) {
        const badge = document.createElement('span')
        badge.className = 'w-fit rounded bg-black/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#5b5348]'
        badge.textContent = approximateLabel
        popup.appendChild(badge)
      }

      if (pin.detailPath) {
        const link = document.createElement('button')
        link.type = 'button'
        link.className =
          'mt-1 w-full rounded-lg bg-[#c9a336] py-2 text-center text-xs font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]'
        link.textContent = viewDetailsLabel
        link.addEventListener('click', () => onViewDetails(pin.detailPath!))
        popup.appendChild(link)
      }

      // The card wrapper below clips overflow for its rounded corners, so a
      // popup opening near the top edge of the map needs Leaflet to pan the
      // map enough that the whole popup — including the tall custom marker
      // and photo above the anchor point — lands inside the visible bounds,
      // rather than getting silently clipped by that ancestor.
      marker.bindPopup(popup, { autoPanPadding: [24, 24], autoPanPaddingTopLeft: [24, 140] })
      marker.on('click', () => onSelect?.(pin.code))
      markers.set(pin.code, marker)
    }

    return () => {
      map.off('zoomend', syncLabelsToZoom)
      map.remove()
      mapRef.current = null
      markers.clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Re-skin markers (ring color/scale, label visibility) whenever the active
  // pin or zoom-driven label threshold changes, without rebuilding the map.
  useEffect(() => {
    for (const pin of pins) {
      const marker = markersRef.current.get(pin.code)
      if (marker) marker.setIcon(buildPinIcon(pin, pin.code === activeCode, showLabels))
    }
  }, [activeCode, pins, showLabels])

  // Fly to and pop open whichever pin becomes active from outside (e.g. the
  // filter chips above the map). The popup only opens once the fly animation
  // has actually settled — Leaflet's autoPan (which shifts the map so a tall
  // popup isn't clipped by this card's rounded corners) measures the map's
  // current view, and calling it mid-flight has it correct for a view that
  // the still-running animation then immediately overwrites.
  useEffect(() => {
    const map = mapRef.current
    const marker = activeCode ? markersRef.current.get(activeCode) : undefined
    if (!map || !marker) return
    map.once('moveend', () => marker.openPopup())
    map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 14), { duration: 0.6 })
  }, [activeCode])

  return (
    <div className={`relative isolate overflow-hidden rounded-2xl border border-border shadow-soft ${className}`}>
      <div ref={containerRef} className="h-full w-full" />

      <div className="absolute right-3 top-3 z-[1000] flex overflow-hidden rounded-full border border-border bg-bg/95 shadow-elevated backdrop-blur">
        <button
          type="button"
          aria-pressed={view === 'street'}
          onClick={() => {
            const layers = layersRef.current
            const map = mapRef.current
            if (!layers || !map) return
            map.removeLayer(layers.satellite)
            layers.street.addTo(map)
            setView('street')
          }}
          className={`px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wide transition-colors ${
            view === 'street' ? 'bg-primary text-on-primary' : 'text-text hover:bg-bg-elevated'
          }`}
        >
          {streetLabel}
        </button>
        <button
          type="button"
          aria-pressed={view === 'satellite'}
          onClick={() => {
            const layers = layersRef.current
            const map = mapRef.current
            if (!layers || !map) return
            map.removeLayer(layers.street)
            layers.satellite.addTo(map)
            setView('satellite')
          }}
          className={`px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wide transition-colors ${
            view === 'satellite' ? 'bg-primary text-on-primary' : 'text-text hover:bg-bg-elevated'
          }`}
        >
          {satelliteLabel}
        </button>
      </div>
    </div>
  )
}
