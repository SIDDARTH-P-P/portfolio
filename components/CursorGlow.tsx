"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(hover: none)");
    if (mq.matches || coarse.matches) return;

    function handleMove(e: PointerEvent) {
      ref.current?.style.setProperty("--spot-x", `${e.clientX}px`);
      ref.current?.style.setProperty("--spot-y", `${e.clientY}px`);
    }
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] hidden md:block"
      style={{
        background:
          "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 20%), color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)",
      }}
    />
  );
}
