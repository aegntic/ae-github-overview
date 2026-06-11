# Design System — Aegntic (Coordination Layer / Perception Engine)

**Status:** Operational source of truth for the public face of the persistent intelligence coordination thesis.  
**Primary Surface:** https://aegntic.ai (the coherence-compression layer and visible skeleton).  
**Secondary/Applied Surface:** https://tools.aegntic.ai (products & tools as core modules and practical expressions of the layer).  
**Brand Mark:** The "ae" glyph (see /home/ae/Pictures/ae-logo.png). Used as small, high-signal identifier in navs and product contexts.  
**Date:** 2026-06-03 (initial from design-consultation + live audits of both sites + thesis contract).  
**Core Reference:** The 2026-06-03 brainstorm contract (Problem Narrative, User Story, Architectural Context, Success Criteria) and AGENTIC_AI_ASSESSMENT.md (127-repo evidence base).

## Product Context & Purpose

**What this is:** The canonical public perception engine and coherence-compression layer for aegntic's work. It makes the unified thesis ("the coordination layer for persistent human–AI intelligence systems" / "infrastructure layer for sovereign persistent intelligence") instantly legible and difficult to unsee. Individual modules, tools, and experiments appear as structurally necessary, interconnected parts of one infrastructural system rather than disconnected experiments.

**Primary Purpose (from contract):**
- Teach the market the single dominant thesis so that fascination becomes gravitational pull, builder attraction, and category lock-in.
- Serve as the visible skeleton: interactive map of connections via the primitive (orchestration, authenticity, continuity, sovereignty, experiential memory).
- Compound technically existing work (127+ strategic integrations) into perceptual inevitability.
- Historical/civilizational framing: the post-chat transition from stateless/isolated cognition to persistent, orchestrated, sovereign, memory-bearing systems.
- Funnel: perception engine → GitHub (source), products (proof), MCP/skill registry (participation), whitepapers (depth).

**Who it's for:** Builders, agentic systems developers, sovereign operators, investors/partners, and the emerging A2A (Agent-to-Agent) ecosystem who need a mental model for how disparate advanced systems form a coherent whole.

**Space/Industry:** Agentic AI infrastructure, sovereign AI systems, persistent memory/coordination layers, A2A protocols and tooling. Peers in spirit: early infrastructure layers (e.g., foundational protocol docs, OS kernel sites) rather than typical SaaS marketing or dev library docs.

**Project Type:** Thesis-first perception engine / infrastructural marketing + interactive proof surface. Self-contained production HTML (Tailwind CDN + vanilla JS + embedded assets) for zero-build reliability on Cloudflare. Not a portfolio dump, not a product landing, not docs.

**Memorable Thing (the one thing people should remember after first exposure):** "Once you see the skeleton, everything else becomes obvious." The site itself performs the thesis: coordination that persists, signals that orchestrate, memory that compounds visibly.

**Relation to tools.aegntic.ai:** The tools site is the "applied" or "products of the layer" expression — practical, shippable systems (Obsidian kits, audits, etc.) that demonstrate the primitives in the wild. It uses the shared "ae" mark for brand recognition but has a distinct lighter, product-commerce aesthetic. DESIGN.md governs the primary thesis surface first; tools site should feel like a confident sibling (applied execution of the same underlying coordination layer) rather than competing for the same visual language.

## Aesthetic Direction

**Direction:** Industrial-Utilitarian Infrastructure with Expressive Precision (or "Kernel Poetics").

- **Mood:** Deep, sovereign, reliable, quietly powerful. Feels like the control surface for distributed intelligence — precise, layered, operational but not flashy. Evokes early protocol docs, control theory visualizations, or high-end engineering tooling, but with human warmth (bronze) and persistent coordination (motion signals, memory trails).
- **Decoration level:** Intentional (subtle infrastructure grid, glass "surfaces" for layers, noise texture for depth, purposeful motion). Not minimal (that would feel empty for a "layer" concept), not maximalist chaos. Every decoration earns its place by reinforcing the thesis (connections, persistence, orchestration).
- **Differentiation from category:** Most agentic/AI sites are either purple-gradient SaaS slop, clean dev docs (Inter + light), or toy-like playful. This is darker, more infrastructural, thesis-first, and demonstrative (the canvases and SVG are not illustrations — they *are* the coordination happening live).

