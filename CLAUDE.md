# Keng Tung Pagoda Guide

React 19 + TypeScript + Tailwind CSS. Light theme by default with a dark toggle. Trilingual (English / Myanmar / Thai) via `src/i18n/`.

## How to work in this repo

Work like a small senior team shipping fast, not like a team padding a sprint.

- **Do exactly what was asked — nothing adjacent.** No drive-by refactors, no "while I'm here" cleanups, no speculative abstractions for cases that don't exist yet. A bug fix doesn't need a rewrite; a one-line copy change doesn't need a component split.
- **Don't add tests, docs, or tooling unless asked.** This project has no test suite by design — don't add one unprompted. Don't write changelogs, summary docs, or comments narrating what you just did.
- **Match verification effort to the change.** A copy or CSS tweak needs `npx tsc -b` and `npm run lint` at most — don't launch a browser or screenshot pipeline for it. A structural change (state, data flow, new component wiring, anything touching the hero/theme/i18n plumbing) warrants an actual render check — `npm run build` plus a real look, not just types passing. Don't run the full check-everything loop out of habit; pick the level the change actually needs.
- **Trust the toolchain.** If `tsc -b` and `eslint` pass, that's the signal — don't re-derive it by hand-reading every line, and don't re-verify something a prior change in the same session already confirmed working.
- **Decide, don't stall.** If the request and the existing code make the answer obvious, implement it — don't ask a clarifying question a competent engineer wouldn't need to ask.
- **Small, direct diffs.** Edit what's there over rewriting it. Prefer the boring, obvious implementation over a clever one.

## Project conventions

- Color, spacing, and type are theme tokens: `tailwind.config.js` maps names (`bg`, `bg-elevated`, `primary`, `on-primary`, …) to CSS vars defined in `src/index.css` — light values on `:root`, dark values on `html.dark`. Never hardcode a hex color in a component; add a token if one is genuinely missing.
- Text sitting directly on a photo (hero, spotlight image) uses fixed white/black tones, not theme tokens — overlay treatments need to hold up regardless of site theme and regardless of that specific photo's brightness.
- All user-facing copy goes through `src/i18n/locales/{en,my,th}.ts` behind the shared `Dictionary` type in `src/i18n/types.ts`. Never hardcode an English string in a component; add the key to all three locales.
- Images are Creative Commons photos from Wikimedia Commons, referenced in `src/data/images.ts`. Wikimedia only pre-renders a fixed set of thumbnail widths (500 / 960 / 1280 / 1920px) — arbitrary widths return 400. Verify a new image URL with `curl` before wiring it in.
