import { SectionHeader } from "@/components/ui/SectionHeader";
import { Crown, Mail, Shield, CreditCard } from "lucide-react";

export const metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeader
        eyebrow="Account"
        titleTop="Your"
        titleHighlight="profile."
        subtitle="The administrative bits. Edit and forget."
      />

      <div className="mt-10 space-y-5">
        <Card icon={Mail} title="Email">
          <p className="text-sm text-white/65">Sign-in email and order receipts go here.</p>
          <input
            disabled
            value="placeholder@shortkingsempire.com"
            className="mt-3 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/65"
          />
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/35">
            Email change wiring lands in Phase 2 with magic-link auth.
          </p>
        </Card>

        <Card icon={Crown} title="Entitlements">
          <ul className="mt-2 space-y-2 text-sm text-white/65">
            <li>· The Full Library · active</li>
            <li>· King&apos;s Counsel AI · trial (7 days remaining)</li>
            <li>· Free Fitness Library · active</li>
          </ul>
        </Card>

        <Card icon={CreditCard} title="Billing">
          <p className="text-sm text-white/65">
            Subscription and one-time orders are managed by Stripe.
          </p>
          <button
            disabled
            className="mt-3 inline-flex h-10 items-center rounded-md border border-white/15 px-4 text-xs uppercase tracking-[0.18em] text-white/45"
          >
            Open billing portal · Setup pending
          </button>
        </Card>

        <Card icon={Shield} title="Sign in everywhere">
          <p className="text-sm text-white/65">
            Magic-link sign-in. No passwords. Phase 2 wires this to Resend.
          </p>
        </Card>
      </div>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-6">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-gold" />
        <h2 className="font-royal text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </article>
  );
}
