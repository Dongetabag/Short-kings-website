import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  preset?: string;
  className?: string;
};

/** @deprecated Decorative side icons removed — passthrough wrapper only. */
export function FloatingSectionFrame({ children, className }: Props) {
  return <div className={cn("relative", className)}>{children}</div>;
}
