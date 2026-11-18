import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const LINKS = [
  { label: "WORK", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 60));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`flex items-center justify-between px-5 transition-all duration-500 md:px-10 ${
          solid
            ? "border-b border-border bg-background/70 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6"
        }`}
      >
        <a href="#top" data-cursor="text" className="font-display text-sm tracking-tight md:text-base">
          Aniket Arvind Pandit
        </a>
        <div className="flex items-center gap-5 md:gap-8">
          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} data-cursor="text" className="label-mono transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="label-mono flex items-center gap-2 text-primary">
            <motion.span
              className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="hidden sm:inline">Available for opportunities</span>
          </span>
        </div>
      </nav>
    </motion.header>
  );
}