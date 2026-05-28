/**
 * Auth helpers — currently stub-driven so the app builds without secrets.
 * Phase 2 wires NextAuth v5 magic links + Resend; this file is the seam.
 */
import { auth } from "@/auth";

export type SessionUser = {
  email: string;
  name?: string | null;
  isAdmin: boolean;
  entitlements: string[];
};

type SessionWithEntitlements = {
  user?: {
    email?: string | null;
    name?: string | null;
    entitlements?: unknown;
  };
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
 * Reads user identity + entitlements from the active NextAuth session.
 */
export async function getSessionUser(): Promise<SessionUser | null> {
  try {
    const session = (await auth()) as SessionWithEntitlements | null;
    const user = session?.user;
    const email = user?.email ?? null;
    if (!email) return null;

    const entitlements = Array.isArray(user?.entitlements)
      ? user.entitlements.filter((v): v is string => typeof v === "string")
      : [];

    return {
      email,
      name: user?.name ?? null,
      isAdmin: isAdminEmail(email),
      entitlements,
    };
  } catch {
    // Until NextAuth is fully configured, treat as signed out.
    return null;
  }
}
