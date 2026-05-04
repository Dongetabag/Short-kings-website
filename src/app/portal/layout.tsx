import { PortalShell } from "@/components/portal/PortalShell";

export const metadata = { title: "Portal" };

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PortalShell>{children}</PortalShell>;
}
