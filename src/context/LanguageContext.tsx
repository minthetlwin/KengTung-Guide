import { useEffect, useState, type ReactNode } from 'react'
import { dictionaries, locales, type Locale } from '../i18n'
import { LanguageContext } from './language-context'

const STORAGE_KEY = 'ktpg-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'my'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && locales.some((l) => l.id === stored)) return stored
  return 'my'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const setLocale = (next: Locale) => setLocaleState(next)

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}
