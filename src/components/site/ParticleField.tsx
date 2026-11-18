import { useEffect, useRef } from "react";
import { usePrefersReducedMotion, useIsMobile } from "./useReducedMotion";

type Props = { density?: number; connect?: boolean; className?: string };

export function ParticleField({ density = 1, connect = true, className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = Math.round((mobile ? 40 : 110) * density);
    const pts = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      r: Math.random() * 1.4 + 0.4,
    }));
    const mouse = { x: -1, y: -1 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        const near = mouse.x >= 0 && d < 0.14;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r * (near ? 2.2 : 1), 0, Math.PI * 2);
        ctx.fillStyle = near ? "rgba(120,210,255,0.9)" : "rgba(160,180,200,0.32)";
        ctx.fill();
      }
      if (connect && !mobile) {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i]!;
            const b = pts[j]!;
            const dx = (a.x - b.x) * w;
            const dy = (a.y - b.y) * h;
            const dist = Math.hypot(dx, dy);
            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(a.x * w, a.y * h);
              ctx.lineTo(b.x * w, b.y * h);
              ctx.strokeStyle = `rgba(120,190,230,${0.1 * (1 - dist / 110)})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [density, connect, mobile, reduced]);

  return <canvas ref={ref} aria-hidden className={className ?? "absolute inset-0 h-full w-full"} />;
}