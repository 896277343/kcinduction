// Proxy for lightweight auth checks on protected admin routes
import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

const protectedRoutes = ["/admin"];
const removedContentRoutes = ["/posts", "/pages"];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const firstSegment = pathname.split("/")[1];
  const publicPath = isLocale(firstSegment)
    ? `/${pathname.split("/").slice(2).join("/")}`
    : pathname;

  if (removedContentRoutes.some((route) => publicPath === route || publicPath.startsWith(`${route}/`))) {
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

  if (!isLocale(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") url.protocol = "http:";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|admin|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)", "/admin/:path*"],
};
