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
      { message: ACCOUNT_MESSAGE },
      { status: 401 },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/download/:path*"],
};
