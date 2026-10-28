import { NextRequest, NextResponse } from "next/server";
import { detectLocale, isLocale, localeCookie } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split("/")[1];
  const savedLocale = request.cookies.get(localeCookie)?.value;

  if (isLocale(pathLocale)) {
    const response = NextResponse.next();
    if (savedLocale !== pathLocale) {
      response.cookies.set(localeCookie, pathLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }
    return response;
  }

  const locale = isLocale(savedLocale)
    ? savedLocale
    : detectLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and files like /cv-eng.pdf or /helmes.png
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
