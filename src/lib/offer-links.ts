/** Canonical checkout / booking URLs for Short Kings offers (SKE-3 brief). */
export const OFFER_LINKS = {
  gameplan: "https://calendly.com/shortkingsempire/gameplan",
  datingSystem: "https://buy.stripe.com/4gM28r4h47fLeq71fs43S0s",
  strategyCall: "https://calendly.com/shortkingsempire/strategy-call-with-axel",
  coaching: "https://buy.stripe.com/6oUaEXbJwcA5gyf0bo43S0t",
  empire: "https://form.typeform.com/to/GVVKVMWI",
  builtDifferent: "https://www.trainerize.me/profile/skefitness/Axel.Cruz/",
} as const;

export const DATING_SYSTEM_INCLUDES = [
  "The Text That Lands",
  "The Standing Man",
  "What She's Actually Thinking",
  "Dating Decoded",
  "The Inner Game",
  "The Swipe",
  "Dress Tall",
  "Short King",
  "Bonus: Short Kings Style Guide",
  "Bonus: 30 Day Challenge Tracker",
] as const;

export const STRATEGY_CALL_INCLUDES = [
  "60 minute 1 on 1 call with Axel",
  "Full diagnosis of what's holding you back",
  "Dating app profile audit",
  "Real conversation breakdown",
  "Written game plan sent after the call",
  "$100 credited toward coaching if you start within 7 days",
] as const;

export const BUILT_DIFFERENT_INCLUDES = [
  "Training program built for a shorter frame",
  "Nutrition protocol for fat loss or muscle gain",
  "Daily session guidance inside the Trainerize app",
  "Start the same day you buy",
] as const;

/** Shared Tier 3 comparison rows. Row 1 label differs per card. */
export const TIER3_SHARED_ROWS = [
  "Monday goals and Friday check ins",
  "Personalized game plan, updated every month",
  "Conversation and date reviews on calls",
  "All 8 ebooks free on signup",
  "Direct WhatsApp access, call or text anytime",
  "Real conversations reviewed as they happen",
  "Prep before every date, debrief after",
  "Dating profile rebuilt and monitored by Axel",
  "Body language and style breakdown",
  "Built Different gym program included (delivered via Trainerize)",
  "Your relationship roadmap",
] as const;

export const COACHING_ROW1 = "2 coaching calls per month (45 min each)";
export const EMPIRE_ROW1 = "Weekly 1 on 1 calls, 12 total";

export type CompareRow = { label: string; included: boolean };

export function coachingCompareRows(): CompareRow[] {
  return [
    { label: COACHING_ROW1, included: true },
    ...TIER3_SHARED_ROWS.map((label, i) => ({
      label,
      included: i < 4,
    })),
  ];
}

export function empireCompareRows(): CompareRow[] {
  return [
    { label: EMPIRE_ROW1, included: true },
    ...TIER3_SHARED_ROWS.map((label) => ({ label, included: true })),
  ];
}
