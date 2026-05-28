import { Resend } from "resend";

let cached: Resend | null = null;

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cached) cached = new Resend(key);
  return cached;
}

export function getLeadNotificationRecipients(): string[] {
  const raw =
    process.env.LEAD_NOTIFICATION_EMAILS ||
    process.env.ADMIN_EMAILS ||
    "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function getLeadNotificationFrom(): string {
  return (
    process.env.LEAD_NOTIFICATION_FROM ||
    "Short Kings Empire <leads@shortkingsempire.com>"
  );
}
