import { motion } from "motion/react";

const ITEMS = [
  { t: "Corporate design", d: "Identity-consistent collateral for internal and client-facing communication." },
  { t: "Posters", d: "Editorial-led campaign and announcement posters." },
  { t: "Presentations", d: "Dense information restructured into narrative decks." },
  { t: "Event creatives", d: "Visual systems across event touchpoints." },
  { t: "Recruitment creatives", d: "Hiring communication built for clarity and reach." },
  { t: "Branding", d: "Marks, type and colour systems applied consistently." },
  { t: "Marketing material", d: "Digital and print assets for ongoing campaigns." },
  { t: "AI-assisted visuals", d: "Generative tooling folded into production workflows." },
];

export function VisualWork() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label-mono">009 — Visual work</p>
        <h2 className="display-lg mt-5 max-w-[18ch]">
          Design is how the analysis <span className="text-muted-foreground">gets understood.</span>
        </h2>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.t}
              data-cursor="text"
              className="group relative overflow-hidden bg-background p-8 md:p-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                style={{ originY: 1 }}
                transition={{ duration: 0.4 }}
              />
              <p className="label-mono relative">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="relative mt-5 font-display text-2xl tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                {it.t}
              </h3>
              <p className="relative mt-3 max-w-md text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
        <p className="label-mono mt-8">Selected samples available on request.</p>
      </div>
    </section>
  );
}