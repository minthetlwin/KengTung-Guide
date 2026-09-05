import { createContext, useContext } from 'react'
import type { Dictionary, Locale } from '../i18n'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
