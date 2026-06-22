import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("bohara_admin_session");
  const { pathname } = request.nextUrl;

  // Protect admin routes except login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Basic format check of the AES-GCM token (iv:ciphertext:tag)
    const token = session.value;
    const parts = token.split(":");
    if (parts.length !== 3) {
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("bohara_admin_session");
      return response;
    }
  }

  // Redirect to dashboard if trying to access login page while already authenticated
  if (pathname === "/admin/login") {
    if (session) {
      const parts = session.value.split(":");
      if (parts.length === 3) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
