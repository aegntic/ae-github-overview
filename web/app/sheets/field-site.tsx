import { SheetFrame } from "@/components/sheet-frame";
import { atlas } from "@/lib/content";

export function FieldSite() {
  const f = atlas.fieldSite;
  return (
    <SheetFrame
      expedition={f.expedition}
      date={f.date}
      title={f.title}
      lede={f.lede}
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {f.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-5 font-prose text-lg leading-relaxed text-ink last:mb-0"
            >
              {p}
            </p>
          ))}

          <p
            className="mt-8 inline-block font-hand text-2xl text-bronze"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            → on to the specimens
          </p>
        </div>

        <aside
          className="md:col-span-4 md:col-start-9"
          aria-label="Site characteristics"
        >
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
            Site characteristics
          </h3>
          <dl className="mt-3 border-t border-ink-2/20">
            {f.characteristics.map(([k, v]) => (
              <div
                key={k}
                className="border-b border-ink-2/15 py-3"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
                  {k}
                </dt>
                <dd className="mt-1 font-prose text-base leading-snug text-ink">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </SheetFrame>
  );
}
