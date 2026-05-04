import { AdminShell } from "@/components/admin/AdminShell";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";

export const metadata = { title: "Admin" };

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // v1: stub auth returns null. When NextAuth lands in Phase 2,
  // the gate flips to redirect("/portal/sign-in?next=/admin").
  const user = await getSessionUser();
  if (process.env.ADMIN_GATE_STRICT === "1" && (!user || !user.isAdmin)) {
    redirect("/");
  }

  return <AdminShell>{children}</AdminShell>;
}
