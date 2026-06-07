type StampProps = {
  expedition: string;
  date: string;
  variant?: "ink" | "rubric";
  className?: string;
};

export function RubricStamp({
  expedition,
  date,
  variant = "ink",
  className = "",
}: StampProps) {
  const stroke = variant === "rubric" ? "var(--color-rubric)" : "var(--color-ink)";
  const text = variant === "rubric" ? "var(--color-rubric)" : "var(--color-ink)";
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] ${className}`}
      aria-hidden
    >
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ backgroundColor: stroke }}
      />
      <span style={{ color: text }}>{expedition}</span>
      <span className="opacity-30" style={{ color: text }}>
        ·
      </span>
      <span style={{ color: text }}>{date}</span>
    </div>
  );
}
