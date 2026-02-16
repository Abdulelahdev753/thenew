import { type ReactNode } from "react";

interface MarqueeProps {
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  children: ReactNode;
}

/* Each group repeats children 3× so a single group (~3500px)
   is always wider than the viewport. The -50% keyframe scrolls
   exactly one group width, then loops seamlessly.
   Duration is scaled by REPEATS to keep perceived speed the same. */
const REPEATS = 3;

export default function Marquee({
  speed = 30,
  direction = "left",
  pauseOnHover = false,
  className = "",
  children,
}: MarqueeProps) {
  const animationDirection = direction === "left" ? "normal" : "reverse";
  const duration = speed * REPEATS;

  return (
    <div
      dir="ltr"
      data-marquee
      data-pause-on-hover={pauseOnHover || undefined}
      className={`overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        data-marquee-track
        className="flex w-max"
        style={
          {
            "--marquee-speed": `${duration}s`,
            "--marquee-direction": animationDirection,
          } as React.CSSProperties
        }
      >
        {/* Group 1 */}
        <div className="flex shrink-0 items-center">
          {Array.from({ length: REPEATS }, (_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {children}
            </div>
          ))}
        </div>
        {/* Group 2 (identical clone) */}
        <div aria-hidden className="flex shrink-0 items-center">
          {Array.from({ length: REPEATS }, (_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
