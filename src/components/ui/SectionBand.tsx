import { cn } from "@/lib/cn";

type Variant = "hero" | "default" | "red" | "gold" | "alt";

const VARIANT_CLASS: Record<Variant, string> = {
  hero: "section-band section-band-hero",
  default: "section-band",
  red: "section-band section-band-red",
  gold: "section-band section-band-gold",
  alt: "section-band section-band-alt",
};

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  id?: string;
};

/** Full-width section rhythm — no floating background icons. */
export function SectionBand({
  children,
  variant = "default",
  className,
  id,
}: Props) {
  return (
    <div id={id} className={cn(VARIANT_CLASS[variant], className)}>
      {children}
    </div>
  );
}
