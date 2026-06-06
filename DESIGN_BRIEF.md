# Field Atlas — Design Brief

**Branch:** `design/field-atlas-2026`
**Base commit:** `b9e8f5c` (master @ aegntic.ai redesign)
**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · zero-state where reasonable
**Date:** 2026-06-07
**Status:** Brief v1 — awaiting approval before scaffold

---

## 1. Premise

`aegntic.ai` already has a "Kernel Poetics" reading on master: dark, infrastructural, control-surface. **Field Atlas is the lighter sibling — the working notebook that *documents* the same thesis in human terms.** Instead of "control surface for distributed intelligence," it reads as "a single annotator's field journal cataloguing the same terrain."

Same thesis, different lens:

| | Kernel Poetics (current master) | Field Atlas (this branch) |
|---|---|---|
| **Metaphor** | Infrastructure / control surface | Fieldwork / catalogue |
| **Light** | Dark, glass, signal teal | Warm paper, ink, bronze |
| **Voice** | System: "the layer orchestrates" | Naturalist: "observed on 2026-06-07 — primitive #4, sovereignty, presents as…" |
| **Surprise** | Real-time signals and glass panels | Marginalia, taped polaroids, inked diagrams, field stamps |
| **Relationship to tools.aegntic.ai** | Heavy sibling | Companion volume — same mark, lighter voice |

The point is to give the perception engine a second surface that, when seen alongside the main site, *compounds* the thesis by being two different valid readings of the same territory.

## 2. Concept (the one thing people should remember)

> "A field notebook is a working theory of place. The site is the field notebook."

Every page is a **field sheet** — a gridded paper surface with header band, marginalia column, inked SVG observations, and footer filing stamp. The site is a stack of field sheets the visitor flips through. Each section is one sheet from the same expedition log.

## 3. Visual System

### 3.1 Palette — "Pressing paper"

| Token | Hex | Use |
|---|---|---|
| `paper` | `#f4eee0` | Page background (warm off-white, slight yellow) |
| `paper-2` | `#ebe3d0` | Card surface / sheet-on-sheet |
| `ink` | `#1a1814` | Primary text and lines |
| `ink-2` | `#3a352b` | Secondary text, hairline rules |
| `graphite` | `#6b6353` | Annotations, marginalia, "soft" type |
| `bronze` | `#8a5a2b` | Accent (the original brand warm tone) |
| `signal` | `#0d6b66` | Teal — the only "active system" color, used sparingly for live counters and signal markers |
| `rubric` | `#9b2c2c` | Wax-seal / filed-under / important stamps |
| `tape` | `#d4c896` | "Tape" cards and pinned observations |

No gradients. No drop shadows. All depth comes from layered sheets, paper grain noise, and one hairline border per element.

### 3.2 Type — "Three voices in one notebook"

| Role | Type | Voice |
|---|---|---|
| Display / thesis | **Fraunces** (variable, optical size 144) | The exhibit headline. Slow, confident, slightly old-book. |
| Prose / body | **Newsreader** (variable, optical size 14) | Field-journal paragraphs and section prose. |
| Data / labels / code | **JetBrains Mono** | Counts, labels, properties, file-stamp metadata. |
| Hand | **Caveat** | Marginalia, arrows, callouts — the annotator's actual hand. |

All four are open source. Self-hosted via `next/font` for zero network requests at runtime.

### 3.3 Grid & spacing

- 12-column grid on a 1280 max width.
- Base unit: `4px` (Tailwind default). Sheets use 32/48/64 rhythm.
- Hairline borders: `1px ink-2/20` everywhere there's a divider. No rounded corners except on the rubber-stamp seals (8px max).
- Each section is a "sheet" with consistent 4-sided hairline frame, header band (16px), body, and footer filing strip (24px).

### 3.4 Texture

- One global SVG paper grain (`feTurbulence` at 0.4 opacity) tiled on `paper`.
- No glow. No glass. Ink is ink.
- Live counters render in `JetBrains Mono` with tabular-nums.

## 4. Information Architecture

Field Atlas is one long scroll, organised as a stack of field sheets. Each sheet has a stamp number and a date.

| § | Sheet | Stamp | Purpose |
|---|---|---|---|
| 00 | Cover | `EX.001 · 2026-06-07` | Title, byline, "this is a working theory" note |
| 01 | Field Site | `EX.002 · Locus` | The territory — what aegntic.ai is studying |
| 02 | Primitives | `EX.003 · Specimens` | The 5 primitives (orchestration, authenticity, continuity, sovereignty, experiential memory) as 5 field cards |
| 03 | Districts | `EX.004 · Catalogue` | The applied sites — sovereign-operator, DAILYDOCO, Soldexter, MCP registry, whitepapers |
| 04 | Coordination Layer | `EX.005 · Diagram` | An inked SVG showing how primitives compose into the layer |
| 05 | Live Field Notes | `EX.006 · Active` | A small live counter block (GitHub stars, MCP servers, repos) and "tape cards" of recent observations |
| 06 | Join the Survey | `EX.007 · Open` | Three CTAs: read the source, file a sighting, build on the layer |
| 07 | Colophon | `EX.008 · Filed` | The stamp — credits, "this notebook is open", link to master site |

