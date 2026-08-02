"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";

function CountUp({ target, duration = 1.2 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>{String(value).padStart(String(target).length, "0")}</span>
  );
}

const STATS = [
  { target: 3, label: "Featured projects" },
  { target: 7, label: "Core tools & languages" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8 border-b border-line">
      <div className="mx-auto max-w-content grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 items-end">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <p className="font-display text-6xl md:text-8xl leading-none">
              <CountUp target={stat.target} />
            </p>
            <p className="eyebrow mt-3">{stat.label}</p>
          </Reveal>
        ))}
        <Reveal delay={0.2} className="hidden md:block">
          <p className="font-display text-6xl md:text-8xl leading-none text-accent">
            ∞
          </p>
          <p className="eyebrow mt-3">Terminal tabs currently open</p>
        </Reveal>
      </div>
    </section>
  );
}
