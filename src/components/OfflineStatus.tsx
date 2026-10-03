import { useLanguage } from '../context/language-context'
import { useOfflineDownload } from '../hooks/useOfflineDownload'

// Floating pill that follows the visitor across pages while the offline
// download (started from the footer button) runs, and confirms when it's done.
export function OfflineStatus() {
  const { t } = useLanguage()
  const { status, progress, justFinished } = useOfflineDownload()

  if (status !== 'downloading' && !justFinished) return null

  return (
    <div
      role="status"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-bg-elevated px-5 py-3 text-sm text-text shadow-lg"
    >
      {status === 'downloading' ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      ) : (
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      )}
      {status === 'downloading' ? `${t.offline.downloading} ${Math.round(progress * 100)}%` : t.offline.ready}
    </div>
  )
}
