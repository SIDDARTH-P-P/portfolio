"use client";

import { useState } from "react";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { PROFILE } from "@/lib/data";

const EMAIL = PROFILE.email;
const GITHUB = PROFILE.github;
const LINKEDIN = PROFILE.linkedin;

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  }

  return (
    <section id="contact" className="border-b border-line">
      {/* Infinite scrolling marquee banner */}
      <div className="py-3 border-y border-line overflow-hidden bg-surface/30">
        <Marquee className="font-display text-2xl sm:text-4xl md:text-5xl uppercase text-accent">
          {["Let's talk", "Let's collaborate", "Say hello", "Build something together"].map((text, idx) => (
            <span key={idx} className="flex items-center gap-4 sm:gap-6 pr-6">
              {text} <span className="text-ink opacity-40">—</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">05 / Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase leading-tight max-w-3xl mb-4">
            Got a role, a project,<br className="hidden sm:block" /> or just want to say hi?
          </h2>
          <p className="text-muted text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            I&apos;m currently open to full-time engineering positions and select freelance projects. Feel free to reach out anytime!
          </p>
        </Reveal>

        {/* Action card & info grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Main Direct Email Card */}
          <Reveal delay={0.08}>
            <div className="h-full border border-line rounded-2xl p-6 sm:p-8 bg-surface flex flex-col justify-between gap-6 hover:border-accent/40 transition-colors">
              <div>
                <span className="eyebrow mb-3 block text-accent font-semibold">Direct Email</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-mono text-base sm:text-xl md:text-2xl text-ink hover:text-accent transition-colors break-all font-medium block"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-mono text-xs uppercase tracking-widest bg-accent text-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  Send Email <span>→</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="font-mono text-xs uppercase tracking-widest border border-line rounded-xl px-5 py-3 hover:border-accent hover:text-accent transition-colors bg-bg/50"
                >
                  {copied ? "Copied ✓" : "Copy Email"}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Social Links & Availability Badge */}
          <Reveal delay={0.16}>
            <div className="h-full flex flex-col justify-between gap-6">
              {/* Online presence card */}
              <div className="border border-line rounded-2xl p-6 sm:p-8 bg-surface">
                <p className="eyebrow mb-4">Find me online</p>
                <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest">
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group py-2 border-b border-line/60 text-muted hover:text-ink transition-colors"
                  >
                    <span>GitHub</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group py-2 border-b border-line/60 text-muted hover:text-ink transition-colors"
                  >
                    <span>LinkedIn</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-between group py-2 text-muted hover:text-ink transition-colors"
                  >
                    <span>Download Resume</span>
                    <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-accent/30 bg-accent/5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
                  Available for new roles &amp; opportunities
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
