import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)

// Keeps the static #app-loader (see index.html) on screen until the icon
// font and other web fonts have actually loaded, a frame has painted, and a
// short minimum has elapsed — long enough to avoid a flash on fast
// connections, capped so a slow/broken network never leaves it stuck.
const MIN_DISPLAY_MS = 300
const MAX_WAIT_MS = 4000
const shownAt = performance.now()

function hideAppLoader() {
  const loader = document.getElementById('app-loader')
  if (!loader) return
  loader.classList.add('app-loader-hidden')
  window.setTimeout(() => loader.remove(), 400)
}

const fontsReady = 'fonts' in document ? document.fonts.ready : Promise.resolve()
const nextFrame = new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
const ready = Promise.all([fontsReady, nextFrame])
const timeout = new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT_MS))

Promise.race([ready, timeout]).then(() => {
  const elapsed = performance.now() - shownAt
  window.setTimeout(hideAppLoader, Math.max(0, MIN_DISPLAY_MS - elapsed))
})
