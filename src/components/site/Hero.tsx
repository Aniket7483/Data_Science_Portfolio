import { motion } from "motion/react";
import { ParticleField } from "./ParticleField";

const line1 = "I BUILD WITH DATA.";
const line2 = "AND COMMUNICATE THROUGH DESIGN.";

function Kinetic({ text, delay = 0, muted }: { text: string; delay?: number; muted?: boolean }) {
  return (
    <span className="block overflow-hidden">
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`mr-[0.25em] inline-block ${muted ? "text-muted-foreground" : ""}`}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <ParticleField className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 grain-lines opacity-40" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <motion.p
          className="label-mono mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Data. Design. Digital thinking.
        </motion.p>
        <h1 className="display-xl max-w-[16ch]">
          <Kinetic text={line1} delay={0.15} />
          <Kinetic text={line2} delay={0.45} muted />
        </h1>
        <motion.p
          className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Data-focused. Technically curious. Visually driven.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <a
            href="#work"
            data-cursor="explore"
            className="label-mono border border-primary px-6 py-3 !text-primary transition-colors hover:bg-primary hover:!text-primary-foreground"
          >
            Explore my work
          </a>
          <a
            href="#about"
            data-cursor="text"
            className="label-mono border border-border px-6 py-3 transition-colors hover:border-foreground hover:!text-foreground"
          >
            About me
          </a>
        </motion.div>
      </div>
    </section>
  );
}