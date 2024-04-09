import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validate } from "uuid";

function isUUID(str: string) {
  try {
    validate(str);
    return true;
  } catch (error) {
    return false;
  }
}

function hasParam(request: NextRequest, paramName: string) {
  const url = new URL(request.url);

  if (
    url.searchParams.has(paramName) ||
    url.pathname.includes(`/${paramName}/`)
  ) {
  }
}

export function middleware(request: NextRequest) {
  return NextResponse.next();
  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/bookmark", "/following", "/foryou", "/profile", "/setting"],
};
