import { useSyncExternalStore } from 'react'
import { registerSW } from 'virtual:pwa-register'

// The offline download (service worker in src/sw.ts) only starts when the
// visitor presses the footer's download button — nothing is fetched in the
// background on a normal visit. State lives at module level so the footer
// button and the floating status pill (OfflineStatus) stay in sync.

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
}

export type OfflineDownloadStatus = 'unsupported' | 'idle' | 'downloading' | 'ready'

interface OfflineDownloadState {
  status: OfflineDownloadStatus
  progress: number
  // True for a few seconds right after a download finishes, for the status pill.
  justFinished: boolean
}

const supported = typeof navigator !== 'undefined' && 'serviceWorker' in navigator

let state: OfflineDownloadState = { status: supported ? 'idle' : 'unsupported', progress: 0, justFinished: false }
const listeners = new Set<() => void>()

function setState(next: Partial<OfflineDownloadState>) {
  state = { ...state, ...next }
  listeners.forEach((l) => l())
}

// Chrome/Edge fire this once, possibly before the footer mounts, so capture it
// at import time and replay it when the button is pressed.
let installPrompt: BeforeInstallPromptEvent | null = null

if (supported) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    installPrompt = e as BeforeInstallPromptEvent
  })

  // Visitors who downloaded before keep their service worker (and its updates).
  navigator.serviceWorker.getRegistration().then((reg) => {
    if (reg?.active) setState({ status: 'ready', progress: 1 })
  })

  navigator.serviceWorker.addEventListener('message', (e: MessageEvent) => {
    if (e.data?.type !== 'PRECACHE_PROGRESS' || state.status !== 'downloading') return
    setState({ progress: Math.min(1, e.data.done / e.data.total) })
  })
}

export function startOfflineDownload() {
  // prompt() must run inside the click, before anything async.
  installPrompt?.prompt()
  installPrompt = null

  if (!supported || state.status !== 'idle') return
  setState({ status: 'downloading', progress: 0 })
  registerSW({
    immediate: true,
    onOfflineReady() {
      setState({ status: 'ready', progress: 1, justFinished: true })
      window.setTimeout(() => setState({ justFinished: false }), 6000)
    },
    onRegisterError() {
      setState({ status: 'idle', progress: 0 })
    },
  })
}

export function useOfflineDownload() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => state,
  )
}

export function isIosNotInstalled() {
  const ios =
    /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  return ios && !standalone
}
