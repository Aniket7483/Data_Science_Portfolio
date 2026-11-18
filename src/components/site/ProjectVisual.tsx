import { motion } from "motion/react";
import type { Project } from "@/content/projects";

const stroke = "stroke-primary";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-card/40">
      <div className="pointer-events-none absolute inset-0 grain-lines opacity-30" />
      <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
        {children}
      </svg>
    </div>
  );
}

const rise = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { delay: i * 0.08, duration: 0.7 },
});

export function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  if (variant === "erp") {
    return (
      <Frame>
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={16 + i * 58}
            y={20}
            width={46}
            height={30}
            className={`${stroke} fill-none`}
            strokeWidth={0.6}
            {...rise(i)}
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.rect
            key={`b${i}`}
            x={18 + i * 24}
            width={12}
            className="fill-primary/60"
            initial={{ height: 0, y: 125 }}
            whileInView={{ height: 14 + ((i * 37) % 45), y: 125 - (14 + ((i * 37) % 45)) }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.07, duration: 0.8, ease: "easeOut" }}
          />
        ))}
        <line x1="10" y1="125" x2="190" y2="125" className="stroke-border" strokeWidth={0.5} />
      </Frame>
    );
  }

  if (variant === "finance") {
    return (
      <Frame>
        <motion.path
          d="M12 110 C 45 80, 60 105, 85 70 S 140 55, 188 28"
          className={`${stroke} fill-none`}
          strokeWidth={0.9}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {Array.from({ length: 26 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={12 + i * 7}
            cy={30 + ((i * 53) % 90)}
            r={1.4}
            className="fill-accent"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
          />
        ))}
      </Frame>
    );
  }

  if (variant === "recruitment") {
    const stages = ["APPLIED", "SELECTED", "JOINING", "JOINED"];
    return (
      <Frame>
        {stages.map((s, i) => (
          <g key={s}>
            <motion.text
              x={14 + i * 46}
              y={20}
              className="fill-muted-foreground"
              style={{ fontSize: 5, letterSpacing: 0.6 }}
              {...rise(i)}
            >
              {s}
            </motion.text>
            {Array.from({ length: 12 - i * 2 }).map((_, j) => (
              <motion.circle
                key={j}
                cx={16 + i * 46 + (j % 4) * 8}
                cy={40 + Math.floor(j / 4) * 9}
                r={2}
                className={i === 3 ? "fill-primary" : "fill-foreground/40"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + j * 0.03, duration: 0.6 }}
              />
            ))}
          </g>
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.rect
            key={`c${i}`}
            x={20 + i * 34}
            width={20}
            className="fill-accent/50"
            initial={{ height: 0, y: 132 }}
            whileInView={{ height: 12 + i * 6, y: 132 - (12 + i * 6) }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.08, duration: 0.7 }}
          />
        ))}
      </Frame>
    );
  }

  if (variant === "web") {
    return (
      <Frame>
        <motion.rect x={24} y={18} width={152} height={114} className="fill-none stroke-border" strokeWidth={0.6} {...rise(0)} />
        <motion.rect x={24} y={18} width={152} height={12} className="fill-primary/25" {...rise(1)} />
        {[0, 1, 2].map((i) => (
          <motion.rect key={i} x={34 + i * 48} y={44} width={38} height={30} className="fill-foreground/10" {...rise(2 + i)} />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <motion.rect key={`l${i}`} x={34} y={84 + i * 9} width={120 - i * 22} height={3} className="fill-foreground/20" {...rise(5 + i)} />
        ))}
      </Frame>
    );
  }

  if (variant === "nlp") {
    return (
      <Frame>
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.rect
            key={i}
            x={14 + (i % 8) * 21}
            y={26 + Math.floor(i / 8) * 12}
            width={16}
            height={6}
            className="fill-foreground/20"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
          />
        ))}
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.circle
            key={`v${i}`}
            cx={20 + (i % 12) * 14}
            cy={70 + Math.floor(i / 12) * 14}
            r={1.6}
            className="fill-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.02 }}
          />
        ))}
        <motion.rect x={60} y={108} width={80} height={22} className="fill-none stroke-primary" strokeWidth={0.7} {...rise(8)} />
        <motion.text x={78} y={122} className="fill-primary" style={{ fontSize: 6, letterSpacing: 1 }} {...rise(9)}>
          PREDICTION
        </motion.text>
      </Frame>
    );
  }

  if (variant === "campaign") {
    return (
      <Frame>
        {["DATASET", "FEATURES", "MODEL", "PREDICT"].map((s, i) => (
          <g key={s}>
            <motion.rect x={10 + i * 46} y={60} width={38} height={22} className="fill-none stroke-border" strokeWidth={0.6} {...rise(i)} />
            <motion.text x={14 + i * 46} y={74} className="fill-muted-foreground" style={{ fontSize: 4.6, letterSpacing: 0.5 }} {...rise(i)}>
              {s}
            </motion.text>
            {i < 3 && (
              <motion.line
                x1={48 + i * 46}
                y1={71}
                x2={56 + i * 46}
                y2={71}
                className="stroke-primary"
                strokeWidth={0.6}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2 }}
              />
            )}
          </g>
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.rect
            key={i}
            x={14 + i * 20}
            width={10}
            className="fill-primary/50"
            initial={{ height: 0, y: 136 }}
            whileInView={{ height: 8 + ((i * 29) % 30), y: 136 - (8 + ((i * 29) % 30)) }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.05, duration: 0.6 }}
          />
        ))}
      </Frame>
    );
  }

  return (
    <Frame>
      {Array.from({ length: 30 }).map((_, i) => {
        const y = 20 + i * 3.6;
        const off = Math.sin(i * 0.5) * 26;
        return (
          <g key={i}>
            <motion.circle cx={100 + off} cy={y} r={1.7} className="fill-primary" {...rise(i * 0.2)} />
            <motion.circle cx={100 - off} cy={y} r={1.7} className="fill-accent" {...rise(i * 0.2)} />
            <motion.line
              x1={100 + off}
              y1={y}
              x2={100 - off}
              y2={y}
              className="stroke-border"
              strokeWidth={0.4}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            />
          </g>
        );
      })}
    </Frame>
  );
}