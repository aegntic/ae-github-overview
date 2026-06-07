import { SheetFrame } from "@/components/sheet-frame";
import { atlas } from "@/lib/content";

export function Districts() {
  const d = atlas.districts;
  return (
    <SheetFrame
      expedition={d.expedition}
      date={d.date}
      title={d.title}
      lede={d.lede}
    >
      <ol className="grid gap-5">
        {d.districts.map((dist, i) => (
          <li
            key={dist.name}
            className="grid grid-cols-12 gap-4 border-t border-ink-2/15 py-5 first:border-t-0 first:pt-0"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="font-mono text-xs text-graphite">
                D.{String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="col-span-10 md:col-span-7">
              <h3
                className="font-display text-2xl font-light text-ink md:text-3xl"
                style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
              >
                {dist.name}
              </h3>
              <p className="mt-2 font-prose text-base leading-relaxed text-ink-2">
                {dist.description}
              </p>
              <p
                className="mt-3 font-hand text-lg text-bronze"
                style={{ transform: "rotate(-1deg)" }}
              >
                ↳ {dist.marginalia}
              </p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <dl className="border-l border-ink-2/15 pl-4">
                <div className="flex items-baseline justify-between gap-3 pb-2">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                    kind
                  </dt>
                  <dd className="font-prose text-sm text-ink">{dist.kind}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-t border-ink-2/15 pt-2">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                    observed
                  </dt>
                  <dd className="font-mono text-sm text-ink">{dist.observed}</dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ol>

      <p
        className="mt-10 inline-block font-hand text-2xl text-bronze"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        ↓ see how they compose
      </p>
    </SheetFrame>
  );
}
