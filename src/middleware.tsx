import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const pathSplitName = path.split("/")[1];
  const userId = request.cookies.get("userid")?.value || "";
  const authToken = request.cookies.get("authtoken")?.value || "";
  const cookies = userId && authToken;
  const publicPath = pathSplitName === "register" || pathSplitName === "login";

  console.log(path, "path");

  if (!publicPath && !cookies) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if (publicPath && !cookies) {
  //   return NextResponse.redirect(new URL(`/${pathSplitName}`, request.url));
  // }

  if (publicPath && cookies) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/", "/dashboard", "/login", "/register"],
};
