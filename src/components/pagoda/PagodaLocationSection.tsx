import type { PagodaDetailDictionary } from '../../i18n/types'
import { GoogleMapEmbed } from '../GoogleMapEmbed'

interface PagodaLocationSectionProps {
  coordinates: { lat: number; lng: number }
  zoom: number
  location: PagodaDetailDictionary['location']
}

export function PagodaLocationSection({ coordinates: { lat, lng }, zoom, location: l }: PagodaLocationSectionProps) {
  const googleViewUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

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
        <GoogleMapEmbed
          lat={lat}
          lng={lng}
          zoom={zoom}
          title={l.title}
          streetLabel={l.streetView}
          satelliteLabel={l.satelliteView}
          className="h-96 lg:col-span-7 lg:h-[440px]"
        />

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
                {l.approximateLabel && (
                  <span className="mt-1 inline-block w-fit rounded bg-bg-elevated-2 px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wide text-text-faint">
                    {l.approximateLabel}
                  </span>
                )}
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
