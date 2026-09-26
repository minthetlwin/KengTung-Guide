import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Link-preview scrapers (Facebook, Messenger, Viber, Telegram, X) only accept
// absolute URLs for og:image / og:url. Netlify exposes the site's primary
// address as `URL` at build time; `SITE_URL` overrides it (e.g. a custom
// domain). index.html references it as __SITE_URL__.
function siteUrl(): Plugin {
  const url = (process.env.SITE_URL || process.env.URL || '').replace(/\/$/, '')
  return {
    name: 'site-url',
    transformIndexHtml(html, ctx) {
      if (!url && !ctx.server) {
        console.warn('[site-url] SITE_URL / URL not set — share-preview URLs in index.html will be relative.')
      }
      return html.replaceAll('__SITE_URL__', url)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteUrl()],
})
