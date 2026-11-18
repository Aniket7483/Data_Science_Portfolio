import { motion } from "motion/react";

const ROLES = [
  {
    period: "Jun 2024 — Dec 2024",
    year: "2024",
    role: "Data Science Intern",
    org: "AI Variant",
    env: "Machine learning & experimentation",
    points: [
      "Python",
      "Machine Learning",
      "Data preprocessing",
      "EDA",
      "Statistics",
      "Predictive modelling",
      "Visualization",
      "ML experimentation",
    ],
  },
  {
    period: "Dec 2024 — Oct 2025",
    year: "2024–2025",
    role: "Freelance Data Analyst",
    org: "Independent",
    env: "Dashboards & analytics",
    points: [
      "Data analysis",
      "Data cleaning",
      "Exploratory Data Analysis",
      "Data visualization",
      "Business reporting",
      "Dashboard creation",
      "Python · Pandas · NumPy",
      "Power BI · Excel · SQL",
    ],
  },
 {
  period: "Nov 2025 — Present",
  year: "2025–Present",
  role: "Data Analyst",
  org: "Param Skills Training India Pvt. Ltd.",
  env: "Data analytics & business intelligence",
  points: [
    "Data analysis",
    "Data visualization",
    "Business intelligence",
    "MIS reporting",
    "Dashboard development",
    "Data cleaning & preprocessing",
    "Excel reporting & automation",
    "Power BI",
    "Python-based data analysis",
    "Information visualization"
  ],
},
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label-mono">005 — Experience</p>
        <h2 className="display-lg mt-5 max-w-[16ch]">A career that compounds.</h2>

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 md:gap-10">
          {ROLES.map((r, i) => (
            <motion.article
              key={r.role}
              className="min-w-[85vw] snap-start border border-border bg-card/30 p-7 md:min-w-[420px] md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <p className="label-mono !text-primary">{r.year}</p>
              <h3 className="mt-6 font-display text-2xl tracking-tight md:text-3xl">{r.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.org}</p>
              <p className="label-mono mt-1">{r.period}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent">{r.env}</p>
              <ul className="mt-6 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="border-b border-border/60 pb-2 text-sm text-foreground/80">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
