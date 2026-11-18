import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./useReducedMotion";

const WORDS = ["DATA", "DESIGN", "TECHNOLOGY"];

export function Intro({ onDone }: { onDone: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState(0); // 0 dots, 1..3 words, 4 name, 5 gone

  const [dots, setDots] = useState<{ id: number; x: number; y: number; d: number }[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 160 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: Math.random() * 1.2,
      })),
    );
  }, []);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    const times = [1500, 2400, 3300, 4200, 6600];
    const timers = times.map((t, i) => window.setTimeout(() => setPhase(i + 1), t));
    const end = window.setTimeout(onDone, 7200);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
    };
  }, [onDone, reduced]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (reduced) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase >= 5 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((p) => (
          <motion.span
            key={p.id}
            className="absolute block rounded-full bg-primary"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: 2, height: 2 }}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={
              phase === 0
                ? { opacity: [0, 0.9], scale: 1, x: (50 - p.x) * 4, y: (50 - p.y) * 4 }
                : phase < 4
                  ? { opacity: 0.35, scale: 1, x: 0, y: 0 }
                  : { opacity: 0, scale: 0.4, x: (50 - p.x) * 1.5, y: (50 - p.y) * 1.5 }
            }
            transition={{ duration: 1.4, delay: p.d * 0.6, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative text-center">
        <AnimatePresence mode="wait">
          {phase >= 1 && phase <= 3 && (
            <motion.h2
              key={WORDS[phase - 1]}
              className="display-xl text-foreground"
              initial={{ opacity: 0, filter: "blur(14px)", y: 18 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(14px)", y: -18 }}
              transition={{ duration: 0.55 }}
            >
              {WORDS[phase - 1]}
            </motion.h2>
          )}
          {phase >= 4 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="display-lg text-foreground">Aniket Arvind Pandit</h1>
              <p className="label-mono mt-5">Data Analyst • Data Science • Creative Technologist</p>
              <motion.p
                className="label-mono mt-10 text-primary"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll to explore ↓
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={onDone}
        className="label-mono absolute bottom-8 right-8 transition-colors hover:text-foreground"
      >
        Skip intro
      </button>
    </motion.div>
  );
}