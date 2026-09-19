import { useEffect, useRef } from 'react'
import 'pannellum/build/pannellum.css'
import 'pannellum/build/pannellum.js'

declare global {
  interface Window {
    pannellum: {
      viewer: (
        container: HTMLElement,
        config: {
          type: 'equirectangular'
          panorama: string
          autoLoad?: boolean
          compass?: boolean
          showZoomCtrl?: boolean
          showFullscreenCtrl?: boolean
          hfov?: number
        },
      ) => { destroy: () => void; resize: () => void }
    }
  }
}

interface Panorama360ViewerProps {
  src: string
  title: string
  className?: string
}

export function Panorama360Viewer({ src, title, className }: Panorama360ViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const viewer = window.pannellum.viewer(el, {
      type: 'equirectangular',
      panorama: src,
      autoLoad: true,
      compass: false,
      showZoomCtrl: true,
      showFullscreenCtrl: true,
      hfov: 110,
    })

    // Pannellum only recalculates its canvas resolution on `window` resize —
    // if the container itself settles to a different size afterward (late
    // font/image loads shifting layout above it, a dev hot-reload patching
    // the DOM post-mount), the canvas raster goes stale and CSS stretches it
    // into a garbled mess. A ResizeObserver keeps it in sync either way.
    const resizeObserver = new ResizeObserver(() => viewer.resize())
    resizeObserver.observe(el)

    return () => {
      resizeObserver.disconnect()
      viewer.destroy()
    }
  }, [src])

  return <div ref={containerRef} className={className} role="img" aria-label={title} />
}
