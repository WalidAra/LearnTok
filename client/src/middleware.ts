import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";
export async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/bookmark",
    "/following",
    "/foryou",
    "/profile",
    "/setting",
    "/upload",
    "/notifications",
  ],
};
