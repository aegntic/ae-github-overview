import { SheetFrame } from "@/components/sheet-frame";
import { atlas } from "@/lib/content";

export function Cover() {
  const c = atlas.cover;
  return (
    <article aria-labelledby="cover-title">
      <div className="relative mx-auto my-12 w-full max-w-[1180px] px-6 md:px-10">
        <div
          aria-hidden
          className="border border-ink-2/20 bg-paper-2/40 px-6 py-8 md:px-12 md:py-10"
        >
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/ae-logo.png"
                alt="Aegntic"
                width={120}
                height={66}
                className="h-12 w-auto md:h-14"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                aegntic.ai
              </span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
              {c.expedition} · {c.date}
            </p>
          </div>
        </div>
      </div>

      <SheetFrame
        expedition={c.expedition}
        date={c.date}
        title={c.title}
        stampVariant="rubric"
      >
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p
              className="font-display text-3xl font-light leading-[1.15] text-ink md:text-5xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              {c.subtitle}
            </p>

            <p className="mt-10 max-w-xl font-prose text-lg leading-relaxed text-ink-2">
              {c.note}
            </p>
          </div>

          <aside
            className="md:col-span-4 md:col-start-9"
            aria-label="Filing details"
          >
            <dl className="border-t border-ink-2/20">
              {c.byline.map(([k, v]) => (
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
              className="mt-8 font-hand text-2xl text-bronze"
              style={{ transform: "rotate(-2deg)" }}
            >
              ↓ continue to field site
            </p>
          </aside>
        </div>
      </SheetFrame>
    </article>
  );
}
