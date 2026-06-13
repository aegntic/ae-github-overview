# Design System — Aegntic (Coordination Layer / Editorial Perception Engine)

**Status:** Operational source of truth. v2 -- full editorial pivot.
**Primary Surface:** https://aegntic.ai (the coordination layer, presented as an editorial experience).
**Secondary/Applied Surface:** https://tools.aegntic.ai (products & tools catalog, sibling aesthetic).
**Brand Mark:** The "ae" glyph (see /home/ae/Pictures/ae-logo.png). Small, high-signal identifier in navs and product contexts.
**Date:** 2026-06-12 (v2.1 -- SOHub structural mimic integration).
**Core Reference:** The 2026-06-03 brainstorm contract, AGENTIC_AI_ASSESSMENT.md (127-repo evidence base), and SOHub.digital structural analysis.

## Product Context & Purpose

**What this is:** The canonical perception engine for aegntic's coordination layer thesis. It makes the unified thesis ("the coordination layer for persistent human-AI intelligence systems") instantly legible and gravitational. Individual modules, tools, and experiments appear as structurally necessary parts of one system, presented through spacious editorial sections with curated visual anchors.

**Primary Purpose:**
- Teach the market the single dominant thesis so that fascination becomes gravitational pull, builder attraction, and category lock-in.
- Present the 5 core modules (Orchestration, Authenticity, Continuity, Sovereignty, Experiential Memory) as full-viewport editorial sections, each with its own visual identity.
- Compound technically existing work (127+ strategic integrations) into perceptual inevitability.
- Funnel: perception engine -> GitHub (source), products (proof), MCP/skill registry (participation), whitepapers (depth).

**Who it's for:** Builders, agentic systems developers, sovereign operators, investors/partners, and the emerging A2A (Agent-to-Agent) ecosystem. They are technical, skeptical of marketing, evaluating whether this is real infrastructure. They arrive between commits, in a terminal split, or on a phone between meetings. They scan before they read.

**Space/Industry:** Agentic AI infrastructure, sovereign AI systems, persistent memory/coordination layers, A2A protocols and tooling.

**Project Type:** Thesis-first editorial perception engine. Self-contained production HTML (Tailwind CDN + vanilla JS + embedded assets) for zero-build reliability on Cloudflare.

**Memorable Thing:** "This is where the category is being defined." The visitor feels gravitational pull within the first viewport.

**Relation to tools.aegntic.ai:** Both surfaces share the same design language (light-first editorial, ae mark, teal/bronze accents). tools.aegntic.ai is product-commerce oriented (cards, pricing, CTAs). aegntic.ai is thesis-editorial (full-viewport sections, visual anchors, scroll-snap rhythm). They feel like confident siblings, not competing surfaces.

## Aesthetic Direction

**Direction:** Clean editorial authority. Spacious, light, curated. "Category definition, not category participation."

**Mood:** Open, confident, unhurried. Feels like a well-funded design studio presenting a thesis, not a startup pitching a product. The space between elements is as intentional as the elements themselves. Every section breathes. Visual anchors (3D renders, architectural diagrams, curated imagery) give each viewport its own identity without clutter.

**Structure:** Full-viewport scroll-snap sections. Each section is a self-contained editorial moment. The 5 core modules each get their own viewport with a dedicated visual anchor and distinct color accent. The rhythm is: hero, then one module per snap, then ecosystem/products, then CTA.

**Decoration level:** Restrained but not austere. Purposeful white space. Section dividers that feel editorial (thin rules, intentional breaks). No glass, no noise textures, no infrastructure grids. The decoration is the spacing itself.

**Differentiation from category:** Most agentic/AI sites are purple-gradient SaaS slop, generic dev docs, or toy-like playful. This is none of those. It borrows more from high-end agency portfolio sites (SOHub, Active Theory, Aristide Benoist) than from SaaS landing pages. Clean, confident, editorial. No AI fingerprints whatsoever.

