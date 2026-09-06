import { en } from './locales/en'
import { my } from './locales/my'
import { th } from './locales/th'
import type { Dictionary, Locale } from './types'

export const dictionaries: Record<Locale, Dictionary> = { en, my, th }

export const locales: { id: Locale; label: string; nativeLabel: string; flag: string }[] = [
  { id: 'en', label: 'English', nativeLabel: 'EN', flag: '🇬🇧' },
  { id: 'my', label: 'Myanmar', nativeLabel: 'မြန်မာ', flag: '🇲🇲' },
  { id: 'th', label: 'Thai', nativeLabel: 'ไทย', flag: '🇹🇭' },
]

export type { Dictionary, Locale }
