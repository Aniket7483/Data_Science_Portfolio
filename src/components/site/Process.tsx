import { motion } from "motion/react";

const STEPS = [
  { n: "01", t: "UNDERSTAND", d: "Frame the real question before touching data." },
  { n: "02", t: "COLLECT", d: "Gather, structure and validate the sources." },
  { n: "03", t: "ANALYZE", d: "Explore, clean, test assumptions, find the signal." },
  { n: "04", t: "BUILD", d: "Turn the logic into a working system." },
  { n: "05", t: "VISUALIZE", d: "Make the result legible at a glance." },
  { n: "06", t: "ITERATE", d: "Refine against feedback and reality." },
  { n: "07", t: "DELIVER", d: "Ship it in a form people can actually use." },
];

export function Process() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label-mono">006 — How I think</p>
        <h2 className="display-lg mt-5">HOW I SOLVE PROBLEMS</h2>
        <div className="mt-16">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              data-cursor="text"
              className="group grid grid-cols-[54px_1fr] items-baseline gap-5 border-t border-border py-7 transition-colors hover:border-primary md:grid-cols-[90px_260px_1fr] md:gap-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <span className="label-mono">{s.n}</span>
              <span className="font-display text-2xl tracking-tight transition-colors group-hover:text-primary md:text-4xl">
                {s.t}
              </span>
              <span className="col-span-2 text-sm text-muted-foreground md:col-span-1">{s.d}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}