**References (feel, not copies):**
- SOHub.digital (primary structural reference: full-viewport sections, horizontal scroll for portfolio, spacious editorial rhythm, 3D visual anchors)
- Active Theory (clean dark/light execution, purposeful motion)
- Aristide Benoist (editorial typography, section rhythm)
- Early Stripe (precision + trust signals)

**Anti-references (must never look like):**
- Purple-to-blue gradient SaaS slop
- Generic dev docs (Inter + white + nothing else)
- Toy-like playful AI interfaces
- Any 2026 AI slop: cream/sand body backgrounds, tracked uppercase eyebrow above every section, numbered section markers (01/02/03), staggered reveal animations as default, comically large H1, hand-drawn SVG illustrations, ghost cards (1px border + soft shadow), over-rounded corners (32px+), gradient text, sparkle/magic metaphors, glassmorphism
- Anything that would make someone say "AI made this"

## SOHub.digital Structural Reference

**Audited:** 2026-06-12. Full HTML source analysis (88KB) + desktop/mobile/tablet screenshots. SOHub is a Next.js agency site at sohub.digital. It is the primary structural model for aegntic's mimic build (`aegntic-sohub-mimic.html`).

### Page Architecture

4 sections, full-page rhythm:
1. **Hero** -- `w-screen h-[40vh] lg:h-screen`. Large 3D render (homeRender.png) positioned absolute right side. SVG logo wordmark animates in. Tagline below: "Your story builds our history." Scroll indicator at bottom left.
2. **Work** -- `px-4 md:px-8 lg:px-12 xl:px-20 pb-16 lg:pb-32`. Section heading "Work" with editorial paragraph. 2-column grid (`grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10`). Each project card is `aspect-video rounded-2xl overflow-hidden` with image fill, bottom gradient overlay (`bg-linear-to-t from-black/40`), and title positioned `absolute bottom-4 lg:bottom-8 left-4 lg:left-8`. Arrow SVG appears on hover. Cards scale `hover:scale-[1.02]` with `transition-transform duration-300 ease-spring`.
3. **Services** -- `px-4 md:px-8 lg:px-12 xl:px-20`. Section heading + paragraph. 4 service cards stacked and overlapping via absolute positioning on lg+. Each card: `rounded-[3rem] lg:aspect-16/7 px-6 py-12 lg:p-16 2xl:p-24`. Cards layer with `clip-path:inset(0 0 0 0)` and z-index 0-3. Each has large title (`text-5xl lg:text-8xl 2xl:text-[8rem] leading-none tracking-5`), description, and pill tags (`rounded-full px-4 lg:px-6 py-2`). Bottom card fully visible; upper cards peek from top.
4. **CTA** -- `w-screen lg:h-screen`. "Don't be shy" in publicaPlay display font (`text-8xl md:text-9xl xl:text-[9rem] tracking-tighter leading-[0.9]`). Floating 3D chair image right side with `float-anim-l`. CTA button: `rounded-full` pill with text + arrow icon, `hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)]`.

### Color System

