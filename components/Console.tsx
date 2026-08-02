"use client";

import { useEffect, useRef, useState } from "react";
import { PROFILE, PROJECTS, EDUCATION, SKILLS } from "@/lib/data";

type Line = { type: "input" | "output" | "error"; text: string };

const SECTION_IDS = ["about", "education", "projects", "stack", "contact"];

function buildTree() {
  const projectLines = PROJECTS.map(
    (p, i) => `│   ${i === PROJECTS.length - 1 ? "└──" : "├──"} ${p.slug}.md`
  ).join("\n");
  return [
    "/",
    "├── about.md",
    "├── education.md",
    "├── projects/",
    projectLines,
    "├── stack.md",
    "└── contact.md",
  ].join("\n");
}

const HELP_TEXT = [
  "Available commands:",
  "  help              show this help",
  "  tree /            show the filesystem",
  "  ls /              list top-level entries",
  "  ls /projects      list all projects",
  "  cat about.md      read about note",
  "  cat education.md  read education",
  "  cat stack.md      read tech stack",
  "  cat contact.md    read contact info",
  "  whoami            who's behind this",
  "  open <section>    jump to a section",
  "  clear             clear the console",
  "  esc / ctrl+`      close the console",
].join("\n");

function runCommand(raw: string): { lines: Line[]; clear?: boolean; open?: string } {
  const cmd = raw.trim();
  const lower = cmd.toLowerCase();

  if (lower === "") return { lines: [] };
  if (lower === "help") return { lines: [{ type: "output", text: HELP_TEXT }] };
  if (lower === "clear") return { lines: [], clear: true };
  if (lower === "whoami") {
    return {
      lines: [
        {
          type: "output",
          text: `${PROFILE.name} — ${PROFILE.role}\n${PROFILE.location}`,
        },
      ],
    };
  }
  if (lower === "tree /" || lower === "tree") {
    return { lines: [{ type: "output", text: buildTree() }] };
  }
  if (lower === "ls /" || lower === "list /" || lower === "ls" || lower === "list") {
    return {
      lines: [
        { type: "output", text: "about.md  education.md  projects/  stack.md  contact.md" },
      ],
    };
  }
  if (lower === "ls /projects" || lower === "list /projects") {
    const text = PROJECTS.map((p) => `${p.slug}.md   — ${p.title}`).join("\n");
    return { lines: [{ type: "output", text }] };
  }
  if (lower === "cat about.md") {
    return {
      lines: [
        {
          type: "output",
          text: `Full-stack developer, building things end to end.\nFocus: Full-stack development\nCore stack: Go · React · Bash\nBased in: ${PROFILE.location}`,
        },
      ],
    };
  }
  if (lower === "cat education.md") {
    const text = EDUCATION.map(
      (e) => `${e.period}  ${e.degree} — ${e.place} [${e.status}]`
    ).join("\n");
    return { lines: [{ type: "output", text }] };
  }
  if (lower === "cat stack.md") {
    return { lines: [{ type: "output", text: SKILLS.join(" · ") }] };
  }
  if (lower === "cat contact.md") {
    return {
      lines: [
        {
          type: "output",
          text: `email:    ${PROFILE.email}\ngithub:   ${PROFILE.github}\nlinkedin: ${PROFILE.linkedin}`,
        },
      ],
    };
  }

  const openMatch = lower.match(/^(open|cd)\s+\/?(.+)$/);
  if (openMatch) {
    const target = openMatch[2].replace(/\.md$|\/$/, "");
    if (SECTION_IDS.includes(target)) {
      return { lines: [{ type: "output", text: `Opening /${target} …` }], open: target };
    }
    return {
      lines: [{ type: "error", text: `bash: no such section '${target}'` }],
    };
  }

  return {
    lines: [
      {
        type: "error",
        text: `bash: command not found: ${cmd}\nType 'help' for available commands.`,
      },
    ],
  };
}

export function Console() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = value;
    const result = runCommand(cmd);

    if (result.clear) {
      setHistory([]);
      setValue("");
      return;
    }

    setHistory((h) => [...h, { type: "input", text: cmd }, ...result.lines]);
    setValue("");

    if (result.open) {
      setTimeout(() => {
        document.getElementById(result.open!)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }, 350);
    }
  }

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open console"
        title="Open terminal (Ctrl+`)"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-line bg-bg/80 backdrop-blur-md text-muted hover:text-accent hover:border-accent transition-colors shadow-lg"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"/>
          <line x1="12" y1="19" x2="20" y2="19"/>
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setOpen(false)}
        >
          {/* Console Modal — responsive height, compact title bar */}
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl h-[360px] sm:h-[440px] max-h-[85vh] rounded-xl border border-white/10 bg-[#0d0f0e] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Title Bar */}
            <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 h-9 sm:h-10 bg-[#161917] border-b border-white/8">
              {/* macOS Traffic Lights */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setOpen(false)}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57] hover:opacity-80 transition-opacity"
                  aria-label="Close modal"
                />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
              </div>

              {/* Title */}
              <div className="flex items-center gap-1.5 font-mono text-[0.6rem] sm:text-xs text-white/50 uppercase tracking-widest">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7cf29a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"/>
                  <line x1="12" y1="19" x2="20" y2="19"/>
                </svg>
                <span>portfolio-fs</span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="text-white/30 hover:text-white/80 transition-colors p-1"
                aria-label="Close console"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Output Scroll Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto font-mono text-[0.72rem] sm:text-[0.78rem] leading-relaxed px-3 sm:px-4 py-2.5 console-scroll"
              onClick={() => inputRef.current?.focus()}
            >
              <p className="text-white/35 whitespace-pre-line mb-2 text-[0.65rem] sm:text-[0.7rem]">
                {`Portfolio Filesystem — type 'help' for commands`}
              </p>

              {history.map((line, i) =>
                line.type === "input" ? (
                  <div key={i} className="mt-2 flex items-start gap-1.5">
                    <span className="text-[#7cf29a] shrink-0">❯</span>
                    <span className="text-white/90">{line.text}</span>
                  </div>
                ) : (
                  <p
                    key={i}
                    className={`whitespace-pre-line ml-3.5 mt-0.5 text-[0.7rem] sm:text-[0.72rem] ${
                      line.type === "error" ? "text-[#ff8a7a]" : "text-white/60"
                    }`}
                  >
                    {line.text}
                  </p>
                )
              )}
            </div>

            {/* Input Row */}
            <form
              onSubmit={submit}
              className="shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-t border-white/8 bg-[#0d0f0e]"
            >
              <span className="font-mono text-[0.72rem] sm:text-xs text-[#7cf29a] shrink-0 select-none">❯</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder="type a command…"
                className="flex-1 bg-transparent font-mono text-[0.72rem] sm:text-xs text-white/90 placeholder:text-white/20 outline-none border-none ring-0 caret-[#7cf29a] focus:outline-none"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
