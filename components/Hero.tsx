"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "./Marquee";

const TICKER = ["GO", "REACT", "JAVASCRIPT", "BASH", "C", "GIT", "LINUX"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const lineOneX = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const lineTwoX = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex flex-col justify-center overflow-hidden pt-16 sm:pt-28 pb-4 sm:pb-8 md:min-h-[100svh]"
    >
      <motion.div style={{ opacity: fade }} className="px-4 sm:px-8">
        <div className="mx-auto max-w-content">
          {/* Main headline */}
          <h1 className="font-display leading-[0.88] uppercase select-none">
            <motion.span
              style={{ x: lineOneX }}
              className="block text-[clamp(2.4rem,8.8vw,8.8vw)] whitespace-nowrap"
            >
              Full — Stack
            </motion.span>
            <motion.span
              style={{ x: lineTwoX }}
              className="block text-[clamp(2.4rem,8.8vw,8.8vw)] whitespace-nowrap text-right md:text-left"
            >
              Engineer<span className="text-accent">.</span>
            </motion.span>
          </h1>

          <motion.p
            style={{ y: subY }}
            className="mt-4 sm:mt-8 max-w-xl text-muted text-xs sm:text-base md:text-lg leading-relaxed"
          >
            I build things end to end — a React interface, the Go service behind
            it, and the Linux box it all runs on. Currently open to full-stack
            and backend-leaning roles.
          </motion.p>
        </div>
      </motion.div>

      {/* Marquee Ticker */}
      <div className="mt-6 sm:mt-12 border-y border-line py-2.5 sm:py-4">
        <Marquee className="font-mono text-[0.7rem] sm:text-base tracking-widest text-muted">
          {TICKER.map((t, i) => (
            <span key={i} className="flex items-center gap-3 sm:gap-6 pr-4 sm:pr-6">
              {t}
              <span className="text-accent">◆</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Scroll indicator — shown on desktop */}
      <motion.div
        className="hidden md:flex mt-8 flex-col items-center gap-1 font-mono text-[0.6rem] uppercase tracking-widest text-muted"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll down
        <span aria-hidden="true">↓</span>
      </motion.div>
    </section>
  );
}
