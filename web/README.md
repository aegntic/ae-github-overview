# field-atlas

An annotator's working notebook cataloguing the coordination layer for
persistent human–AI intelligence systems. Eight field sheets, paper
grain, hairline frames, ink marginalia. Statically rendered, ~105 kB
First Load JS, no dark mode, no backend.

A redesign of [aegntic.ai](https://aegntic.ai).

## Stack

- **Next.js 15** (App Router) · static export via `next build`
- **React 19**
- **TypeScript** strict
- **Tailwind v4** (CSS-first `@theme` tokens, no `tailwind.config.js`)
- **Fonts via `next/font/google`**: Fraunces (display, `opsz` 96-144,
  `SOFT` 50-100), Newsreader (prose), JetBrains Mono (data), Caveat
  (hand)
- Zero client state where reasonable. Client components: a
  `useReveal` hook + a `LiveCounter` for the count-up animation.

## Run

```sh
cd web
npm install
npm run dev          # http://localhost:3000
```

## Build & serve

```sh
cd web
npm run build        # static, all 4 routes prerendered
npm start            # serves the production build
```

## Validation

Run all three before committing — gates must be green:

```sh
cd web
npm run typecheck    # tsc --noEmit
npm run lint         # eslint . --quiet
npm run build        # rm -rf .next is implied on each build
```

Bundle target: **First Load JS ≤ 110 kB**.

## Structure

```
web/
├── app/
│   ├── layout.tsx          # RootLayout: fonts, inline .js-class script
│   ├── page.tsx            # Composes 8 sheets in order
│   ├── globals.css         # @theme tokens, paper grain, reveal utilities
│   └── sheets/
│       ├── cover.tsx
│       ├── field-site.tsx
│       ├── primitives.tsx
│       ├── districts.tsx
│       ├── coordination-layer.tsx
│       ├── live-notes.tsx
│       ├── join.tsx
│       └── colophon.tsx
├── components/
│   ├── sheet-frame.tsx     # Card chrome (header, footer, border) + Reveal wrap
│   ├── rubric-stamp.tsx    # Expedition + date stamp (ink or rubric variant)
│   ├── live-counter.tsx    # Client: IntersectionObserver count-up
│   └── reveal.tsx          # Client: useReveal hook + <Reveal> wrapper
├── lib/
│   └── content.ts          # All copy/data as a single `as const` object
├── public/                 # Static assets (logo at /ae-logo.png)
├── package.json
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

## Design notes

### Reveal animation

All eight sheets' inner bodies are wrapped in `<Reveal>`, which uses
`IntersectionObserver` to add an `.is-revealed` class once the sheet
enters the viewport. The 5 wobbly bezier lines in the Coordination
Layer diagram get their own `useReveal<SVGGElement>(0.3)` so they
draw in (via `stroke-dashoffset` transition on `pathLength="100"`
paths) just after the sheet body stamps in.

### No-JS fallback

An inline script in `<body>` sets a `.js` class on `<html>` before
the first `.reveal` element is parsed. The hidden state is gated
behind `.js` in `globals.css`, so users with JS disabled (or whose
hydration fails) see every sheet at full opacity.

### Reduced motion

Both the hook (`prefersReducedMotion()` short-circuit to
`is-revealed`) and a `@media (prefers-reduced-motion: reduce)` CSS
override collapse animations to instant.

### Type

Display headings use `font-display` (Fraunces) with explicit
`fontVariationSettings: '"opsz" 96, "SOFT" 50'`. Prose uses
`font-prose` (Newsreader). Mono labels, data, and timestamps use
`font-mono` (JetBrains). Hand marginalia (signposts, small asides)
use `font-hand` (Caveat) and bronze color, often rotated -1.5°.

## License

UNLICENSED — internal.
