import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/language-context'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'

function focusGlobalSearch() {
  const el = document.getElementById('global-search-input') as HTMLInputElement | null
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  window.setTimeout(() => el.focus(), 400)
}

export function Header() {
  const { t } = useLanguage()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        focusGlobalSearch()
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [])

  const isNews = location.pathname.startsWith('/news')
  const isLocationMap = location.pathname.startsWith('/location-map')
  const isAbout = location.pathname.startsWith('/about')
  const isContact = location.pathname.startsWith('/contact')
  const isPagodas = location.pathname.startsWith('/pagodas')
  const isFestivals = location.pathname.startsWith('/festival-calendar')

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-bg/75 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'border-b border-border shadow-soft' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-6 px-gutter md:px-gutter-lg">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src="/keng_tung_pagoda_guide_emblem.png"
            alt="Keng Tung Pagoda Guide emblem"
            className="h-14 w-14 shrink-0 object-contain"
          />
          <span className="hidden truncate font-serif text-[17px] font-semibold tracking-tight text-text sm:inline-block">
            {t.header.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            to="/"
            aria-current={isHome ? 'page' : undefined}
            className="group relative py-1 font-sans text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            {t.header.nav.home}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="/pagodas"
            aria-current={isPagodas ? 'page' : undefined}
            className="group relative py-1 font-sans text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            {t.header.nav.pagodas}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="/news"
            aria-current={isNews ? 'page' : undefined}
            className="group relative py-1 font-sans text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            {t.header.nav.news}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="/festival-calendar"
            aria-current={isFestivals ? 'page' : undefined}
            className="group relative py-1 font-sans text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            {t.header.nav.festivals}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="/location-map"
            aria-current={isLocationMap ? 'page' : undefined}
            className="group relative py-1 font-sans text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            {t.header.nav.map}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="/about"
            aria-current={isAbout ? 'page' : undefined}
            className="group relative py-1 font-sans text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            {t.header.nav.about}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            to="/contact"
            aria-current={isContact ? 'page' : undefined}
            className="group relative py-1 font-sans text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            {t.header.nav.contact}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={focusGlobalSearch}
            aria-label={t.header.searchShort}
            title={t.header.searchShort}
            className="hidden h-10 items-center gap-1.5 rounded-full px-3 text-text-faint transition-colors hover:bg-bg-elevated-2 hover:text-text-muted sm:flex"
          >
            <span className="material-symbols-outlined text-[19px]">search</span>
            <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-sans text-[10px] text-text-faint xl:inline">
              ⌘K
            </kbd>
          </button>

          <a
            href="#audio-guide"
            aria-label={t.header.audioGuide}
            title={t.header.audioGuide}
            className="hidden h-10 w-10 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-bg-elevated-2 hover:text-text-muted sm:flex"
          >
            <span className="material-symbols-outlined text-[19px]">headphones</span>
          </a>

          <LanguageSwitcher />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-text transition-colors hover:bg-bg-elevated-2 lg:hidden"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-bg px-gutter py-4 lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-0.5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              aria-current={isHome ? 'page' : undefined}
              className="rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium text-text-muted hover:bg-bg-elevated-2 hover:text-text"
            >
              {t.header.nav.home}
            </Link>
            <Link
              to="/pagodas"
              onClick={() => setMobileOpen(false)}
              aria-current={isPagodas ? 'page' : undefined}
              className="rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium text-text-muted hover:bg-bg-elevated-2 hover:text-text"
            >
              {t.header.nav.pagodas}
            </Link>
            <Link
              to="/news"
              onClick={() => setMobileOpen(false)}
              aria-current={isNews ? 'page' : undefined}
              className="rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium text-text-muted hover:bg-bg-elevated-2 hover:text-text"
            >
              {t.header.nav.news}
            </Link>
            <Link
              to="/festival-calendar"
              onClick={() => setMobileOpen(false)}
              aria-current={isFestivals ? 'page' : undefined}
              className="rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium text-text-muted hover:bg-bg-elevated-2 hover:text-text"
            >
              {t.header.nav.festivals}
            </Link>
            <Link
              to="/location-map"
              onClick={() => setMobileOpen(false)}
              aria-current={isLocationMap ? 'page' : undefined}
              className="rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium text-text-muted hover:bg-bg-elevated-2 hover:text-text"
            >
              {t.header.nav.map}
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              aria-current={isAbout ? 'page' : undefined}
              className="rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium text-text-muted hover:bg-bg-elevated-2 hover:text-text"
            >
              {t.header.nav.about}
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              aria-current={isContact ? 'page' : undefined}
              className="rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium text-text-muted hover:bg-bg-elevated-2 hover:text-text"
            >
              {t.header.nav.contact}
            </Link>
          </nav>
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            <button
              type="button"
              onClick={() => {
                focusGlobalSearch()
                setMobileOpen(false)
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-bg-elevated-2 py-2.5 font-sans text-sm font-medium text-text transition-colors hover:bg-bg-elevated-3"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              {t.header.searchLabel}
            </button>
            <a
              href="#audio-guide"
              onClick={() => setMobileOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-bg-elevated-2 py-2.5 font-sans text-sm font-medium text-text transition-colors hover:bg-bg-elevated-3"
            >
              <span className="material-symbols-outlined text-[18px]">headphones</span>
              {t.header.audioGuide}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
