import { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  durationClass = "",
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  durationClass?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`marquee-track ${reverse ? "marquee-track-reverse" : ""} ${durationClass}`}
      >
        <span className="flex shrink-0 items-center">{children}</span>
        <span className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  );
}
