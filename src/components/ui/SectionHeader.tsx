import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  titleTop: string;
  titleHighlight: string;
  titleSuffix?: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: "gold" | "red";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  titleTop,
  titleHighlight,
  titleSuffix,
  subtitle,
  align = "left",
  accent = "gold",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", accent === "red" && "eyebrow-red")}>
          {eyebrow}
        </p>
      ) : null}
      <div className={cn(align === "center" && "flex flex-col items-center")}>
        <h2 className="font-display text-[2.5rem] font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          <span className="block">{titleTop}</span>
          <span className="block gold-gradient">{titleHighlight}</span>
          {titleSuffix ? (
            <span className="block text-white">{titleSuffix}</span>
          ) : null}
        </h2>
        <div className="section-divider" aria-hidden />
      </div>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-[1.05rem] leading-relaxed text-white/60",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
