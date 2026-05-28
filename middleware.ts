import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const ACCOUNT_MESSAGE = "You need an account to access this content.";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = Boolean(token);

  if (pathname.startsWith("/api/download/") && !isAuthenticated) {
    return NextResponse.json(
      {
        message: ACCOUNT_MESSAGE,
        redirectTo: "/portal/counsel",
      },
      { status: 401 },
    );
  }

  if (pathname.startsWith("/portal/") && !isAuthenticated) {
    // Prevent redirect loops while still sending users to the account entrypoint.
    if (pathname === "/portal/counsel") {
      return NextResponse.next();
    }

    const redirectUrl = new URL("/portal/counsel", request.url);
    redirectUrl.searchParams.set("message", ACCOUNT_MESSAGE);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*", "/api/download/:path*"],
};
