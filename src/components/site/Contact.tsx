import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const LINKS = [
  { label: "EMAIL ME", value: "aniketpandit112@gmail.com", href: "mailto:aniketpandit112@gmail.com" },
  { label: "LINKEDIN", value: "aniket-pandit", href: "https://www.linkedin.com/in/aniket-pandit-060620239/" },
  { label: "GITHUB", value: "Aniket7483", href: "https://github.com/Aniket7483" },
];

function Converge() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      const r = c.getBoundingClientRect();
      w = r.width;
      h = r.height;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 220 }, () => ({ x: Math.random(), y: Math.random() }));
    let t = 0;
    let raf = 0;
    let running = false;
    const io = new IntersectionObserver(([e]) => {
      running = Boolean(e?.isIntersecting);
    });
    io.observe(c);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      if (running) t = Math.min(t + 0.004, 1);
      const e = t * t * (3 - 2 * t);
      for (const p of pts) {
        const x = p.x * w + (0.5 * w - p.x * w) * e;
        const y = p.y * h + (0.5 * h - p.y * h) * e;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120,210,255,${0.5 - e * 0.3})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-28 md:py-40">
      <Converge />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label-mono">010 — Contact</p>
        <motion.h2
          className="display-xl mt-6 max-w-[14ch]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          GOT A PROBLEM WORTH SOLVING?
        </motion.h2>
        <p className="mt-8 text-lg text-muted-foreground">
          Data. AI. Technology. Design. <span className="text-foreground">Let's build something interesting.</span>
        </p>

        <div className="mt-14 border-t border-border">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              data-cursor="talk"
              className="group grid grid-cols-1 gap-1 border-b border-border py-6 transition-colors hover:bg-primary/5 md:grid-cols-[220px_1fr] md:items-baseline"
            >
              <span className="label-mono">{l.label}</span>
              <span className="font-display text-xl tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                {l.value}
              </span>
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            data-cursor="talk"
            className="group grid grid-cols-1 gap-1 border-b border-border py-6 transition-colors hover:bg-primary/5 md:grid-cols-[220px_1fr] md:items-baseline"
          >
            <span className="label-mono">RESUME</span>
            <span className="font-display text-xl tracking-tight transition-colors group-hover:text-primary md:text-3xl">
              Download resume ↓
            </span>
          </a>
        </div>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4">
          <p className="label-mono">Aniket Arvind Pandit — Data. Design. Digital thinking.</p>
          <p className="label-mono">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}