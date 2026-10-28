import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  detectLocale,
  isEnabledLocale,
  isLocale,
  isMultilingual,
  localeCookie,
} from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split("/")[1];
  const savedLocale = request.cookies.get(localeCookie)?.value;

  if (isEnabledLocale(pathLocale)) {
    const response = NextResponse.next();
    if (isMultilingual && savedLocale !== pathLocale) {
      response.cookies.set(localeCookie, pathLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  const rest = pathname === "/" ? "" : pathname;

  // A switched-off language (e.g. an old /et link) falls back to the default
  if (isLocale(pathLocale)) {
    url.pathname =
      pathname.replace(
        `/${pathLocale}`,
        isMultilingual ? `/${defaultLocale}` : "",
      ) || "/";
    return NextResponse.redirect(url);
  }

  if (!isMultilingual) {
    url.pathname = `/${defaultLocale}${rest}`;
    return NextResponse.rewrite(url);
  }

  const locale = isEnabledLocale(savedLocale)
    ? savedLocale
    : detectLocale(request.headers.get("accept-language"));

  url.pathname = `/${locale}${rest}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and files like /cv-eng.pdf or /helmes.png
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
