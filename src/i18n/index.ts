import { en } from './locales/en'
import { my } from './locales/my'
import { th } from './locales/th'
import type { Dictionary, Locale } from './types'

export const dictionaries: Record<Locale, Dictionary> = { en, my, th }

export const locales: { id: Locale; label: string; nativeLabel: string }[] = [
  { id: 'en', label: 'English', nativeLabel: 'EN' },
  { id: 'my', label: 'Myanmar', nativeLabel: 'မြန်မာ' },
  { id: 'th', label: 'Thai', nativeLabel: 'ไทย' },
]

export type { Dictionary, Locale }
