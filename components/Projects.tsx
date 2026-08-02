"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-8 border-b border-line">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16 flex-wrap gap-3">
            <p className="eyebrow">03 / Featured projects</p>
            <p className="font-mono text-xs text-muted">
              ({String(PROJECTS.length).padStart(2, "0")})
            </p>
          </div>
        </Reveal>

        <div>
          {PROJECTS.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={project.title} delay={i * 0.06}>
                <div className="border-t border-line last:border-b">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-6 md:py-8 flex flex-col gap-2 group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-muted uppercase tracking-widest">
                        {String(i + 1).padStart(2, "0")} — {project.context}
                      </span>
                      <span
                        className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                          isOpen ? "text-accent" : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {isOpen ? "close" : "deep dive"}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl uppercase leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 md:pb-10 grid md:grid-cols-[2fr_1fr] gap-6">
                          <p className="text-muted max-w-xl">{project.description}</p>
                          <div className="flex flex-col gap-4">
                            <ul className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <li
                                  key={tag}
                                  className="font-mono text-xs border border-line rounded-full px-3 py-1 text-accent2"
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                            <div className="flex gap-5 font-mono text-xs uppercase tracking-widest">
                              <a href={project.github} className="border-b border-line hover:border-accent hover:text-accent transition-colors pb-0.5">
                                GitHub →
                              </a>
                              <a href={project.demo} className="border-b border-line hover:border-accent hover:text-accent transition-colors pb-0.5">
                                Live demo →
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
