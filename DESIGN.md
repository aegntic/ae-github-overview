# Design System — Aegntic (Coordination Layer / Editorial Perception Engine)

**Status:** Operational source of truth. v2 -- full editorial pivot.
**Primary Surface:** https://aegntic.ai (the coordination layer, presented as an editorial experience).
**Secondary/Applied Surface:** https://tools.aegntic.ai (products & tools catalog, sibling aesthetic).
**Brand Mark:** The "ae" glyph (see /home/ae/Pictures/ae-logo.png). Small, high-signal identifier in navs and product contexts.
**Date:** 2026-06-11 (v2 editorial pivot, informed by SOHub.digital reference audit).
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
- Line-height: 1.0-1.05 for hero, 1.5 for body, 1.15-1.25 for headings

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

**Border radius:** 4-8px for small elements (chips, buttons). 12-16px for cards. Nothing over 16px -- no over-rounded AI slop.

**Grid:** Clean 12-column grid underlying the layout. Sections use defined column spans (7+5, 6+6, 8+4) for visual variety. No asymmetric chaos, no absolute-positioned floating elements, no connection-line overlays. The grid is the structure; the content fills it with intention.

**Components that earn their existence:** Cards only for product/service listings. Full-viewport sections for thesis content. No glass, no floating surfaces, no canvas overlays.

## Motion

**Approach:** Refined, purposeful, editorial. Motion reveals content and signals state, never decorates. No live canvases, no persistent animation loops, no SVG skeleton drawing animations.

**Allowed motion patterns:**
- Scroll-triggered section entrances: content fades up and in as each viewport section scrolls into view. Subtle, short duration (300-400ms), ease-out. NOT staggered reveals on every child element.
- Image/visual anchor reveals: images scale slightly from 1.02 to 1.0 on entrance. Subtle, one-time.
- Hover states: cards lift with box-shadow change (200ms ease-out). Links underline on hover. Buttons shift background opacity. No transform: scale on images.
- Horizontal scroll sections: smooth drag/scroll for portfolio/product carousels. GSAP-driven with momentum.
- Page load: single orchestrated entrance for the hero section (headline, then subtitle, then CTA). 600ms total. Not a cascade of staggered elements across the whole page.

**Easing:** ease-out-quart (cubic-bezier(0.25, 1, 0.5, 1)) for entrances. ease-out for hovers. No bounce, no elastic, no spring physics.

**Duration:** 150-200ms for hovers. 300-400ms for entrances. 600ms max for hero load sequence.

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

## Horizontal Scroll Section

**Pattern:** Borrowed from SOHub's work carousel. Used for the ecosystem/products section.

**Implementation:** A horizontal scroll container showing product/project cards. GSAP ScrollTrigger or CSS scroll-snap horizontal. Each card is a project from the ecosystem (aegnt-27, clawREFORM, Prologue, CLDCDE, etc.) with:
- Large preview image/render
- Project name with spaced editorial tracking
- One-line description
- Core module tag
- Link to live site or GitHub

**Behavior:** Drag to scroll on desktop. Swipe on mobile. Snap to nearest card. No autoplay.

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

**Next:** Read this DESIGN.md before any visual, copy, motion, or layout change to aegntic.ai or related surfaces. When in doubt, ask: "Does this feel like a confident editorial presentation of the coordination layer, or does it feel like another AI startup landing page?"
