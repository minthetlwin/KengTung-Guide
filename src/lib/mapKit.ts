import L from 'leaflet'

export const STREET_TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
export const STREET_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
export const SATELLITE_TILE_URL =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
export const SATELLITE_ATTRIBUTION = 'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics'

// Free tile sources (Esri World Imagery + OpenStreetMap) — no API key or billing.
export function createBaseLayers() {
  const street = L.tileLayer(STREET_TILE_URL, { attribution: STREET_ATTRIBUTION, maxZoom: 19 })
  const satellite = L.tileLayer(SATELLITE_TILE_URL, { attribution: SATELLITE_ATTRIBUTION, maxZoom: 19 })
  const satelliteLabels = L.tileLayer(STREET_TILE_URL, {
    maxZoom: 19,
    opacity: 0.9,
    className: 'mmm-satellite-labels',
  })
  return { street, satellite, satelliteLabels }
}

// Shared map options tuned for a smoother, more Google-Maps-like feel:
// finer zoom increments, and the built-in zoom control disabled here so
// `enhanceMapInteraction` can re-add it in the bottom-right, styled to match
// the site rather than Leaflet's default look.
export const MAP_POLISH_OPTIONS: L.MapOptions = {
  zoomControl: false,
  scrollWheelZoom: false,
  zoomSnap: 0.5,
  zoomDelta: 0.5,
  wheelPxPerZoomLevel: 80,
}

// Adds a bottom-right zoom control (styled via CSS in index.css) and
// cooperative scroll-zoom: a plain page-scroll over the map does nothing but
// briefly show a hint, while Ctrl/Cmd + scroll zooms the map — the same
// pattern Google Maps embeds use so the map never traps the page scroll.
export function enhanceMapInteraction(map: L.Map, scrollHintText: string) {
  L.control.zoom({ position: 'bottomright' }).addTo(map)

  const container = map.getContainer()

  const hint = document.createElement('div')
  hint.className = 'map-scroll-hint'
  hint.textContent = scrollHintText
  container.appendChild(hint)

  let hideTimer: number | undefined

  function showHint() {
    hint.classList.add('is-visible')
    window.clearTimeout(hideTimer)
    hideTimer = window.setTimeout(() => hint.classList.remove('is-visible'), 1100)
  }

  function onWheel(e: WheelEvent) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      const delta = e.deltaY < 0 ? 1 : -1
      map.setZoomAround(map.mouseEventToContainerPoint(e), map.getZoom() + delta * 0.5)
    } else {
      showHint()
    }
  }

  container.addEventListener('wheel', onWheel, { passive: false })

  return {
    setHintText(text: string) {
      hint.textContent = text
    },
    destroy() {
      window.clearTimeout(hideTimer)
      container.removeEventListener('wheel', onWheel)
      hint.remove()
    },
  }
}
