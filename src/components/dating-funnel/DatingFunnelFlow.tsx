"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { TypeformPopupButton } from "@/components/typeform/TypeformPopupButton";
import {
  DATING_FUNNEL_INTRO,
  DATING_FUNNEL_QUESTIONS,
  recommendOffer,
  type DatingFunnelAnswers,
  type DatingFunnelRecommendationId,
} from "@/lib/dating-funnel";

const EMPIRE_TYPEFORM_ID = "GVVKVMWI";

type Step = "intro" | "quiz" | "email" | "result";

type PaymentLinks = Partial<Record<DatingFunnelRecommendationId, string | null>>;

type Props = {
  paymentLinks: PaymentLinks;
};

const EMPTY_ANSWERS: DatingFunnelAnswers = {
  height: "56-58",
  pain: "apps",
  readiness: "exploring",
};

export function DatingFunnelFlow({ paymentLinks }: Props) {
  const [step, setStep] = useState<Step>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<DatingFunnelAnswers>(EMPTY_ANSWERS);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);

  const question = DATING_FUNNEL_QUESTIONS[questionIndex];
  const recommendation = useMemo(() => recommendOffer(answers), [answers]);

  const totalQuizSteps = DATING_FUNNEL_QUESTIONS.length;
  const progress =
    step === "intro"
      ? 0
      : step === "quiz"
        ? ((questionIndex + 1) / (totalQuizSteps + 2)) * 100
        : step === "email"
          ? ((totalQuizSteps + 1) / (totalQuizSteps + 2)) * 100
          : 100;

  const checkoutHref =
    paymentLinks[recommendation.id] ?? recommendation.href;

  const saveLead = useCallback(async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name.trim() || undefined,
          source: "dating-funnel",
          message: JSON.stringify({ answers, recommendation: recommendation.id }),
        }),
      });
      if (res.ok) setLeadSaved(true);
    } finally {
      setSubmitting(false);
    }
  }, [answers, email, name, recommendation.id]);

  const onQuizNext = () => {
    if (questionIndex < totalQuizSteps - 1) {
      setQuestionIndex((i) => i + 1);
      return;
    }
    setStep("email");
  };

  const onEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    await saveLead();
    setStep("result");
  };

  return (
    <div className="mx-auto min-h-[70vh] max-w-lg px-4 py-12 sm:py-16">
      <div className="mb-8">
        <div className="h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-ruby transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/45">
          {step === "result" ? "Your match" : DATING_FUNNEL_INTRO.eyebrow}
        </p>
      </div>

      {step === "intro" ? (
        <div>
          <p className="eyebrow text-ruby">{DATING_FUNNEL_INTRO.eyebrow}</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {DATING_FUNNEL_INTRO.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
            {DATING_FUNNEL_INTRO.subtitle}
          </p>
          <div className="royal-phone-frame mx-auto mt-8 max-w-[280px]">
            <div className="royal-phone-screen aspect-[9/16] overflow-hidden">
              <video
                src={DATING_FUNNEL_INTRO.videoSrc}
                poster={DATING_FUNNEL_INTRO.videoPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setStep("quiz")}
            className="btn-primary mt-8 w-full"
          >
            Start assessment
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </button>
        </div>
      ) : null}

      {step === "quiz" && question ? (
        <div>
          <button
            type="button"
            onClick={() => {
              if (questionIndex === 0) setStep("intro");
              else setQuestionIndex((i) => i - 1);
            }}
            className="mb-6 inline-flex items-center gap-1 text-sm text-white/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Question {questionIndex + 1} of {totalQuizSteps}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {question.prompt}
          </h2>
          <p className="mt-2 text-sm leading-7 text-white/60">{question.subtitle}</p>
          <ul className="mt-8 space-y-3">
            {question.options.map((opt) => {
              const selected = answers[question.id] === opt.value;
              return (
                <li key={String(opt.value)}>
                  <button
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [question.id]: opt.value as DatingFunnelAnswers[typeof question.id],
                      }))
                    }
                    className={`flex w-full items-center justify-between rounded-md border px-4 py-4 text-left text-sm transition ${
                      selected
                        ? "border-gold/50 bg-gold/10 text-white"
                        : "border-white/15 bg-stone/40 text-white/80 hover:border-white/25"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {selected ? <Check className="h-4 w-4 shrink-0 text-gold" /> : null}
                  </button>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={onQuizNext} className="btn-primary mt-8 w-full">
            Continue
          </button>
        </div>
      ) : null}

      {step === "email" ? (
        <div>
          <button
            type="button"
            onClick={() => {
              setStep("quiz");
              setQuestionIndex(totalQuizSteps - 1);
            }}
            className="mb-6 inline-flex items-center gap-1 text-sm text-white/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Where should we send your match?
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/65">
            Free chapter from <em>Approach Like a King</em> plus your personalized offer.
            Unsubscribe anytime.
          </p>
          <form onSubmit={onEmailSubmit} className="mt-8 space-y-4">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="mt-2 w-full rounded-md border border-white/15 bg-stone/60 px-4 py-3 text-white placeholder:text-white/35 focus:border-gold/50 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                First name (optional)
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Marcus"
                className="mt-2 w-full rounded-md border border-white/15 bg-stone/60 px-4 py-3 text-white placeholder:text-white/35 focus:border-gold/50 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full disabled:opacity-60"
            >
              {submitting ? "Saving…" : "Show my recommendation"}
            </button>
          </form>
        </div>
      ) : null}

      {step === "result" ? (
        <div>
          <p className="eyebrow text-gold">Your starting move</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">
            {recommendation.title}
          </h2>
          <p className="mt-1 text-sm uppercase tracking-[0.15em] text-white/50">
            {recommendation.eyebrow}
          </p>
          <p className="mt-4 font-display text-2xl font-bold text-gold">
            {recommendation.priceLabel}
          </p>
          <p className="mt-4 text-sm leading-7 text-white/70">
            {recommendation.description}
          </p>
          <p className="mt-4 rounded-md border border-ruby/30 bg-ruby/5 px-4 py-3 text-xs leading-6 text-white/60">
            This link is matched to your answers. If you leave without checking out,
            come back via the same email — we will resend your offer.
          </p>
          {recommendation.typeform ? (
            <TypeformPopupButton
              formId={EMPIRE_TYPEFORM_ID}
              className="btn-primary mt-8 w-full"
            >
              {recommendation.cta}
            </TypeformPopupButton>
          ) : (
            <Link href={checkoutHref} className="btn-primary mt-8 block w-full text-center">
              {recommendation.cta}
            </Link>
          )}
          {recommendation.secondary?.length ? (
            <ul className="mt-4 space-y-2">
              {recommendation.secondary.map((alt) => (
                <li key={alt.href}>
                  <Link
                    href={alt.href}
                    className="block text-center text-sm text-white/55 underline-offset-2 hover:text-gold hover:underline"
                  >
                    {alt.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          {leadSaved ? (
            <p className="mt-6 text-center text-xs text-white/45">
              Check your inbox for the free chapter.
            </p>
          ) : null}
          <Link
            href="/products"
            className="mt-8 block text-center text-sm text-white/50 hover:text-white"
          >
            Browse all products
          </Link>
        </div>
      ) : null}
    </div>
  );
}