**Reference "feels" (not direct copies):** Early Stripe infrastructure surfaces (precision + trust), Linear (calm data-dense but with soul), high-end engineering viz (control panels, network diagrams), brutalist rawness tempered by glass and teal signals for "coordinated system."

**Cross-surface note for tools.aegntic.ai:** Light, clean, commerce-oriented (off-white, strong typography for "who ship", card-based products with clear pricing/CTAs). Shares the ae mark and some language ("built by a developer, for developers") but serves a different job: conversion to specific tools that embody the layer. Avoid forcing dark thesis visuals onto product cards; instead, use consistent mark treatment, section labeling style, and occasional nods to the primitives (e.g., "this tool implements Continuity").

## Typography

**Display/Hero (thesis statements, "One layer. Many modules."):** Space Grotesk (or close high-quality geometric sans with strong personality and tight tracking). Weight 600, letter-spacing -0.025em to -0.04em. Rationale: Expressive but infrastructural; counters generic AI slop while feeling engineered. (Note: per broader design knowledge this is sometimes overused in AI tools; here it is deliberately chosen and locked for the thesis voice — do not swap without strong justification.)

**Body / UI / Labels:** Inter (or Geist/Instrument Sans equivalent for better screen rendering if swapping). 16px base, 300–500 weights. Rationale: Highly legible at density; supports the "scannable authority" needed for A2A builders and investors. Clear hierarchy with section-labels (10px, 0.2em tracking, uppercase, teal).

**Data / Tables / Mono (properties table, integration counts, code-like module specs, live counters):** JetBrains Mono. Tabular-nums where numbers matter. Rationale: Agentic work involves code, MCPs, configs; mono signals precision and "this is real infrastructure, not marketing."

**Loading / Fallback:** System-ui safe stack with the Google Fonts preconnect (as in current implementation). font-display: swap. Preload critical weights.

**Scale (modular, based on current + refined for authority):**
- 10px: section labels, tiny meta
- 12–14px: captions, secondary
- 16px: body (never smaller for main content)
- clamp(2.5rem, 6vw, 4.25rem): thesis/hero
- 21px / 1.25–1.5rem steps for subheads, module titles
- Strong line-height: 0.95 for hero (impact), 1.5 for body (readability), 1.15–1.25 for headings.

**Anti-slop guard:** No system-ui as primary display. No default stacks for the thesis voice. Curly quotes, proper ellipsis where copy allows. Balance or pretty text-wrap on key headings.

## Color

**Approach:** Restrained with two meaningful accents (teal for coordination/infrastructure signal, bronze for human/authenticity/sovereignty layer). Dark-first (void as default for depth and focus on light content). Light variant reserved for tools/products commerce surfaces.

**Core Palette (codified from current implementation + refinements):**
- --void / bg: #050505 (deepest, sovereign ground)
- --deep: #0a0a0f (cards, elevated surfaces)
- --text / primary: #f1f1f1 (high contrast, off-white for comfort)
- --muted: #8a8a8f (secondary text, borders)
- --edge: #1a1a20 (subtle dividers)
- --teal / primary accent (coordination, signals, "the layer", CTAs, active states): #00d4b8
- --bronze / secondary accent (human layer, authenticity, memory, warmth in the machine): #b38b5e

**Glass / Layers:** rgba(255,255,255,0.015) bg + 1px rgba(255,255,255,0.06) border + backdrop-blur(12px). Subtle ::before noise for tactility (reinforces "surfaces" of the layer).

**Semantic (use sparingly, always with labels):**
- Success / positive (live state, persistence): teal or slight green shift
- Warning / human oversight: bronze
- Error: desaturated red (rare)

