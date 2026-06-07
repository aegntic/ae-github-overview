import { SheetFrame } from "@/components/sheet-frame";
import { LiveCounter } from "@/components/live-counter";
import { atlas } from "@/lib/content";

function TapeCard({
  date,
  body,
  rotate = 0,
}: {
  date: string;
  body: string;
  rotate?: number;
}) {
  return (
    <article
      className="relative border border-ink-2/20 bg-paper-2/40 p-5 pt-7"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        aria-hidden
        className="absolute -top-2 left-1/2 h-3 w-20 -translate-x-1/2"
        style={{ backgroundColor: "var(--color-tape)", opacity: 0.7 }}
      />
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
        {date}
      </p>
      <p className="mt-2 font-prose text-base leading-relaxed text-ink-2">
        {body}
      </p>
    </article>
  );
}

export function LiveNotes() {
  const n = atlas.liveNotes;
  return (
    <SheetFrame
      expedition={n.expedition}
      date={n.date}
      title={n.title}
      lede={n.lede}
      stampVariant="rubric"
    >
      <ul className="grid grid-cols-1 gap-6 border-y border-ink-2/20 py-8 md:grid-cols-3">
        {n.counters.map((c) => (
          <li
            key={c.label}
            className="flex flex-col gap-2 border-l-2 border-signal/40 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4"
          >
            <LiveCounter target={c.value} />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
              {c.label}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
        Taped to the page
      </h3>
      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {n.tapes.map((t, i) => (
          <TapeCard
            key={t.date}
            date={t.date}
            body={t.body}
            rotate={i === 1 ? 0.8 : i === 2 ? -0.6 : -0.4}
          />
        ))}
      </div>

      <p
        className="mt-10 inline-block font-hand text-2xl text-bronze"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        ↓ the survey is open
      </p>
    </SheetFrame>
  );
}
