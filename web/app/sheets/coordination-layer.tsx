"use client";

import { SheetFrame } from "@/components/sheet-frame";
import { useReveal } from "@/components/reveal";
import { atlas } from "@/lib/content";

const VB_W = 760;
const VB_H = 520;
const CX = VB_W / 2;
const CY = 270;
const R = 195;

function polar(angle: number, radius = R) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function wobblyLine(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy);
  const nx = -dy / len;
  const ny = dx / len;
  const wobble = 6 + (len % 7) * 0.4;
  const cx = mx + nx * wobble;
  const cy = my + ny * wobble;
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

export function CoordinationLayer() {
  const d = atlas.coordinationLayer;
  const nodes = d.primitives.map((p) => {
    const pos = polar(p.angle);
    return {
      ...p,
      x: pos.x,
      y: pos.y,
      labelY: p.angle === 270 ? pos.y - 56 : p.angle > 180 ? pos.y - 8 : pos.y + 56,
      labelAnchor: "middle" as const,
    };
  });

  const [linesRef, linesRevealed] = useReveal<SVGGElement>(0.3);

  return (
    <SheetFrame
      expedition={d.expedition}
      date={d.date}
      title={d.title}
      lede={d.lede}
    >
      <figure className="mx-auto max-w-3xl">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="diagram-title diagram-desc"
          className="w-full"
        >
          <title id="diagram-title">
            Coordination layer diagram: five primitives around a central operator
          </title>
          <desc id="diagram-desc">
            Five primitives — Orchestration, Authenticity, Continuity, Sovereignty,
            Experiential Memory — arranged around a central operator node. Each is
            connected to the centre by a wobbly ink line. The lines are typed events;
            the centre holds the keys, audit log, and kill switch.
          </desc>

          <g
            ref={linesRef}
            fill="none"
            stroke="var(--color-ink-2)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.55"
          >
            {nodes.map((n) => (
              <path
                key={n.n}
                d={wobblyLine({ x: CX, y: CY }, { x: n.x, y: n.y })}
                pathLength="100"
                className={`reveal-stroke${
                  linesRevealed ? " is-revealed" : ""
                }`}
              />
            ))}
          </g>

          <circle
            cx={CX}
            cy={CY}
            r="58"
            fill="var(--color-paper)"
            stroke="var(--color-ink)"
            strokeWidth="1.4"
          />
          <circle
            cx={CX}
            cy={CY}
            r="48"
            fill="none"
            stroke="var(--color-ink-2)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            opacity="0.6"
          />
          <text
            x={CX}
            y={CY - 6}
            textAnchor="middle"
            fontFamily="var(--font-jetbrains)"
            fontSize="9"
            letterSpacing="1.6"
            fill="var(--color-ink)"
          >
            THE
          </text>
          <text
            x={CX}
            y={CY + 8}
            textAnchor="middle"
            fontFamily="var(--font-fraunces)"
            fontSize="16"
            fontWeight="400"
            fill="var(--color-ink)"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
          >
            layer
          </text>
          <text
            x={CX}
            y={CY + 24}
            textAnchor="middle"
            fontFamily="var(--font-jetbrains)"
            fontSize="8"
            letterSpacing="1.6"
            fill="var(--color-graphite)"
          >
            OPERATOR · KEYS · LOG
          </text>

          {nodes.map((n) => (
            <g key={n.n}>
              <circle
                cx={n.x}
                cy={n.y}
                r="34"
                fill="var(--color-paper)"
                stroke="var(--color-ink)"
                strokeWidth="1.2"
              />
              <text
                x={n.x}
                y={n.y - 4}
                textAnchor="middle"
                fontFamily="var(--font-jetbrains)"
                fontSize="9"
                letterSpacing="1.6"
                fill="var(--color-graphite)"
              >
                {n.n}
              </text>
              <text
                x={n.x}
                y={n.y + 10}
                textAnchor="middle"
                fontFamily="var(--font-fraunces)"
                fontSize="13"
                fontWeight="400"
                fill="var(--color-ink)"
                style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
              >
                {n.name.charAt(0)}
              </text>
              <text
                x={n.x}
                y={n.labelY}
                textAnchor={n.labelAnchor}
                fontFamily="var(--font-newsreader)"
                fontSize="13"
                fill="var(--color-ink)"
              >
                {n.name}
              </text>
            </g>
          ))}

          <g
            fontFamily="var(--font-caveat)"
            fontSize="16"
            fill="var(--color-bronze)"
          >
            <text x={28} y={VB_H - 30} transform="rotate(-3 28 490)">
              every line is a typed event
            </text>
            <text
              x={VB_W - 28}
              y={VB_H - 30}
              textAnchor="end"
              transform="rotate(2 732 490)"
            >
              the centre holds the keys
            </text>
          </g>
        </svg>

        <figcaption className="mt-4 border-t border-ink-2/15 pt-3 font-prose text-sm italic text-ink-2">
          {d.caption}
        </figcaption>
      </figure>

      <p
        className="mt-10 inline-block font-hand text-2xl text-bronze"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        ↓ see the live field notes
      </p>
    </SheetFrame>
  );
}