**Dark mode:** Default (the thesis lives in depth). For tools site light variant: invert to warm off-white (#faf9f6), dark text (#1a1a18), keep ae mark and teal/bronze accents for family resemblance. Reduce saturation 10-15% on accents in very bright contexts if needed.

**Usage rules:** Teal for "coordination happening" (lines, signals, primary CTAs, section labels). Bronze for "human/authentic" elements (memory trails, sovereignty rings, certain module highlights). Never use both accents equally everywhere — hierarchy.

## Spacing & Layout

**Base unit:** 8px (or 4px for fine control). Consistent scale: 2 (2px? micro), 4, 8, 12/16 (md), 24, 32, 48, 64.

**Density:** Comfortable but information-dense for authority (builders expect substance, not air). Hero generous for impact; content areas tighter for "skeleton" and module cards.

**Approach:** Hybrid — strict underlying grid/infrastructure for the skeleton map and overall page rhythm; creative-editorial breaks (overlapping connections, absolute-positioned modules around central node, canvas overlays) where they demonstrate the thesis. Max content width ~1280–1440 for focus. Asymmetric or connection-driven layouts for the layer sections.

**Border radius:** Hierarchical and meaningful — small (4–8px) for data chips/labels, 12–16px for cards/glass, 2xl/3xl (rounded-[3.25rem]) for major containers like the skeleton viewport. Inner radius = outer - gap where nested.

**Grid:** Infrastructure background grid (72px) as subtle texture only — not a rigid column grid everywhere. For the map: custom absolute + SVG connections. Responsive: mobile stacks modules cleanly; desktop reveals the full connected skeleton.

**Components that earn their existence:** Glass cards only when they represent "surfaces/layers." Module cards when they are proof points. Canvases/SVG when they perform coordination (never decorative).

## Motion

**Approach:** Expressive but purposeful and thesis-mapped. "Motion as Proof" (per current site section label). Every animation communicates one of the primitives: orchestration (traveling signals along connections), continuity/persistence (trails that remember, live counters that survive refresh, state that compounds), sovereignty (pulsing rings with human-like variability), authenticity (subtle structured responses).

**Specific systems (lock these behaviors):**
- SVG Skeleton: Staggered stroke-dashoffset load drawing for "revealing the connections." Hover on module triggers animateSignal() — traveling dot (rAF + getPointAtLength) toward center. Active state highlights path.
- Hero / Persistent Field canvas: Mouse-reactive nodes with distance-constrained lines. Gentle coordination toward cursor (persistent field metaphor). Subtle, always-on but low-opacity.
- Continuity Demo canvas: Draggable nodes (pointer events, history trails with alpha fade for experiential memory). Sovereignty rings (sin(time) pulse). Live "PERSISTING • N EVENTS" counter (setInterval increments). Reset button. Clear "drag to re-orchestrate."
- General: ease-out for entering/expanding, ease-in for exiting, cubic-bezier(0.23, 1, 0.32, 1) for lifts/hovers (as in current .crafted-card, .organ).

**Duration:** Micro 50–150ms (hover feedback), short 200–400ms (signal travel, state changes), medium for complex reveals.

**Easing & Performance:** Only transform/opacity where possible. Respect `prefers-reduced-motion: reduce` (current media query disables transitions/animations on motion elements; extend to pause rAF loops or switch to static views in JS). DPR-aware canvases. No layout thrashing.

**Anti-slop:** No "transition: all". No generic fades or bounces unless they map to a primitive. Motion is not decoration — it is the visible proof of the layer.

## A2A (Agent-to-Agent) Credibility & Industry Authority

**Purpose of this system for A2A:** The visuals and interactions must position aegntic.ai as the authoritative surface for understanding and participating in Agent-to-Agent persistent coordination. Not "another AI tool site," but the place where the infrastructure for sovereign, memory-bearing, orchestrated multi-agent systems becomes obvious and desirable.

**How the design optimizes for it:**
- **Visual language of infrastructure + life:** Dark void + precise connections + persistent motion (signals, trails, pulses) evokes reliable distributed systems (think BGP diagrams or OS schedulers) that are also adaptive and human-supervised. Teal signals = coordination traffic; bronze = the human sovereignty/authenticity layer that makes A2A safe and useful.
- **Demonstration over description:** The three interactive systems are A2A in action. The continuity demo is literally nodes (agents) re-orchestrating with persistent state and memory. Skeleton shows modules (specialized agents/systems) connected through the primitive. Field shows ambient persistent coordination. Users *experience* A2A credibility instead of reading about it.
- **Authority signals baked in:** Section labels in precise, uppercase, tracked teal ("THE VISIBLE SKELETON", "MOTION AS PROOF") feel like engineering documentation from a serious lab. "127 INTEGRATIONS" as a live, scannable proof point. Module cards include real metrics (lines, tests, "98%+ detector resistance", "95%+ authenticity"). The whole surface feels battle-tested because the underlying ASSESSMENT (flagships like clawreform self-rewrite, aegnt-27 patterns, soldexter Solana agents) is visible as selected modules.
- **Sovereignty & authenticity emphasis:** Explicit properties table (Orchestration, Authenticity, Continuity, Sovereignty, Experiential Memory) with plain-language definitions. Bronze used for human elements. Demos emphasize "human oversight that never fully relinquishes control" and "intelligence that feels and passes as human at scale."
- **For tools.aegntic.ai:** The product cards and CTAs ("Buy", "Join Waitlist") demonstrate that the layer produces shippable, monetizable A2A-capable tools (Obsidian as memory surface, audits as authenticity tools). Cross-link heavily back to aegntic.ai thesis so products reinforce authority rather than dilute it.

**Industry authority tactics (design + content):**
- Every new module added should get a card + connection in the skeleton + short proof (metrics, GitHub link, "what core module it expresses").
- Use the design system in all external comms (X threads, whitepapers, investor materials) for consistency.
- Embeddable "mini-skeletons" or module cards for other sites (cldcde, GitHub READMEs) to spread the compression layer.
- High-contrast, scannable hierarchy for quick authority assessment by experts (investors scan for "real primitives," builders scan for "how do I plug in?").
- Avoid anything that feels aspirational or vaporware — only show shipped, tested, open (or open-core) work.

## Live SEO & Consistent Authority Updates

**Technical SEO baseline (implement in the HTML + deploy process):**
- Full meta: description (current is good — keep thesis-focused), og:title/desc/image (use a rendered skeleton hero or clean thesis crop), twitter:card large, canonical.
- Structured data (JSON-LD in head or via script): Organization (aegntic, sameAs to GitHub/org, tools site, X), SoftwareSourceCode or TechArticle for the thesis/ primitives, BreadcrumbList for sections (Layer / Skeleton / Modules), ItemList for the 5+ properties or selected modules. This helps search engines understand the "coordination layer" as a defined concept.
- Performance: Self-contained is excellent for CF (low TTFB). Keep base64 logo but consider external cached version for repeat visitors if size becomes issue. Add fetchpriority, proper image dimensions if assets added. Run gstack-benchmark or lighthouse on deploys.
- Accessibility & crawl: Proper headings (h1 thesis, h2 for sections like "THE VISIBLE SKELETON"), ARIA where interactive (canvas descriptions, "drag nodes to orchestrate" live region for counter), reduced-motion respected (already in), semantic HTML.
- Sitemap + robots: Ensure CF serves fresh sitemap.xml listing key sections + major modules/flagships. Submit to Search Console on major updates.
- Internal linking: Nav + footer + "enter the layer" CTAs point to GitHub, specific products (tools site), whitepapers. Module cards link out.

**Content & "Live" Update Strategy (to keep ranking and relevance):**
- **Regular thesis reinforcement:** Append or rotate short "Execution Update" style sections or new module cards with fresh proof (new repo integrations, updated metrics from ASSESSMENT, real A2A examples like agentmint payments or soldexter parallel agents). This gives search engines fresh, substantive content without full redesigns.
- **Keyword & entity strategy:** Primary: "persistent intelligence coordination", "coordination layer for persistent human–AI intelligence", "aegntic coordination layer", "sovereign persistent agents", "A2A infrastructure". Secondary: specific primitives + flagships ("aegnt-27 authenticity", "clawreform agent os", "cldcde mcp"). Use exact phrases in hero, properties table, module descriptions, and new content.
- **E-E-A-T (Experience, Expertise, Authoritativeness, Trust):** The site already has strong signals (open 127-repo surface, real shipped systems with tests/metrics, demos that work). Amplify by:
  - Linking every claim to GitHub evidence or the ASSESSMENT.
  - Author/organization schema with links to founder activity (X @AEGNTIC, etc.).
  - "Proof in production" numbers (lines of code, authenticity scores, integrations).
  - Regular public updates (the Execution Updates in the brainstorm doc should be mirrored or excerpted here).
- **Cross-surface SEO:** tools.aegntic.ai should link back to aegntic.ai with "part of the coordination layer" language and the thesis sentence. This builds topical authority. Conversely, aegntic.ai funnels to tools as "see the layer in products."
- **Monitoring & iteration:** After every deploy, use gstack-benchmark (or playwright + lighthouse via MCP) for Core Web Vitals, especially on interactive sections (CLS from canvases/SVG must stay near zero). Track Search Console for impressions on thesis keywords. Update numbers (e.g. "127 integrations") live via simple JS or pre-deploy script pulling from GitHub API (no hard-coded stale data).
- **Off-page authority:** Encourage (via the surface) links from cldcde, GitHub org READMEs, whitepapers, community posts, X threads that quote the exact thesis sentence + link the skeleton. Guest on relevant podcasts or agentic roundups with the "visible skeleton" framing.
- **Technical live updates protocol (recommended):** Maintain a small update script or use gstack/terminal ops in the workflow: 1. Pull latest repo metadata or ASSESSMENT insights. 2. Incrementally edit the HTML (new module card + connection data in the JS map, updated count, fresh "Execution Update" paragraph). 3. Run design-review / qa via gstack on local + preview. 4. wrangler deploy + gh sync. 5. Ping sitemap, note in Search Console. This keeps the page "operational" and relevant without breaking the self-contained contract.

**Anti-spam / quality guard:** All updates must add real substance (new proof, better demonstration of a primitive, clearer mapping to A2A use cases). Never keyword-stuff. The design system (clean hierarchy, high signal-to-noise) already helps rankings by improving dwell time and reducing bounce on the thesis content.

## Implementation Notes for Current Artifact

The existing `aegntic-ai-redesign.html` is already a strong embodiment of this system (dark void + glass + teal/bronze + thesis typography + mapped motion + section labels + module skeleton).

- Lock the :root tokens exactly.
- Extend the prefers-reduced-motion media query and JS guards (already partially implemented).
- Add the recommended SEO schema and fuller meta/og tags on next edit.
- For the tools site: adopt the ae mark treatment, consistent "section-label" micro-typography style where appropriate, and cross-link copy that references the primitives/layer without forcing the full dark aesthetic.
- When adding new modules or updating the map: follow the absolute + SVG connection pattern; keep descriptions short, metric-rich, and core-module-mapped.

## Decisions Log

| Date       | Decision                          | Rationale |
|------------|-----------------------------------|-----------|
| 2026-06-03 | Initial system from live audit + thesis contract | Captures the perception engine purpose, current tokens, motion as proof, A2A authority needs, and SEO live-update requirements. Codifies what is already working while providing guardrails for evolution. |
| 2026-06-03 | Two-surface model (thesis engine + tools/products) | tools.aegntic.ai already exists with logo and product focus; design system must not erase it but position it as applied expression of the layer for credibility. |
| 2026-06-03 | Motion is non-negotiable thesis performance | Per contract and current implementation — the canvases/SVG are how users viscerally understand "persistent coordination." Design rules protect and extend this. |
| 2026-06-05 | Organic→city metaphor shift | The isometric microchip city concept replaces the biological organism metaphor. "Organs" → "modules", "organism" → "city/system", "living/alive" → "operational/persistent". Consistent with city-01/city-02 hero variants and the Sydney-on-a-chip visual thesis. |

**Next:** Read this DESIGN.md before any visual, copy, motion, or layout change to aegntic.ai or related surfaces. When in doubt, ask: "Does this make the skeleton more visible and the coordination more obvious?"

This system, combined with the brainstorm contract and regular live updates, keeps aegntic.ai as the authoritative, ranking, and credible home for the idea that intelligence can (and must) persist and coordinate across agents and humans under sovereign control.