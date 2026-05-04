import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  titleTop: string;
  titleHighlight: string;
  titleSuffix?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * The canonical Short Kings section header:
 *   eyebrow (gold, tracked, uppercase)
 *   H2 line 1 (white)
 *   H2 line 2 in gold-gradient
 *   optional subtitle
 */
export function SectionHeader({
  eyebrow,
  titleTop,
  titleHighlight,
  titleSuffix,
  subtitle,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="font-royal text-3xl font-black uppercase tracking-[-0.02em] text-white sm:text-5xl leading-[1.05]">
        <span className="block">{titleTop}</span>
        <span className="block gold-gradient">{titleHighlight}</span>
        {titleSuffix ? <span className="block">{titleSuffix}</span> : null}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-7 text-white/65 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
