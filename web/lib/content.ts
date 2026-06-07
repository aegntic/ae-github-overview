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
} as const;

export type Atlas = typeof atlas;