SOHub uses a dark-first palette (opposite of aegntic's light-first). Aegntic adapts the structure, not the palette.

| SOHub Token | Value | Usage |
|-------------|-------|-------|
| bg-sohub-black | `#0C1016` | Primary dark background (blue-black) |
| bg-sohub-dark-grey | `#10141C` | Service card tag backgrounds, elevated dark |
| bg-sohub-soft-grey | `#D9E0E3` | Light surface cards |
| bg-sohub-white | `#F0F6F8` | Light text, light card backgrounds (blue-tinted white) |
| text-sohub-black | `#0C1016` | Dark text |
| text-sohub-white | `#F0F6F8` | Light text |
| text-sohub-grey | `#555555` | Muted text, secondary headings |
| theme-color | `#27b7a5` | Browser theme-color meta (teal accent, unused in body styles) |

**Service card layer colors** (stacked cards, bottom to top):
- Layer 0: `#0C1016` (base -- fully visible)
- Layer 1: `#23272d`
- Layer 2: `#3a3e44`
- Layer 3: `#50555a` (top -- least visible)

### Typography

- **Display:** `PublicaPlay_Regular` (custom, not Google Fonts). Used only for CTA headline.
- **Body:** Another custom obfuscated font + Inter as fallback. `font-family:'Inter', 'Inter Fallback'`.
- **Scale:** text-xs to text-[10rem]. Hero tagline: `text-2xl lg:text-[3.5rem] leading-none font-semibold tracking-tighter`. Service titles: `text-5xl lg:text-8xl 2xl:text-[8rem] leading-none tracking-5`. Section heads: `text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[7rem] tracking-7`.
- **Tracking:** Custom values `tracking-5` (~0.05em) and `tracking-7` (~0.07em) for large display text. `tracking-tighter` for hero tagline.

### Motion & Animation

- **Hero entrance:** SVG path elements animate in via `hero-anim-in` class. Tagline lines via `hero-anim-in-lines`. Staggered but fast.
- **Scroll reveals:** Section headings use `opacity-0 tt-sub-in translate-y-16`, transitioning to visible on scroll.
- **Float:** `float-anim` and `float-anim-l` classes for gentle vertical oscillation on CTA image and hero render.
- **Card hover:** `hover:scale-[1.02]` with `transition-transform duration-300 ease-spring`.
- **CTA button:** `hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)]`. Arrow icon translates on hover.
- **Magnetic effect:** `data-magnetic="true"` wrapper on service tags for subtle cursor-following.
- **Service card reveal:** Cards above base use `clip-path:inset(0 0 0 0)` + `transform:translateY(120%)`, animating to `translateY(0%)`.
- **Custom easings:** `cubic-bezier(.22,.68,0,1)` (fast-out), `cubic-bezier(.22,.68,0,1.2)` (overshoot), `cubic-bezier(.22,.68,0,1.5)` (strong overshoot for arrow).

### Layout Patterns to Mimic

1. **Hero:** Full-screen with large 3D render positioned right, text left-bottom. Not centered -- asymmetric.
2. **Work grid:** 2-column, aspect-video cards with bottom overlay gradient + title. Hover scale. Arrow appears.
3. **Service cards:** Overlapping stacked cards with rounded-[3rem], peeking via z-index and clip-path. Tags as rounded-full pills. Large display titles with `leading-none`.
4. **CTA:** Oversized display text (9rem+) with `leading-[0.9]`, floating image, pill button with icon.
5. **Responsive padding:** `px-4 md:px-8 lg:px-12 xl:px-20` -- consistent across sections.
6. **Scroll indicator:** Small animated element at bottom of hero section.

### Navigation

- Fixed right-side scrollbar (`w-2 rounded-full`) -- custom thin scrollbar, not browser default.
- Menu button: hamburger icon with open/close animation. Opens full-screen overlay.
- Nav items: Home, Studio, Work, Contact. Minimal.
- "Chat with SOHub" as floating CTA button in bottom-right corner.

### What Aegntic Adopts vs Diverges

**Adopt:**
- Full-viewport hero with large 3D render on right, text left-bottom
- 2-column work/project grid with aspect-video cards, bottom gradient, hover scale
- Overlapping service/module cards with large display titles
- CTA section with oversized display text + floating visual
- Responsive padding scale (`px-4 md:px-8 lg:px-12 xl:px-20`)
- Custom scrollbar (thin, right-side)
- Float animation on hero render
- Service card clip-path reveal
- Pill tags with rounded-full

**Diverge:**
- Light-first palette (SOHub is dark-first; aegntic stays light with teal/bronze)
- Scroll-snap sections (SOHub uses free scroll; aegntic adds snap points)
- Space Grotesk + Inter instead of PublicaPlay + custom font
- 5 module sections instead of 4 service cards
- Horizontal ecosystem carousel (SOHub has 2-col grid; aegntic adds horizontal scroll for products)
- Theme toggle (SOHub has none)
- JetBrains Mono for data/metrics (SOHub has no mono use)

## Typography

**Display/Hero (thesis statements, section titles):** Space Grotesk. Weight 600, letter-spacing -0.025em to -0.04em. Large, confident, editorial. Used for thesis statements, module section titles, and the hero headline.

**Body / UI / Labels:** Inter. 16px base, 300-500 weights. Highly legible at density. Section labels use 10-11px, 0.2em tracking, uppercase -- but sparingly, not on every section (avoid the tracked-eyebrow-everywhere AI slop pattern).

**Data / Tables / Mono (metrics, integration counts, code-like specs):** JetBrains Mono. Tabular-nums where numbers matter. Used for proof points, metric counters, and technical specs.

**Scale:**
- 10-11px: section labels (used selectively, not on every section)
- 12-14px: captions, secondary text
- 16px: body base
- clamp(2.5rem, 6vw, 4.25rem): hero headline
- 21-24px: section subheads, module titles
- clamp(3rem, 8vw, 8rem): module display titles (SOHub pattern: service cards use 5xl-8xl-10rem scale)
- clamp(6rem, 12vw, 9rem): CTA display text (SOHub pattern: "Don't be shy" at 8xl-9xl-12rem)
- Line-height: 1.0-1.05 for hero, 0.9 for CTA display (SOHub uses leading-[0.9]), 1.5 for body, 1.15-1.25 for headings

**Anti-slop guard:** No system-ui as primary display. Proper text-wrap on headings. No comically oversized H1 (clamp max 4.25rem / ~68px).

## Color

**Approach:** Light-first with two meaningful accents. Clean, high-contrast, editorial. Teal for coordination/infrastructure. Bronze for human/authenticity. Dark mode available as toggle.

**Light Palette (default):**
- --bg: #faf9f6 (warm off-white, not cream -- subtle warmth without the AI slop beige tell)
- --surface: #f0efec (elevated cards, sections)
- --text: #1a1a18 (near-black, high contrast)
- --muted: #6b6b68 (secondary text)
- --edge: #e2e1dd (borders, dividers)
- --teal: #00b39e (coordination accent, CTAs, active states)
- --bronze: #b38b5e (human accent, warmth, authenticity signals)

**Dark Palette (toggle):**
- --bg: #0a0a0f (deep, not pure void -- editorial dark, not cyberpunk)
- --surface: #141419 (elevated cards)
- --text: #f0f0ed (off-white)
- --muted: #8a8a8f
- --edge: #1e1e25
- --teal: #00d4b8 (slightly brighter for dark ground)
- --bronze: #c9a06e (slightly brighter for dark ground)

**Accent rules:** Teal for coordination signals, primary CTAs, module accent on Orchestration/Continuity. Bronze for human elements, authenticity, Sovereignty/Experiential Memory. Never use both equally -- hierarchy. Each of the 5 core modules can lean into one accent or the other based on its nature.

**Theme toggle:** Light is default. Dark available via toggle. Toggle state persists in localStorage. No flash of wrong theme on load (set class on <html> before paint). Both themes share the same layout, spacing, typography, and component structure -- only colors invert.

**Usage rules:** No gradients on text. No neon glow effects. No glassmorphism. Accents appear on CTAs, labels, hover states, and module-specific highlights. Background stays clean.

## Spacing & Layout

**Base unit:** 8px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128.

**Density:** Generous. Spacious. Editorial. The white space IS the design. Content areas have room to breathe. Sections are full-viewport with comfortable internal padding. This is the SOHub lesson: the space between elements communicates confidence and intent.

**Section structure:** Full-viewport scroll-snap. Each section fills the viewport height (min-height: 100svh) with centered content. Scroll-snap-type: y mandatory on the main container. Each section is a self-contained editorial moment.

**5 core module sections:** One module per viewport. Each has:
- Visual anchor (3D render, architectural diagram, or curated image) on one side
- Module title in Space Grotesk
- Description copy in Inter
- Key metrics in JetBrains Mono
- Distinct color accent (teal or bronze leaning)
- Consistent internal grid: 2-column (visual left, text right) or vice versa, alternating for rhythm

**Max content width:** ~1280px centered. Full-bleed sections for visual anchors that deserve it.

**Border radius:** 4-8px for small elements (chips, buttons). 12-16px for project cards (SOHub: rounded-2xl). 48px (3rem) for module/service cards (SOHub pattern: rounded-[3rem]). Full-round (rounded-full) for pills, tags, icon buttons.

**Grid:** Clean 12-column grid underlying the layout. Sections use defined column spans (7+5, 6+6, 8+4) for visual variety. No asymmetric chaos, no absolute-positioned floating elements, no connection-line overlays. The grid is the structure; the content fills it with intention.

**Components that earn their existence:** Cards only for product/service listings. Full-viewport sections for thesis content. No glass, no floating surfaces, no canvas overlays.

## Motion

**Approach:** Refined, purposeful, editorial. Motion reveals content and signals state, never decorates. No live canvases, no persistent animation loops, no SVG skeleton drawing animations.

**Allowed motion patterns:**
- Scroll-triggered section entrances: content fades up and in as each viewport section scrolls into view. Subtle, short duration (300-400ms), ease-out. NOT staggered reveals on every child element.
- Image/visual anchor reveals: images scale slightly from 1.02 to 1.0 on entrance. Subtle, one-time. Hero render floats gently (SOHub: `float-anim` vertical oscillation).
- Hover states: cards scale `hover:scale-[1.02]` with spring easing (SOHub pattern). Links underline on hover. CTA buttons scale `hover:scale-110` with overshoot easing.
- Service/module card reveal: overlapping cards use `clip-path:inset()` + `transform:translateY()` to reveal on scroll (SOHub pattern for stacked service cards).
- Horizontal scroll sections: smooth drag/scroll for portfolio/product carousels. GSAP-driven with momentum.
- Page load: single orchestrated entrance for the hero section (headline, then subtitle, then CTA). 600ms total. Not a cascade of staggered elements across the whole page. SVG elements can animate in (SOHub: `hero-anim-in` on SVG paths).
- Scroll indicator: subtle animated element at bottom of hero (SOHub: scroll-wrapper with pulsing arrow).

**Easing:**
- Entrances: ease-out-quart `cubic-bezier(0.25, 1, 0.5, 1)` (default).
- Card hovers: spring `cubic-bezier(.22,.68,0,1)` (SOHub pattern).
- CTA/buttons with overshoot: `cubic-bezier(.22,.68,0,1.2)` (SOHub pattern).
- No bounce, no elastic, no spring physics beyond these values.

**Duration:** 150-200ms for hovers. 300-400ms for entrances. 500ms for CTA button hover (SOHub: duration-500). 600ms max for hero load sequence.

**Performance:** Only transform and opacity. No layout thrashing. Respect prefers-reduced-motion: disable all motion, show content immediately at final state. DPR-aware images.

**Anti-slop:** No staggered reveals as default. No "transition: all". No persistent animation loops. No parallax. No scroll-jacking except the snap points. Motion is the frame, not the painting.

## Visual Anchors

**Approach:** Each major section gets a curated visual element that gives it identity. These replace the live interactive canvases from v1. They are static or lightly animated images/renders, not interactive demos.

**Types of visual anchors:**
- 3D renders (isometric city, microchip architecture, module visualizations)
- Architectural diagrams (layer diagrams, system schematics, clean line art)
- Curated photography (abstract, structural, textural -- no stock photos of people pointing at screens)
- Data visualizations (static or lightly animated charts showing metrics, integrations)

**Per-module visual treatment (5 core modules):**
1. **Orchestration** (teal accent): Network/coordination diagram. Nodes connecting, signal paths.
2. **Authenticity** (bronze accent): Human/machine intersection visual. Fingerprint, neural pattern, or identity abstraction.
3. **Continuity** (teal accent): Thread/persistence visual. Connected timeline, unbroken line, state flow.
4. **Sovereignty** (bronze accent): Boundary/control visual. Perimeter, gate, operator-at-the-helm.
5. **Experiential Memory** (bronze accent): Accumulation/compound visual. Layers stacking, data compounding.

**Format:** WebP with PNG fallback. Lazy-loaded below fold. Preload hero visual. Responsive srcset.

## Work/Ecosystem Grid (SOHub Pattern)

**Pattern:** Borrowed from SOHub's Work section. 2-column grid of project cards with bottom gradient overlays.

**Layout:** `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10`. Each card:
- `aspect-video rounded-2xl overflow-hidden relative`
- Background image fills card
- Bottom gradient overlay: `bg-linear-to-t from-black/40 to-transparent h-1/2 absolute bottom-0`
- Title positioned `absolute bottom-4 lg:bottom-8 left-4 lg:left-8`
- Arrow SVG appears on hover (hidden on mobile)
- `hover:scale-[1.02] transition-transform duration-300 ease-spring`

**Aegntic adaptation:** Used for the ecosystem/products section with project cards showing:
- Large preview image/render
- Project name with editorial tracking
- One-line description
- Core module tag
- Link to live site or GitHub

**Alternative:** Horizontal scroll carousel for when the project list exceeds 6 items. GSAP ScrollTrigger with drag/scroll.

## Theme Toggle

**Location:** Nav bar, right side. Small icon button (sun/moon or similar).
**Default:** Light mode.
**Persistence:** localStorage key "aegntic-theme".
**Implementation:** Toggle adds/removes `data-theme="dark"` on `<html>`. CSS variables switch via `[data-theme="dark"]` selector. No flash: inline `<script>` in `<head>` reads localStorage and sets attribute before paint.

**Dark mode is not the identity.** It is an accommodation for users who prefer it. The design system is built light-first; dark is an inversion, not the primary expression.

## A2A Credibility & Industry Authority

**How the editorial system optimizes for A2A authority:**
- **Spacious confidence:** The generous spacing and full-viewport sections communicate "this is established, this is serious" more effectively than dense information packing. Authority through restraint.
- **Curated visuals over interactive demos:** 3D renders and architectural diagrams signal production quality and investment. They look like something a funded infrastructure company would present, not a weekend hack.
- **Metric-rich module sections:** Each of the 5 core module viewports includes real metrics (lines of code, test counts, authenticity scores, integrations) in JetBrains Mono. These are the proof points. They anchor the thesis in shipped reality.
- **Horizontal ecosystem carousel:** Shows the full product ecosystem in a scannable, portfolio-style format. Each card links to live sites and GitHub repos. This is the "see it in production" proof layer.
- **Cross-surface authority:** tools.aegntic.ai links back to aegntic.ai with "part of the coordination layer" language. aegntic.ai links to tools for "see the layer in products."

**Industry authority tactics:**
- Every claim links to GitHub evidence or the ASSESSMENT.
- Author/organization schema with links to founder activity.
- "Proof in production" numbers prominently displayed in each module section.
- Regular content updates (new modules, fresh metrics) without full redesigns.
- Avoid anything aspirational or vaporware. Only show shipped, tested, open work.

## Live SEO & Consistent Authority Updates

**Technical SEO baseline:**
- Full meta: thesis-focused description, og:title/desc/image, twitter:card large, canonical.
- Structured data (JSON-LD): Organization, SoftwareSourceCode, BreadcrumbList, ItemList for the 5 core modules.
- Performance: Self-contained HTML for low TTFB on Cloudflare. Lazy-load below-fold images. Preload hero visual and critical fonts. fetchpriority on hero image.
- Accessibility: Proper headings (h1 thesis, h2 for module sections), ARIA labels, reduced-motion respected, semantic HTML, focus-visible states.
- Sitemap + robots: Fresh sitemap.xml listing key sections + modules. Submit to Search Console on updates.
- Internal linking: Nav + footer CTAs to GitHub, tools site, whitepapers. Module sections link to live projects.

**Content & keyword strategy:**
- Primary keywords: "persistent intelligence coordination", "coordination layer", "aegntic coordination layer", "sovereign persistent agents", "A2A infrastructure"
- Secondary: specific modules + flagships ("aegnt-27 authenticity", "clawreform agent os", "cldcde mcp")
- Use exact phrases in hero, module descriptions, and metadata.
- Regular updates with fresh proof (new repos, updated metrics) keep content current.

**E-E-A-T signals:**
- Open 127-repo surface with real shipped systems
- Metrics tied to GitHub evidence
- Author schema linking to founder activity
- Regular public updates mirrored on site

## Implementation Notes

**Current artifact:** `aegntic-ai-redesign.html` needs full visual rewrite to match this new system. The existing dark void + glass + canvas approach is replaced entirely.

**Build approach:**
- Self-contained HTML (Tailwind CDN + vanilla JS + GSAP for scroll animations)
- No build step. No framework. Deploy to Cloudflare as static HTML.
- Theme toggle via data-theme attribute on <html>
- Scroll-snap for section navigation
- Horizontal scroll for ecosystem carousel
- Lazy-loaded WebP images for visual anchors

**When adding new content:**
- New modules get a full-viewport section with visual anchor
- New ecosystem products go in the horizontal carousel
- Keep descriptions short, metric-rich, core-module-mapped
- Maintain the editorial rhythm: full viewport, generous padding, clean grid

## Decisions Log

| Date       | Decision                          | Rationale |
|------------|-----------------------------------|-----------|
| 2026-06-03 | Initial design system (v1) | Dark void, glass surfaces, live canvases, industrial-utilitarian aesthetic. Codified the perception engine purpose. |
| 2026-06-05 | Organic->city metaphor shift | "Organs" -> "modules", "organism" -> "city/system". |
| 2026-06-11 | Full editorial pivot (v2) | SOHub.digital reference audit showed a cleaner, more confident path. Light-first, spacious, full-viewport sections with curated visual anchors. Replaces dark void + live canvases with editorial authority. Every AI site in 2026 is dark with glowing accents; light editorial is the genuine differentiator. |
| 2026-06-11 | Light default, dark toggle | Light is the identity. Dark is accommodation. This reverses v1 where dark was the thesis expression. |
| 2026-06-11 | Static visual anchors replace live canvases | Live canvases (persistent field, skeleton SVG, continuity demo) were thesis-performative but added complexity and loaded heavy. Curated 3D renders and architectural diagrams achieve the same visual authority with better performance and cleaner execution. |
| 2026-06-11 | Full-viewport scroll-snap for modules | Each of the 5 core modules gets its own editorial moment. This replaces the skeleton map/connection overlay pattern. Modules are presented sequentially, not simultaneously. |
| 2026-06-12 | SOHub structural mimic integration (v2.1) | Full HTML source audit of sohub.digital (88KB Next.js output). Codified specific patterns: 2-col work grid with aspect-video cards, overlapping service cards with clip-path reveal and rounded-[3rem], hero with right-positioned 3D render and SVG wordmark, CTA with oversized display text + leading-[0.9], responsive padding scale px-4→px-20, spring easing cubic-bezier(.22,.68,0,1). Aegntic adopts structure, diverges on palette (light-first vs SOHub dark-first). |
| 2026-06-12 | Border radius expanded | 3rem (48px) radius for module/service cards adopted from SOHub's rounded-[3rem] pattern. Rounded-full for pill tags and icon buttons. Overrides prior "nothing over 16px" rule -- SOHub's large radius is editorial, not AI slop. |

**Next:** Read this DESIGN.md before any visual, copy, motion, or layout change to aegntic.ai or related surfaces. When in doubt, ask: "Does this feel like a confident editorial presentation of the coordination layer, or does it feel like another AI startup landing page?"
