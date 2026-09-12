import { useState } from 'react'

type ViewMode = 'satellite' | 'street'

interface GoogleMapEmbedProps {
  lat: number
  lng: number
  zoom?: number
  title: string
  streetLabel: string
  satelliteLabel: string
  className?: string
}

// Google's free, key-less embed format (maps.google.com/maps?...&output=embed) —
// no billing or API key required. `t=k` switches the base layer to satellite
// hybrid; omitting it gives the default roadmap/street view. This is Google's
// own page in a cross-origin iframe, so it keeps its default red pin and full
// drag/scroll-zoom interactivity — a custom marker that tracks correctly
// during panning/zooming needs the paid Maps JavaScript API instead.
export function GoogleMapEmbed({
  lat,
  lng,
  zoom = 17,
  title,
  streetLabel,
  satelliteLabel,
  className = '',
}: GoogleMapEmbedProps) {
  const [view, setView] = useState<ViewMode>('satellite')
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed${view === 'satellite' ? '&t=k' : ''}`

  return (
    <div className={`relative isolate overflow-hidden rounded-2xl border border-border shadow-soft ${className}`}>
      <iframe
        key={view}
        title={title}
        src={src}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute right-3 top-3 z-[1000] flex overflow-hidden rounded-full border border-border bg-bg/95 shadow-elevated backdrop-blur">
        <button
          type="button"
          onClick={() => setView('street')}
          aria-pressed={view === 'street'}
          className={`px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-wide transition-colors ${
            view === 'street' ? 'bg-primary text-on-primary' : 'text-text hover:bg-bg-elevated'
          }`}
        >
          {streetLabel}
        </button>
        <button
          type="button"
          onClick={() => setView('satellite')}
          aria-pressed={view === 'satellite'}
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
