import { useEffect } from 'react'
import { useLanguage } from '../context/language-context'

interface PageMetaOptions {
  title: string
  description: string
  image?: string
  structuredData?: Record<string, unknown>
}

const STRUCTURED_DATA_ID = 'page-structured-data'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Sets the document title, description, Open Graph/Twitter tags, canonical
// link, and (optionally) a JSON-LD block for the current route. This only
// helps crawlers that execute JavaScript (Google does) — raw-HTML social
// unfurl bots (Facebook, Twitter, iMessage, etc.) never run this, so they
// still see the static tags in index.html regardless of route.
export function usePageMeta({ title, description, image, structuredData }: PageMetaOptions) {
  const { locale } = useLanguage()

  useEffect(() => {
    document.title = title
    document.documentElement.lang = locale

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', window.location.href)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    if (image) {
      const absoluteImage = new URL(image, window.location.origin).toString()
      upsertMeta('property', 'og:image', absoluteImage)
      upsertMeta('name', 'twitter:image', absoluteImage)
    }

    upsertCanonical(window.location.origin + window.location.pathname)

    const existingScript = document.getElementById(STRUCTURED_DATA_ID)
    if (structuredData) {
      const script =
        (existingScript as HTMLScriptElement | null) ??
        (() => {
          const el = document.createElement('script')
          el.type = 'application/ld+json'
          el.id = STRUCTURED_DATA_ID
          document.head.appendChild(el)
          return el
        })()
      script.textContent = JSON.stringify(structuredData)
    } else {
      existingScript?.remove()
    }
  }, [title, description, image, structuredData, locale])
}
