import { useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { useLanguage } from '../context/language-context'

// Registers the service worker (src/sw.ts) and tells whoever sets up the smart
// board when the one-time offline download is running and when it's done, so
// they know when it's safe to disconnect from the internet.
export function OfflineStatus() {
  const { t } = useLanguage()
  const [downloading, setDownloading] = useState(false)
  const {
    offlineReady: [offlineReady, setOfflineReady],
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      if (registration?.installing && !navigator.serviceWorker.controller) setDownloading(true)
    },
    onOfflineReady() {
      setDownloading(false)
    },
  })

  useEffect(() => {
    if (!offlineReady) return
    const id = window.setTimeout(() => setOfflineReady(false), 6000)
    return () => window.clearTimeout(id)
  }, [offlineReady, setOfflineReady])

  if (!downloading && !offlineReady) return null

  return (
    <div
      role="status"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-bg-elevated px-5 py-3 text-sm text-text shadow-lg"
    >
      {downloading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      ) : (
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      )}
      {downloading ? t.offline.downloading : t.offline.ready}
    </div>
  )
}
