import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/language-context'
import { locales } from '../i18n'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = locales.find((l) => l.id === locale)!

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-10 items-center gap-1.5 rounded-full px-3 font-sans text-[13px] font-semibold text-text-muted transition-colors hover:bg-bg-elevated-2 hover:text-text"
      >
        <span className="material-symbols-outlined text-[18px]">translate</span>
        <span>{current.nativeLabel}</span>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-border bg-bg-elevated shadow-elevated animate-fade-in"
        >
          {locales.map((l) => (
            <button
              key={l.id}
              role="option"
              aria-selected={l.id === locale}
              type="button"
              onClick={() => {
                setLocale(l.id)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-sans text-sm transition-colors ${
                l.id === locale
                  ? 'bg-primary-soft text-on-primary-soft font-semibold'
                  : 'text-text-muted hover:bg-bg-elevated-2 hover:text-text'
              }`}
            >
              <span>{l.label}</span>
              <span className="text-xs opacity-70">{l.nativeLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
