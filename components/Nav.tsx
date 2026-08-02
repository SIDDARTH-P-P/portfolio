"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/useTheme";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function ThemeToggle({ isLight, toggle }: { isLight: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      aria-pressed={isLight}
      className="w-8 h-8 shrink-0 rounded-full border border-line bg-surface flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const { isLight, toggle } = useTheme();

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-35% 0px -35% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/90 border-b border-line">
      {/* Dynamic responsive header row */}
      <div className="mx-auto max-w-content px-4 md:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 min-h-[52px]">
        {/* Left: Identity info — fully visible on all screen sizes */}
        <div className="flex items-center gap-4 sm:gap-8 min-w-0">
          <div className="min-w-0 flex flex-col justify-center">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink truncate leading-tight font-semibold">
              {PROFILE.name}
            </p>
            <p className="font-mono text-[0.58rem] sm:text-[0.65rem] md:text-xs uppercase tracking-widest text-muted truncate leading-tight mt-0.5">
              {PROFILE.location} <span className="opacity-40">·</span> {PROFILE.role}
            </p>
          </div>
        </div>

        {/* Right: navigation controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Desktop inline navigation */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors ${
                  active === link.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle isLight={isLight} toggle={toggle} />

          <a
            href="#contact"
            className="hidden sm:inline-flex font-mono text-xs uppercase tracking-widest border border-line rounded-full px-4 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            Contact
          </a>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden flex flex-col justify-center gap-[4px] w-8 h-8 items-center rounded-lg border border-line/60 bg-surface/40 shrink-0"
          >
            <span className={`w-4 h-[1.5px] bg-ink transition-transform duration-200 ${open ? "rotate-45 translate-y-[5.5px]" : ""}`} />
            <span className={`w-4 h-[1.5px] bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`w-4 h-[1.5px] bg-ink transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="md:hidden border-t border-line font-mono text-xs uppercase tracking-widest bg-bg/95 backdrop-blur-lg">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`block px-5 py-3 border-b border-line/50 transition-colors ${
                active === link.id ? "text-accent bg-surface/50 font-medium" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
