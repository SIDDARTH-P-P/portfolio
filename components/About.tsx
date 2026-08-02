import { Reveal } from "./Reveal";
import { PROFILE } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="pt-8 sm:pt-20 pb-16 sm:pb-32 px-4 sm:px-6 md:px-8 border-b border-line">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow mb-4">01 / About</p>
        </Reveal>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 sm:gap-10 md:gap-16 items-start">
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.08] mb-5">
              Comfortable at every layer of the stack.
            </h2>
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mb-4 leading-relaxed">
              I&apos;m a full-stack developer who likes building things end to
              end — from a React interface down to the Go service and the
              Linux box it runs on. I spend as much time in a terminal as I do
              in an editor, and I like tools that stay out of the way so the
              work can move fast.
            </p>
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              I care about clean APIs, predictable systems, and code that&apos;s
              easy for the next person — often future me — to read at 2am
              during an incident.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-line rounded-2xl p-5 sm:p-6 md:p-7 bg-surface">
              <p className="eyebrow mb-4">Quick facts</p>
              <dl className="space-y-3.5 font-mono text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 border-b border-line/40 pb-3">
                  <dt className="text-muted">Focus</dt>
                  <dd className="sm:text-right font-medium text-ink">Full-stack development</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 border-b border-line/40 pb-3">
                  <dt className="text-muted">Core stack</dt>
                  <dd className="sm:text-right font-medium text-ink">Go · React · Bash</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 border-b border-line/40 pb-3">
                  <dt className="text-muted">Based in</dt>
                  <dd className="sm:text-right font-medium text-ink">{PROFILE.location}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 pt-0.5">
                  <dt className="text-muted">Status</dt>
                  <dd className="sm:text-right text-accent font-semibold">Open to work</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
