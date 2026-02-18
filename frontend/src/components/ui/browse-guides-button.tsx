import { type AnchorHTMLAttributes } from "react";

interface BrowseGuidesButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function BrowseGuidesButton({
  children,
  className,
  ...props
}: BrowseGuidesButtonProps) {
  return (
    <a
      href="#products"
      className={[
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-[#FF6A2A] via-[#F44900] to-[#C93B00] px-8 text-sm font-semibold text-white",
        "shadow-[0_0_20px_rgba(244,73,0,0.35)] [filter:drop-shadow(0_0_10px_rgba(244,73,0,0.45))]",
        "transition-all duration-200 active:scale-95 active:shadow-[0_0_34px_rgba(244,73,0,0.55)] active:[filter:drop-shadow(0_0_18px_rgba(244,73,0,0.60))]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A57]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {/* Top highlight overlay */}
      <span className="pointer-events-none absolute inset-0 rounded-full [background:linear-gradient(to_bottom,rgba(255,255,255,0.20),rgba(255,255,255,0)_30%)]" />
      {/* Inner orange edge glow ring */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[#F44900]/25" />
      <span className="relative">{children}</span>
    </a>
  );
}
