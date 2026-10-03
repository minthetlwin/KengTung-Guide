import { Link } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { locales } from '../i18n'
import { isIosNotInstalled, startOfflineDownload, useOfflineDownload } from '../hooks/useOfflineDownload'

export function Footer() {
  const { t, locale, setLocale } = useLanguage()
  const year = new Date().getFullYear()
  const offline = useOfflineDownload()

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
          <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:gap-10">
            {t.footer.authors.map((a) => (
              <div key={a.email} className="flex flex-col gap-0.5 font-sans text-sm">
                <span className="font-semibold text-text">{a.name}</span>
                <span className="text-text-muted">
                  {t.footer.emailLabel}:{' '}
                  <a href={`mailto:${a.email}`} className="hover:text-primary">
                    {a.email}
                  </a>
                </span>
                <span className="text-text-muted">
                  {t.footer.phoneLabel}:{' '}
                  <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                    {a.phone}
                  </a>
                </span>
              </div>
            ))}
          </div>
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

      {offline.status !== 'unsupported' && (
        <div className="border-t border-border px-gutter py-8 md:px-gutter-lg">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[28px] text-primary">install_mobile</span>
              <div className="flex flex-col gap-1">
                <span className="font-serif text-base font-semibold text-text">{t.offline.title}</span>
                <p className="max-w-2xl font-sans text-sm leading-relaxed text-text-muted">{t.offline.description}</p>
                {isIosNotInstalled() && <p className="font-sans text-xs text-text-faint">{t.offline.iosHint}</p>}
              </div>
            </div>

            {offline.status === 'idle' && (
              <button
                type="button"
                onClick={startOfflineDownload}
                className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-on-primary shadow-soft transition-opacity hover:opacity-90"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                {t.offline.cta}
              </button>
            )}
            {offline.status === 'downloading' && (
              <div
                role="progressbar"
                aria-valuenow={Math.round(offline.progress * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
                className="flex w-full shrink-0 flex-col gap-2 md:w-72"
              >
                <div className="flex items-center justify-between font-sans text-xs text-text-muted">
                  <span>{t.offline.downloading}</span>
                  <span className="font-semibold text-text">{Math.round(offline.progress * 100)}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-bg-elevated-3">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-300"
                    style={{ width: `${offline.progress * 100}%` }}
                  />
                </div>
              </div>
            )}
            {offline.status === 'ready' && (
              <span className="flex shrink-0 items-center gap-2 font-sans text-sm font-semibold text-primary">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                {t.offline.downloaded}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="border-t border-border px-gutter py-5 md:px-gutter-lg">
        <p className="mx-auto max-w-[1440px] font-sans text-xs text-text-faint">
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
