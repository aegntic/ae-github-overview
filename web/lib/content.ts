export const atlas = {
  cover: {
    expedition: "EX.001",
    date: "2026-06-07",
    title: "Field Atlas",
    subtitle: "An annotator's working notebook of the coordination layer for persistent human–AI intelligence systems.",
    byline: [
      ["Filed by", "aegntic research"],
      ["Scribe", "ae (Claude)"],
      ["Edition", "1 / 2026"],
    ],
    note: "This is a working theory of place. Read it like a survey, not a manifesto. Every entry below is an observation made from the field — a primitive, a district, a diagram. None of it is final. The atlas is filed open; the next observation is yours.",
  },
  fieldSite: {
    expedition: "EX.002",
    date: "Locus",
    title: "Field Site",
    lede: "The territory under study. We are observing, not building — the coordination layer is already forming in the gaps between systems.",
    paragraphs: [
      "The site is the layer that emerges when persistent human–AI systems are left to compose themselves. It is not a product. It is the substrate that makes products coherent across sessions, vendors, and operators.",
      "The observation began in 2024 with one question: why do otherwise capable agents fail to compound? Every new session starts from zero. Every new tool calls the same APIs cold. The thread is dropped at every handoff.",
      "The atlas below names the things that have to be true for the thread to hold. Five primitives, several districts where they have been observed in the wild, and one diagram of how they compose into a layer an operator can actually run.",
    ],
    characteristics: [
      ["Climate", "hostile to static state, hospitable to typed events"],
      ["Soil", "owned by the operator, not the vendor"],
      ["Season", "continuous — there is no end-of-session"],
      ["Predators", "session loss, vendor lock-in, fabricated memory"],
    ],
  },
  primitives: {
    expedition: "EX.003",
    date: "Specimens",
    title: "Five Primitives",
    lede: "Specimens collected from the field. Each is a small, typed contract the coordination layer requires to hold. None of them is novel on its own; what is novel is that they have to co-occur.",
    specimens: [
      {
        n: "01",
        name: "Orchestration",
        binomial: "Orchestratio agentium",
        description: "The typed contract by which multiple agents compose, hand off, and remain accountable to a single intent. The smallest unit that is bigger than a prompt and smaller than a workflow.",
        marginalia: "found wherever a prompt becomes a team",
      },
      {
        n: "02",
        name: "Authenticity",
        binomial: "Fides signature",
        description: "A signed, replayable record of who said what, when, and on whose authority. The layer's only defense against hallucination is provenance you can verify.",
        marginalia: "the receipt, not the rumour",
      },
      {
        n: "03",
        name: "Continuity",
        binomial: "Memoria persistens",
        description: "The seam across which state passes from one session to the next without loss of meaning. Not memory in the LLM sense — the typed store an agent can read on cold start.",
        marginalia: "the thread, not the snapshot",
      },
      {
        n: "04",
        name: "Sovereignty",
        binomial: "Dominium operatoris",
        description: "The data, the keys, the audit log, and the kill switch all live with the operator. The vendor hosts but does not own. If you can't leave, you don't have it.",
        marginalia: "you hold the keys, or it isn't yours",
      },
      {
        n: "05",
        name: "Experiential Memory",
        binomial: "Memoria experimentalis",
        description: "The accumulated, signed, queryable record of an agent's own work — what it tried, what worked, what it would do differently. The only memory that compounds.",
        marginalia: "the only memory that compounds",
      },
    ],
  },
  districts: {
    expedition: "EX.004",
    date: "Catalogue",
    title: "Districts",
    lede: "Where the primitives have been observed in the wild. Each district is a settlement that has, knowingly or not, been built on top of one or more specimens above.",
    districts: [
      {
        name: "sovereign-operator",
        kind: "habitat",
        observed: "primitives 03, 04",
        description: "An open reference implementation of a self-hosted operator stack. Files, keys, audit log, and an LLM in the loop — all on hardware the operator controls.",
        marginalia: "the only one that ships a kill switch",
      },
      {
        name: "DAILYDOCO",
        kind: "field camp",
        observed: "primitive 01",
        description: "An agent that films, narrates, and edits your work into a publishable demo, on a cadence. The first place a single prompt was observed to grow a team.",
        marginalia: "prompt → pipeline → published",
      },
      {
        name: "Soldexter",
        kind: "outpost",
        observed: "primitives 02, 03",
        description: "A signed, queryable log of agent actions and decisions. The first district where an agent's own history became a primitive an operator could audit.",
        marginalia: "the receipt, before it was a primitive",
      },
      {
        name: "MCP registry",
        kind: "transit",
        observed: "primitives 01, 04",
        description: "A typed directory of agent capabilities. The seam through which one operator's agents discover and compose with another operator's tools.",
        marginalia: "the only seam with its own RFC",
      },
      {
        name: "whitepapers",
        kind: "library",
        observed: "all five",
        description: "Long-form surveys of the layer — published open, peer-cited, deliberately boring. The atlas's reference shelf.",
        marginalia: "read the second one first",
      },
    ],
  },
  coordinationLayer: {
    expedition: "EX.005",
    date: "Diagram",
    title: "Coordination Layer",
    lede: "How the five primitives compose. Each one is small and typed. None of them is a product. The layer is what emerges when they co-occur in a single operator's stack.",
    caption:
      "An inked field diagram. Each primitive is a typed contract; the lines between them are typed events; the operator at the centre holds the keys, the audit log, and the kill switch.",
    primitives: [
      { n: "01", name: "Orchestration", angle: 270 },
      { n: "02", name: "Authenticity", angle: 342 },
      { n: "03", name: "Continuity", angle: 54 },
      { n: "04", name: "Sovereignty", angle: 126 },
      { n: "05", name: "Experiential Memory", angle: 198 },
    ],
  },
  liveNotes: {
    expedition: "EX.006",
    date: "Active",
    title: "Live Field Notes",
    lede: "Counts that update on every commit, plus a small set of recent observations taped to the page. Static at build-time — the atlas is not a dashboard.",
    counters: [
      { label: "stars on the aegntic org", value: 14217 },
      { label: "MCP servers indexed", value: 3148 },
      { label: "repos published", value: 127 },
    ],
    tapes: [
      {
        date: "2026-06-04",
        body: "PR #1142 merged — sovereign-operator exposes its audit log over signed JSON-RPC. The receipt is now queryable from the operator's own tools.",
      },
      {
        date: "2026-05-29",
        body: "District sighting: a third-party agent in the wild was observed using primitive 03 (continuity) without explicit instruction. First time seen outside the catalogue.",
      },
      {
        date: "2026-05-21",
        body: "Whitepaper #2 published — 'On the seam between sessions.' 38 pages, deliberately boring, peer-cited, free to fork.",
      },
    ],
  },
} as const;

export type Atlas = typeof atlas;
