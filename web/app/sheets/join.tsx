import { SheetFrame } from "@/components/sheet-frame";
import { atlas } from "@/lib/content";

export function Join() {
  const j = atlas.join;
  return (
    <SheetFrame
      expedition={j.expedition}
      date={j.date}
      title={j.title}
      lede={j.lede}
    >
      <ol className="grid gap-5 md:grid-cols-3">
        {j.actions.map((a) => (
          <li
            key={a.n}
            className="group flex flex-col border border-ink-2/20 bg-paper-2/40 p-6 transition-colors hover:border-bronze/60"
          >
            <div className="flex items-baseline justify-between border-b border-ink-2/15 pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                Action {a.n}
              </span>
              <span className="font-hand text-base text-bronze">
                ↗
              </span>
            </div>

            <h3
              className="mt-4 font-display text-3xl font-light text-ink"
              style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
            >
              {a.verb}
            </h3>

            <p className="mt-3 flex-1 font-prose text-base leading-relaxed text-ink-2">
              {a.description}
            </p>

            <p
              className="mt-4 font-hand text-lg text-bronze"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              ↳ {a.marginalia}
            </p>

            <a
              href={a.href}
              className="mt-5 inline-flex items-center gap-2 self-start border-b border-ink-2/40 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors group-hover:border-bronze group-hover:text-bronze"
            >
              <span>open</span>
              <span aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ol>
    </SheetFrame>
  );
}
