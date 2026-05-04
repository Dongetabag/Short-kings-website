import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const Schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  source: z.enum(["fitness-magnet", "calendly-inquiry", "newsletter"]),
  message: z.string().max(2000).optional(),
});

export async function POST(req: Request) {
  let parsed;
  try {
    const body = await req.json();
    parsed = Schema.parse(body);
  } catch (err) {
    return NextResponse.json(
      {
        error: "invalid",
        message: err instanceof Error ? err.message : "Bad request",
      },
      { status: 400 }
    );
  }

  // Phase 2 wires Resend + Neon. v1 logs and acknowledges so the form works.
  console.log("[lead]", parsed);

  return NextResponse.json({ ok: true });
}
