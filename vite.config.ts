import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

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
  plugins: [
    react(),
    siteUrl(),
    // Installable, fully offline app (e.g. on a smart LED board): src/sw.ts
    // precaches everything matched below, full-resolution photos and audio
    // included, on first install.
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      injectRegister: false,
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,woff2,png,jpg,jpeg,JPG,svg,mp3}'],
        globIgnores: ['og-image.jpg'],
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
      },
      manifest: {
        name: 'မဟာမြတ်မုနိဘုရားနှင့် သမိုင်းဝင်ဘုရားများ',
        short_name: 'Keng Tung Guide',
        description: 'Keng Tung Pagoda Guide',
        lang: 'my',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        display_override: ['fullscreen', 'standalone'],
        orientation: 'any',
        theme_color: '#A8781E',
        background_color: '#fbf9f5',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
})
