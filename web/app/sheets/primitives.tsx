import { SheetFrame } from "@/components/sheet-frame";
import { atlas } from "@/lib/content";

export function Primitives() {
  const p = atlas.primitives;
  return (
    <SheetFrame
      expedition={p.expedition}
      date={p.date}
      title={p.title}
      lede={p.lede}
    >
      <ol className="grid gap-6 md:grid-cols-2">
        {p.specimens.map((s) => (
          <li
            key={s.n}
            className="relative border border-ink-2/20 bg-paper-2/40 p-6"
          >
            <div className="flex items-baseline justify-between gap-4 border-b border-ink-2/15 pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                Specimen {s.n}
              </span>
              <span className="font-hand text-base text-bronze">
                {s.binomial}
              </span>
            </div>

            <h3
              className="mt-4 font-display text-3xl font-light text-ink"
              style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
            >
              {s.name}
            </h3>

            <p className="mt-3 font-prose text-base leading-relaxed text-ink-2">
              {s.description}
            </p>

            <p
              className="mt-5 font-hand text-xl text-bronze"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              ↳ {s.marginalia}
            </p>
          </li>
        ))}
      </ol>

      <p
        className="mt-10 inline-block font-hand text-2xl text-bronze"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        ↓ into the districts where these have been observed
      </p>
    </SheetFrame>
  );
}
