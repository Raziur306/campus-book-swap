import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/tokenverifier";
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userToken = request.cookies.get("user_token")?.value;

  const isUserRoute =
    pathname == "/" ||
    pathname == "/search" ||
    pathname == "/contribute" ||
    pathname == "/my-contribution" ||
    pathname == "/about" ||
    pathname.includes("/book-details") ||
    pathname == "/profile" ||
    pathname.includes("/view-your-book") ||
    pathname == "/chats";

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
  const isLoginSignUpRoute =
    pathname == "/sign-in" ||
    pathname == "/sign-up" ||
    pathname == "/email-verification" ||
    pathname.includes("/reset-password");

  if (isLoginSignUpRoute) {
    if (userToken) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }

  const isAdminRoute = pathname.includes("/admin");
  if (isAdminRoute) {
    const user = await verifyToken(`${userToken}`);
    if (user && user.role == "admin") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
};

export const config = {
  matcher: ["/:path*"],
};
