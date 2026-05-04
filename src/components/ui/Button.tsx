import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-black hover:bg-goldLight active:bg-goldDark shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]",
  secondary:
    "border border-gold/40 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-gold/70",
  ghost: "text-white/70 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  type = "button",
  disabled,
  onClick,
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], disabled && "opacity-60 cursor-not-allowed", className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
