import { SheetFrame } from "@/components/sheet-frame";
import { atlas } from "@/lib/content";

export function Colophon() {
  const c = atlas.colophon;
  return (
    <SheetFrame
      expedition={c.expedition}
      date={c.date}
      title={c.title}
      lede={c.lede}
      stampVariant="rubric"
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <dl className="border-t border-ink-2/20">
            {c.credits.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 border-b border-ink-2/15 py-3"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
                  {k}
                </dt>
                <dd className="font-prose text-base text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <p
            className="mt-10 font-hand text-2xl text-bronze"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            — ae
          </p>
        </div>

        <aside className="md:col-span-4 md:col-start-9" aria-label="Also see">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
            Also see
          </h3>
          <p className="mt-3 font-prose text-base leading-relaxed text-ink-2">
            {c.also}{" "}
            <a
              href="https://aegntic.ai"
              className="border-b border-bronze/60 pb-0.5 text-bronze transition-colors hover:border-bronze"
            >
              aegntic.ai
            </a>
            .
          </p>

          <p
            className="mt-8 font-hand text-2xl text-bronze"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            ⌖ the atlas is filed open
          </p>
        </aside>
      </div>
    </SheetFrame>
  );
}