## 5. Interaction

- **Scroll**: Sheets have a subtle paper-on-paper parallax (0.95x scroll on each sheet's bg grain only).
- **Section entry**: Each new sheet "stamps in" — its filing-stamp animates from 0 → 100% rotation in 600ms with a soft `tap` sound (optional, off by default, gated on `prefers-reduced-motion`).
- **Specimen cards** (§02): On hover, the card lifts 2px and the marginalia annotation fades in.
- **Live counter** (§05): Streams count-up from 0 on first view. Uses static data shipped at build (no live API call — keeps zero-runtime-cost).
- **Inked SVG diagram** (§04): Path strokes draw in via `stroke-dashoffset` animation as the sheet enters the viewport.
- **No horizontal scroll, no carousels, no modals.** The notebook is meant to be read in order.

## 6. Accessibility

- WCAG AA contrast: `ink` on `paper` is 13.5:1; `graphite` on `paper` is 5.7:1. Both pass AA.
- `signal` (`#0d6b66`) is reserved for state, not text — never the only carrier of meaning.
- `prefers-reduced-motion: reduce` disables the stamp, draw-in, and counter animations.
- All SVG diagrams have a visually-hidden `<title>` and `<desc>` and the visible text equivalent immediately adjacent.
- Sheet frames are decorative `<div aria-hidden>` — the real structure is semantic `<section>` / `<article>` / headings.

## 7. Performance budget

- **JS shipped:** < 100KB gzipped (no client router state, no animation libraries)
- **Fonts:** 4 families, 1 weight each variable axis, subsetted to Latin Extended
- **Images:** 0 raster. All graphics are SVG. The logo (`ae-logo.png`) is converted to inline SVG.
- **CLS:** 0 — every sheet reserves its space before fonts/svgs load.
- **LCP:** < 1.2s on a cold load over 4G (single HTML, inlined critical CSS, no fonts in the LCP path).

## 8. File layout (planned)

```
web/                              # the Next.js app (only thing in this branch)
  app/
    layout.tsx                    # fonts, paper background, metadata
    page.tsx                      # assembles all sheets in order
    globals.css                   # Tailwind v4 + paper texture + tokens
    sheets/
      cover.tsx
      field-site.tsx
      primitives.tsx
      districts.tsx
      coordination-layer.tsx
      live-notes.tsx
      join.tsx
      colophon.tsx
  components/
    sheet-frame.tsx               # the hairline frame, header band, footer stamp
    inked-svg.tsx                 # wrapper for path-draw animation
    live-counter.tsx
    marginalia.tsx
    rubric-stamp.tsx
    tape-card.tsx
  lib/
    content.ts                    # all copy, all data — single source of truth
  public/
    ae-glyph.svg                  # converted from ae-logo.png
  tailwind.config.ts
  next.config.ts
  tsconfig.json
  package.json
  README.md
```

Root of the repo keeps the existing `aegntic-ai-redesign.html`, `DESIGN.md`, `design-options/`, screenshots, and design assets untouched.

## 9. Phased Execution

| Phase | Scope | Files | Verify |
|---|---|---|---|
| **1 (this)** | Branch + brief | 1 md | — |
| **2** | Scaffold Next.js (config, layout shell, paper bg) | 5 | `npm run build` |
| **3** | Design tokens + sheet frame + cover sheet | 5 | `npm run build` + typecheck |
| **4** | Sheets 01–04 (field-site, primitives, districts, coordination layer) | 5 | typecheck + a11y audit |
| **5** | Sheets 05–07 (live-notes, join, colophon) | 4 | typecheck + perf budget check |
| **6** | Polish, perf, axe scan, final commit | 2 | full a11y + perf + build |

Each phase ends in a commit. Approval requested at end of phase 1.

## 10. Out of scope (deliberate)

- A blog/CMS — the existing site handles that.
- A login / account system.
- A search feature (8 sheets, not needed).
- A dark mode — paper is paper.
- i18n — the brand is English-only for now.
- Any live external API calls (counters ship build-time data).

## 11. Open questions (for later)

- Q1: Should the cover sheet have an actual `tap` audio when stamping, or stay silent? (Default: silent. We can add a global "sound on" toggle later.)
- Q2: The "tape cards" in §05 — should they link to real recent activity (PRs, issues, releases) or be illustrative? (Default: illustrative copy, no live data.)
- Q3: The colophon — link to `master` (the dark sibling) explicitly, or let them be separate? (Default: one small "also see aegntic.ai" link, no competitive framing.)
