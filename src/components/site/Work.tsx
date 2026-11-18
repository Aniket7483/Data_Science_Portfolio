import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";
import { useIsMobile } from "./useReducedMotion";

function ProjectPanel({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className="flex h-full w-screen shrink-0 items-center px-5 md:w-[86vw] md:px-10">
      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="label-mono">
            {p.index} — {p.category}
          </p>
          <h3 className="display-lg mt-4">{p.title}</h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{p.subtitle}</p>
          <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
            {p.highlights.slice(0, 8).map((h) => (
              <li key={h} className="label-mono">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="label-mono border border-border px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/work/$projectId"
            params={{ projectId: p.id }}
            data-cursor="view"
            className="label-mono mt-9 inline-block border-b border-primary pb-1 !text-primary"
          >
            Explore case study →
          </Link>
        </div>
        <div data-cursor="view">
          <ProjectVisual variant={p.visual} />
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const mobile = useIsMobile();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 86}vw`]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) =>
      setActive(Math.min(projects.length - 1, Math.round(v * (projects.length - 1)))),
    );
    return unsub;
  }, [scrollYProgress]);

  if (mobile) {
    return (
      <section id="work" className="border-t border-border py-20">
        <div className="px-5">
          <p className="label-mono">003 — Selected work</p>
          <h2 className="display-lg mt-4">SELECTED WORK</h2>
        </div>
        <div className="mt-12 space-y-24">
          {projects.map((p) => (
            <ProjectPanel key={p.id} p={p} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={ref} className="relative border-t border-border" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute left-10 top-24 z-10">
          <p className="label-mono">003 — Selected work</p>
        </div>
        <ol className="absolute right-10 top-1/2 z-10 -translate-y-1/2 space-y-3 text-right">
          {projects.map((p, i) => (
            <li key={p.id}>
              <span
                className={`label-mono transition-colors duration-300 ${
                  i === active ? "!text-primary" : "opacity-45"
                }`}
              >
                {p.index} {p.title}
              </span>
            </li>
          ))}
        </ol>
        <motion.div style={{ x }} className="flex">
          {projects.map((p) => (
            <ProjectPanel key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}