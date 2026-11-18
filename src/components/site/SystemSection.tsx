import { motion } from "motion/react";
import { useRef, useState } from "react";

const NODES = [
  { label: "ANALYSIS", x: 50, y: 8 },
  { label: "AI", x: 88, y: 28 },
  { label: "PRODUCTS", x: 84, y: 76 },
  { label: "VISUALIZATION", x: 50, y: 93 },
  { label: "DESIGN", x: 16, y: 76 },
  { label: "TECHNOLOGY", x: 12, y: 28 },
];

export function SystemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [m, setM] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label-mono">002 — The system</p>
        <h2 className="display-lg mt-5 max-w-[18ch]">Everything I do connects back to data.</h2>

        <div
          ref={ref}
          data-cursor="explore"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setM({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
          }}
          className="relative mt-16 h-[480px] w-full md:h-[620px]"
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {NODES.map((n) => (
              <motion.line
                key={n.label}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="currentColor"
                className={active === n.label ? "text-primary" : "text-border"}
                strokeWidth={active === n.label ? 0.35 : 0.15}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
            ))}
          </svg>

          <motion.div
            className="absolute flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary md:h-36 md:w-36"
            style={{ left: "50%", top: "50%" }}
            animate={{
              scale: 1 + Math.min(Math.hypot(m.x - 50, m.y - 50) / 260, 0.25),
              boxShadow: "0 0 60px color-mix(in oklab, var(--primary) 25%, transparent)",
            }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
          >
            <span className="font-display text-lg tracking-tight text-primary md:text-2xl">DATA</span>
          </motion.div>

          {NODES.map((n) => {
            const dist = Math.hypot(m.x - n.x, m.y - n.y);
            const near = dist < 22;
            return (
              <motion.div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                onMouseEnter={() => setActive(n.label)}
                onMouseLeave={() => setActive(null)}
                animate={{ scale: near ? 1.15 : 1 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
              >
                <span
                  className={`label-mono whitespace-nowrap border px-3 py-2 backdrop-blur-sm transition-colors ${
                    near ? "border-primary !text-primary" : "border-border"
                  }`}
                >
                  {n.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}