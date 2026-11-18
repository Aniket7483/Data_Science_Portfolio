import { motion } from "motion/react";
import { useState } from "react";

const BRANCHES = [
  {
    group: "ANALYTICS",
    items: [
      ["Python", "Core language for analysis and automation."],
      ["Pandas", "Tabular data wrangling and transformation."],
      ["NumPy", "Numerical computation and array operations."],
      ["SQL", "Querying and shaping relational data."],
      ["Excel", "Fast modelling, cleaning and business reporting."],
      ["Power BI", "Dashboards and business intelligence reporting."],
    ],
  },
  {
    group: "MACHINE LEARNING",
    items: [
      ["Scikit-learn", "Classical modelling, pipelines and evaluation."],
      ["TensorFlow", "Deep learning experimentation."],
      ["PyTorch", "Research-style model building."],
      ["Keras", "Rapid neural network prototyping."],
      ["XGBoost", "Gradient boosting on structured data."],
      ["LightGBM", "Fast boosting for large tabular datasets."],
    ],
  },
  {
    group: "AI / COMPUTER VISION",
    items: [
      ["Hugging Face", "Pretrained models and NLP workflows."],
      ["OpenCV", "Image processing and vision pipelines."],
      ["YOLO / Ultralytics", "Object detection experimentation."],
    ],
  },
  {
    group: "DEVELOPMENT",
    items: [
      ["Python", "Backend logic and data services."],
      ["JavaScript", "Interactive interfaces and web logic."],
      ["HTML", "Semantic structure."],
      ["CSS", "Layout, motion and visual systems."],
      ["React", "Component-driven interfaces."],
      ["Flask", "Lightweight APIs and model serving."],
    ],
  },
  {
    group: "DESIGN",
    items: [
      ["Graphic Design", "Visual systems for corporate communication."],
      ["Presentation Design", "Turning dense information into narrative."],
      ["Branding", "Consistent identity across touchpoints."],
      ["Visual Communication", "Making complexity readable."],
      ["AI-assisted Design", "Generative tooling inside creative workflows."],
    ],
  },
];

export function Skills() {
  const [hint, setHint] = useState<string>("Hover a node to read what it does.");

  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label-mono">007 — Ecosystem</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg">
            DATA <span className="text-muted-foreground">at the centre.</span>
          </h2>
          <p className="label-mono max-w-sm !normal-case !tracking-normal !text-accent">{hint}</p>
        </div>

        <div className="mt-16 space-y-12">
          {BRANCHES.map((b, bi) => (
            <div key={b.group} className="grid gap-5 border-t border-border pt-8 md:grid-cols-[220px_1fr] md:gap-12">
              <p className="label-mono">{b.group}</p>
              <div className="flex flex-wrap gap-3">
                {b.items.map(([name, desc], i) => (
                  <motion.span
                    key={`${b.group}-${name}`}
                    data-cursor="explore"
                    onMouseEnter={() => setHint(`${name} — ${desc}`)}
                    className="cursor-default border border-border px-4 py-2 font-mono text-xs tracking-wide transition-colors hover:border-primary hover:text-primary"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: bi * 0.03 + i * 0.03, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}