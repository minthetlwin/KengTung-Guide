# Keng Tung Pagoda Guide

A living archive of the sacred pagodas, monasteries and pilgrimage routes of Kyaing Tong (Keng Tung), Eastern Shan State — built with React, TypeScript, Tailwind CSS and Vite.

## Features

- **Light / dark theme** — light by default, toggleable, persisted to `localStorage`, driven entirely by CSS custom properties (`src/index.css`) so every component stays theme-aware without per-component branching.
- **Trilingual UI** — English, Myanmar (မြန်မာ) and Thai (ไทย), switchable from the header or footer and persisted to `localStorage`. Translations live in `src/i18n/locales/*.ts` behind a shared `Dictionary` type, so a missing key in any locale fails the TypeScript build.
- **Interactive hero slideshow** with autoplay, segmented progress indicators, and manual navigation.
- **Live search & filtering** across the pagoda directory.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run lint       # eslint
```

## Project structure

```
src/
  components/    UI components (Header, HeroSlideshow, DirectoryGrid, ...)
  context/       Theme and language React contexts + hooks
  data/          Sanctuary imagery (Wikimedia Commons, CC-licensed)
  i18n/          Locale dictionaries and shared types
  App.tsx        Page composition
```

## Attribution

Photography sourced from [Wikimedia Commons](https://commons.wikimedia.org) under Creative Commons licenses; see individual file pages for attribution.
