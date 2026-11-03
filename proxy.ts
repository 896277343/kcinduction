// Proxy for lightweight auth checks on protected admin routes
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/admin"];
const removedContentRoutes = ["/posts", "/pages"];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (removedContentRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    return new NextResponse("This legacy content is no longer available.", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=300",
      },
    });
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const authCookie = request.cookies.get("admin_auth");

    if (!authCookie) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/posts/:path*", "/pages/:path*"],
};
