import { useTheme } from '../context/theme-context'
import { useLanguage } from '../context/language-context'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.header.themeLight : t.header.themeDark}
      title={isDark ? t.header.themeLight : t.header.themeDark}
      aria-pressed={isDark}
      className="flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-bg-elevated-2 hover:text-text"
    >
      <span className="material-symbols-outlined text-[19px]">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
