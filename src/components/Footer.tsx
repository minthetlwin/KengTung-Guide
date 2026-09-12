import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { locales } from '../i18n'

export function Footer() {
  const { t, locale, setLocale } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-border bg-bg-elevated">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-gutter py-12 md:grid-cols-4 md:px-gutter-lg">
        <div className="flex flex-col gap-3 md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/keng_tung_pagoda_guide_emblem.png"
              alt="Keng Tung Pagoda Guide emblem"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="font-serif text-base font-semibold text-text">{t.header.brand}</span>
          </Link>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-text-muted">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
            {t.footer.exploreHeading}
          </span>
          <Link to="/" className="font-sans text-sm text-text-muted hover:text-primary">
            {t.header.nav.home}
          </Link>
          <Link to="/pagodas" className="font-sans text-sm text-text-muted hover:text-primary">
            {t.header.nav.pagodas}
          </Link>
          <Link to="/other-places" className="font-sans text-sm text-text-muted hover:text-primary">
            {t.header.nav.otherPlaces}
          </Link>
          <Link to="/festival-calendar" className="font-sans text-sm text-text-muted hover:text-primary">
            {t.header.nav.festivals}
          </Link>
          <Link to="/location-map" className="font-sans text-sm text-text-muted hover:text-primary">
            {t.header.nav.map}
          </Link>
          <Link to="/about" className="font-sans text-sm text-text-muted hover:text-primary">
            {t.header.nav.about}
          </Link>
          <Link to="/contact" className="font-sans text-sm text-text-muted hover:text-primary">
            {t.header.nav.contact}
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-text-faint">
            {t.footer.languageHeading}
          </span>
          <div className="flex flex-col gap-2">
            {locales.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLocale(l.id)}
                className={`flex items-center gap-2 text-left font-sans text-sm transition-colors ${
                  l.id === locale ? 'font-semibold text-primary' : 'text-text-muted hover:text-text'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {l.id === locale ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-gutter py-5 md:px-gutter-lg">
        <p className="mx-auto max-w-[1440px] font-sans text-xs text-text-faint">
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
