import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react";
import { useRef } from "react";

const WORDS = ["INSIGHT", "DESIGN", "EXPERIENCE"];

function MorphWord({ word, start, p }: { word: string; start: number; p: MotionValue<number> }) {
  const opacity = useTransform(p, [start, start + 0.07, start + 0.16, start + 0.22], [0, 1, 1, 0]);
  const blur = useTransform(p, [start, start + 0.07], ["blur(20px)", "blur(0px)"]);
  return (
    <motion.h2
      className="display-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
      style={{ opacity, filter: blur }}
    >
      {word}
    </motion.h2>
  );
}

export function Signature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const pathLength = useTransform(p, [0.1, 0.55], [0, 1]);
  const scatterOpacity = useTransform(p, [0, 0.25, 0.5], [1, 1, 0]);

  const dots = Array.from({ length: 48 }, (_, i) => ({
    x: 6 + i * 1.95,
    y: 90 - ((i * 2.1) % 60) - Math.sin(i * 0.4) * 8,
  }));

  return (
    <section ref={ref} className="relative h-[300vh] border-t border-border">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <p className="label-mono absolute left-5 top-24 md:left-10">004 — Data becomes design</p>
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-80">
          <motion.g style={{ opacity: scatterOpacity }}>
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={0.5} className="fill-primary" />
            ))}
          </motion.g>
          <motion.polyline
            points={dots.map((d) => `${d.x},${d.y}`).join(" ")}
            className="fill-none stroke-accent"
            strokeWidth={0.25}
            style={{ pathLength }}
          />
        </svg>
        <div className="relative text-center">
          {WORDS.map((w, i) => (
            <MorphWord key={w} word={w} start={0.35 + i * 0.2} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}