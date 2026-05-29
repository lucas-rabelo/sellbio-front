import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(
  request: NextRequest,
) {
  const accessToken =
    request.cookies.get(
      "accessToken",
    );

  const isAuthRoute =
    request.nextUrl.pathname.startsWith(
      "/login",
    );

  if (
    !accessToken &&
    !isAuthRoute
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};