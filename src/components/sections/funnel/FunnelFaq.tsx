import { Reveal } from "@/components/ui/Reveal";
import { FUNNEL_FAQ } from "@/lib/home-funnel";

export function FunnelFaq() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="space-y-10">
          {FUNNEL_FAQ.map((item, i) => (
            <Reveal key={item.question} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <div>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  {item.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
