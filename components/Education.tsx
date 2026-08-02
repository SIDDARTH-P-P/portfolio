import { Reveal } from "./Reveal";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-5 md:px-8 border-b border-line">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16 flex-wrap gap-3">
            <p className="eyebrow">02 / Education</p>
            <p className="font-mono text-xs text-muted">
              ({String(EDUCATION.length).padStart(2, "0")})
            </p>
          </div>
        </Reveal>

        <div>
          {EDUCATION.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.08}>
              <div className="border-t border-line last:border-b py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
                <div>
                  <span className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                    {item.period}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl uppercase leading-tight">
                    {item.degree}
                  </h3>
                  <p className="text-muted text-sm md:text-base mt-1">{item.place}</p>
                </div>
                <span
                  className={`font-mono text-xs uppercase tracking-widest border border-line rounded-full px-4 py-2 w-fit ${
                    item.status === "Pursuing" ? "text-accent2" : "text-muted"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
