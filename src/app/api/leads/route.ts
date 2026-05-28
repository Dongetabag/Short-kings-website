import { NextResponse } from "next/server";
import { z } from "zod";
import {
  getLeadNotificationFrom,
  getLeadNotificationRecipients,
  getResend,
} from "@/lib/resend";

export const runtime = "nodejs";

const Schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  source: z.enum([
    "fitness-magnet",
    "calendly-inquiry",
    "newsletter",
    "dating-funnel",
  ]),
  message: z.string().max(2000).optional(),
});

type Lead = z.infer<typeof Schema>;

type DatingFunnelMessage = {
  answers?: {
    height?: string;
    pain?: string;
    readiness?: string;
  };
  recommendation?: string;
};

function parseDatingFunnelMessage(raw: string | undefined): DatingFunnelMessage | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as DatingFunnelMessage;
    if (parsed && typeof parsed === "object") return parsed;
    return null;
  } catch {
    return null;
  }
}

function buildSubject(lead: Lead, funnel: DatingFunnelMessage | null): string {
  const who = lead.name?.trim() || lead.email;
  if (lead.source === "dating-funnel" && funnel?.recommendation) {
    return `New dating-funnel lead → ${funnel.recommendation} (${who})`;
  }
  return `New ${lead.source} lead (${who})`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(lead: Lead, funnel: DatingFunnelMessage | null): string {
  const rows: Array<[string, string]> = [
    ["Email", lead.email],
    ["Name", lead.name?.trim() || "—"],
    ["Source", lead.source],
  ];

  if (lead.source === "dating-funnel" && funnel) {
    if (funnel.recommendation) rows.push(["Matched offer", funnel.recommendation]);
    if (funnel.answers?.height) rows.push(["Height", funnel.answers.height]);
    if (funnel.answers?.pain) rows.push(["Biggest pain", funnel.answers.pain]);
    if (funnel.answers?.readiness) rows.push(["Readiness", funnel.answers.readiness]);
  } else if (lead.message) {
    rows.push(["Message", lead.message]);
  }

  const tableRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#888;font-size:13px;">${escapeHtml(k)}</td><td style="padding:6px 0;color:#111;font-size:14px;font-weight:600;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#fafafa;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;padding:24px;border:1px solid #eee;">
    <p style="margin:0 0 4px;color:#888;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">Short Kings Empire</p>
    <h1 style="margin:0 0 16px;font-size:18px;color:#111;">${escapeHtml(buildSubject(lead, funnel))}</h1>
    <table style="border-collapse:collapse;width:100%;">${tableRows}</table>
    <p style="margin:20px 0 0;color:#666;font-size:12px;">Reply directly to the lead at <a href="mailto:${escapeHtml(lead.email)}" style="color:#111;">${escapeHtml(lead.email)}</a>.</p>
  </div>
</body></html>`;
}

async function notify(lead: Lead, funnel: DatingFunnelMessage | null): Promise<void> {
  const resend = getResend();
  const recipients = getLeadNotificationRecipients();
  if (!resend || recipients.length === 0) {
    console.log("[lead]", {
      ...lead,
      funnel,
      notify: resend ? "no-recipients" : "no-resend-key",
    });
    return;
  }

  try {
    await resend.emails.send({
      from: getLeadNotificationFrom(),
      to: recipients,
      replyTo: lead.email,
      subject: buildSubject(lead, funnel),
      html: buildHtml(lead, funnel),
    });
  } catch (err) {
    console.error("[lead] resend failed", {
      ...lead,
      funnel,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}

export async function POST(req: Request) {
  let parsed: Lead;
  try {
    const body = await req.json();
    parsed = Schema.parse(body);
  } catch (err) {
    return NextResponse.json(
      {
        error: "invalid",
        message: err instanceof Error ? err.message : "Bad request",
      },
      { status: 400 },
    );
  }

  const funnel =
    parsed.source === "dating-funnel"
      ? parseDatingFunnelMessage(parsed.message)
      : null;

  await notify(parsed, funnel);

  return NextResponse.json({ ok: true });
}
