/**
 * Auth helpers — currently stub-driven so the app builds without secrets.
 * Phase 2 wires NextAuth v5 magic links + Resend; this file is the seam.
 */

export type SessionUser = {
  email: string;
  name?: string | null;
  isAdmin: boolean;
  entitlements: string[];
};

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "axel@shortkingsempire.com")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

/**
 * v1 stub: returns null. Phase 2 will read from NextAuth.
 */
export async function getSessionUser(): Promise<SessionUser | null> {
  return null;
}
