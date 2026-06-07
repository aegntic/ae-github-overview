import type { ReactNode } from "react";
import { RubricStamp } from "./rubric-stamp";

type SheetFrameProps = {
  expedition: string;
  date: string;
  title: string;
  lede?: string;
  stampVariant?: "ink" | "rubric";
  children: ReactNode;
};

export function SheetFrame({
  expedition,
  date,
  title,
  lede,
  stampVariant = "ink",
  children,
}: SheetFrameProps) {
  return (
    <section
      aria-labelledby={`sheet-${expedition.replace(".", "").replace(" ", "")}`}
      className="relative mx-auto my-16 w-full max-w-[1180px] px-6 md:px-10"
    >
      <div
        aria-hidden
        className="border border-ink-2/20 bg-paper-2/40"
        style={{
          backgroundImage:
            "linear-gradient(180deg, var(--color-paper-2) 0%, var(--color-paper) 32px)",
        }}
      >
        <header className="flex items-center justify-between border-b border-ink-2/15 px-6 py-3 md:px-10">
          <RubricStamp
            expedition={expedition}
            date={date}
            variant={stampVariant}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
            field atlas
          </span>
        </header>

        <div className="px-6 pb-12 pt-10 md:px-12 md:pb-16 md:pt-14">
          <h2
            id={`sheet-${expedition.replace(".", "").replace(" ", "")}`}
            className="font-display text-4xl font-light text-ink md:text-5xl"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
          >
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 max-w-2xl font-prose text-lg leading-relaxed text-ink-2">
              {lede}
            </p>
          ) : null}
          <div className="mt-10 md:mt-12">{children}</div>
        </div>

        <footer className="flex items-center justify-between border-t border-ink-2/15 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite md:px-10">
          <span>filed open · aegntic research</span>
          <span>{expedition}</span>
        </footer>
      </div>
    </section>
  );
}
