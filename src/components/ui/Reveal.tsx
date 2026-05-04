"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  stagger?: 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, className, stagger, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("active");
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={cn(
        "reveal",
        stagger && `stagger-${stagger}`,
        className
      )}
    >
      {children}
    </Tag>
  );
}
