import { motion } from "motion/react";

const LINES = [
  ["Bioinformatics", "gave me a foundation in computational thinking."],
  ["Data Science", "taught me how to model information."],
  ["Freelance analytics", "taught me how to solve practical problems."],
  ["Building applications", "taught me how to turn ideas into systems."],
  ["Graphic design", "taught me how to communicate those ideas visually."],
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label-mono">008 — About</p>
        <motion.h2
          className="display-lg mt-5 max-w-[20ch]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          MY CAREER DOESN'T FOLLOW A STRAIGHT LINE.
        </motion.h2>

        <div className="mt-16 max-w-4xl">
          {LINES.map(([a, b], i) => (
            <motion.p
              key={a}
              className="border-t border-border py-6 text-lg leading-snug md:text-2xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
            >
              <span className="text-primary">{a}</span>{" "}
              <span className="text-muted-foreground">{b}</span>
            </motion.p>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            ["DATA", "is my foundation."],
            ["TECHNOLOGY", "is my tool."],
            ["DESIGN", "is how I communicate."],
          ].map(([k, v], i) => (
            <motion.div
              key={k}
              className="border-t border-primary/50 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <p className="font-display text-3xl tracking-tight md:text-5xl">{k}</p>
              <p className="mt-3 text-sm text-muted-foreground">{v}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid gap-6 border-t border-border pt-10 md:grid-cols-[220px_1fr] md:gap-12">
          <p className="label-mono">Education</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl tracking-tight md:text-4xl">B.Sc. Bioinformatics</h3>
              <p className="mt-2 text-sm text-muted-foreground">Deogiri College, Aurangabad</p>
            </div>
            <p className="font-mono text-3xl text-primary md:text-5xl">70.59%</p>
          </div>
        </div>
      </div>
    </section>
  );
}