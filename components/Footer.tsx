"use client";

import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-8 border-t border-line/60 bg-bg/50">
      <div className="mx-auto max-w-content flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted text-center sm:text-left">
        <div>
          <span className="text-ink font-medium">{PROFILE.name}</span>
          <span className="mx-2 text-line">·</span>
          <span>{PROFILE.location}</span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-accent border border-line hover:border-accent rounded-full px-4 py-1.5 transition-colors bg-surface/30"
        >
          Back to top ↑
        </button>

        <span>© {new Date().getFullYear()} — All rights reserved</span>
      </div>
    </footer>
  );
}
