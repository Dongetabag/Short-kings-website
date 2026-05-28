import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  // Providers are configured when NextAuth is fully wired.
  providers: [],
  session: { strategy: "jwt" },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
