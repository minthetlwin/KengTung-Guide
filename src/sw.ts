/// <reference lib="webworker" />
// Service worker for the installable (offline) build — e.g. the app installed
// on a smart LED board. It's only registered when the visitor presses the
// footer's download button (src/hooks/useOfflineDownload.ts), never on a
// normal visit. On install it downloads every built asset: JS/CSS,
// fonts, all full-resolution photos, the 360° panoramas and the narration
// audio (see `globPatterns` in vite.config.ts), so after that one download the
// whole site runs with no internet connection and no image loading delay.
import { clientsClaim } from 'workbox-core'
import {
  addPlugins,
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  matchPrecache,
  precacheAndRoute,
} from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { createPartialResponse } from 'workbox-range-requests'
import * as images from './data/images'

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: Parameters<typeof precacheAndRoute>[0]
}

self.skipWaiting()
clientsClaim()

// <audio> requests narration with Range headers (for seeking); the precache
// stores whole files, so slice the cached response to the requested range.
// Registered before precacheAndRoute so it takes priority for /audio/.
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.startsWith('/audio/'),
  async ({ request }) => {
    const cached = await matchPrecache(request.url)
    if (!cached) return fetch(request)
    return request.headers.has('range') ? createPartialResponse(request, cached) : cached
  },
)

const manifest = self.__WB_MANIFEST

// Report each downloaded file to the page so the download button can show a
// progress bar. On the first install the page isn't controlled yet, hence
// includeUncontrolled.
let cachedCount = 0
addPlugins([
  {
    cacheDidUpdate: async () => {
      cachedCount += 1
      const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      windows.forEach((w) => w.postMessage({ type: 'PRECACHE_PROGRESS', done: cachedCount, total: manifest.length }))
    },
  },
])

precacheAndRoute(manifest)
cleanupOutdatedCaches()

// Client-side routes (/pagodas, /wat-zom-kham, …) all resolve to the app shell.
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')))

// The few photos still hosted on Wikimedia Commons (src/data/images.ts).
// Downloaded up front on install, but kept out of the atomic precache so a
// Wikimedia hiccup can't fail the whole offline install.
const REMOTE_IMAGE_CACHE = 'remote-images'
const remoteImageUrls = Object.values(images)
  .flatMap((v) => (typeof v === 'string' ? [v] : Object.values(v)))
  .filter((url): url is string => typeof url === 'string' && url.startsWith('https://'))

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(REMOTE_IMAGE_CACHE).then((cache) =>
      Promise.allSettled(
        remoteImageUrls.map(async (url) => {
          if (!(await cache.match(url))) await cache.add(new Request(url, { mode: 'cors' }))
        }),
      ),
    ),
  )
})

registerRoute(
  ({ url }) => url.hostname === 'thumb.wikimedia.org' || url.hostname === 'upload.wikimedia.org',
  new CacheFirst({
    cacheName: REMOTE_IMAGE_CACHE,
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  }),
)

// Map tiles can't all be downloaded ahead of time (OpenStreetMap forbids bulk
// downloading), but any tile viewed once stays available offline.
registerRoute(
  ({ url }) =>
    url.hostname.endsWith('tile.openstreetmap.org') || url.hostname === 'server.arcgisonline.com',
  new CacheFirst({
    cacheName: 'map-tiles',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 3000, maxAgeSeconds: 60 * 60 * 24 * 90 }),
    ],
  }),
)
