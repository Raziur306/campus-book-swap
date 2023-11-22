import { NextRequest, NextResponse } from "next/server";
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userToken = request.cookies.get("user_token")?.value;

  const isUserRoute =
    pathname == "/" ||
    pathname == "/search" ||
    pathname == "/contribute" ||
    pathname == "/pending-and-requests" ||
    pathname == "/about" ||
    pathname.includes("/book-details") ||
    pathname == "/profile";

  if (isUserRoute) {
    if (!userToken) {
      return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
    } else {
      return NextResponse.next();
    }
  }

  if (pathname.includes("/email-verification") && userToken) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  const isLoginSignUpRoute = pathname == "/sign-in" || pathname == "/sign-up";

  if (isLoginSignUpRoute) {
    if (userToken) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
};

export const config = {
  matcher: ["/:path*", "/admin/:path*"],
};
