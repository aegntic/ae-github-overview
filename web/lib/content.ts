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
} as const;

export type Atlas = typeof atlas;
