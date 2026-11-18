import { useEffect, useRef, useState } from "react";

const LABELS: Record<string, string> = {
  view: "VIEW",
  explore: "EXPLORE",
  talk: "LET'S TALK",
  text: "",
};

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("cursor-none-desktop");
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]") as HTMLElement | null;
      setMode(el?.dataset["cursor"] ?? null);
    };

    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, []);

  const label = mode ? LABELS[mode] : "";
  const expanded = Boolean(label);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full border border-primary text-primary transition-[width,height,background-color,opacity] duration-200 [@media(pointer:fine)]:flex"
      style={{
        opacity: visible ? 1 : 0,
        width: expanded ? 88 : mode === "text" ? 32 : 14,
        height: expanded ? 88 : mode === "text" ? 32 : 14,
        backgroundColor: expanded ? "color-mix(in oklab, var(--primary) 14%, transparent)" : "transparent",
        backdropFilter: expanded ? "blur(2px)" : undefined,
      }}
    >
      <span className="label-mono !text-[10px] text-primary">{label}</span>
    </div>
  );
}