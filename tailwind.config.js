/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-elevated': 'rgb(var(--color-bg-elevated) / <alpha-value>)',
        'bg-elevated-2': 'rgb(var(--color-bg-elevated-2) / <alpha-value>)',
        'bg-elevated-3': 'rgb(var(--color-bg-elevated-3) / <alpha-value>)',
        'bg-inset': 'rgb(var(--color-bg-inset) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-faint': 'rgb(var(--color-text-faint) / <alpha-value>)',

        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-strong': 'rgb(var(--color-primary-strong) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
        'primary-soft': 'rgb(var(--color-primary-soft) / <alpha-value>)',
        'on-primary-soft': 'rgb(var(--color-on-primary-soft) / <alpha-value>)',

        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'on-secondary': 'rgb(var(--color-on-secondary) / <alpha-value>)',
        'secondary-soft': 'rgb(var(--color-secondary-soft) / <alpha-value>)',
        'on-secondary-soft': 'rgb(var(--color-on-secondary-soft) / <alpha-value>)',

        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        'on-tertiary': 'rgb(var(--color-on-tertiary) / <alpha-value>)',
        'tertiary-soft': 'rgb(var(--color-tertiary-soft) / <alpha-value>)',
        'on-tertiary-soft': 'rgb(var(--color-on-tertiary-soft) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Poppins', '"Noto Sans Myanmar"', '"Noto Sans Thai"', 'system-ui', 'sans-serif'],
        sans: ['Poppins', '"Noto Sans Myanmar"', '"Noto Sans Thai"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['1.85rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        headline: ['1.375rem', { lineHeight: '1.35', fontWeight: '600' }],
        subhead: ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em', fontWeight: '700' }],
      },
      borderRadius: {
        sm: '0.5rem',
        DEFAULT: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -8px rgb(0 0 0 / 0.08)',
        elevated: '0 4px 12px rgb(0 0 0 / 0.06), 0 16px 40px -12px rgb(0 0 0 / 0.16)',
        floating: '0 8px 24px rgb(0 0 0 / 0.10), 0 24px 64px -16px rgb(0 0 0 / 0.28)',
      },
      spacing: {
        gutter: '1.25rem',
        'gutter-lg': '2.5rem',
      },
      animation: {
        kenburns: 'kenburns 9s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
