import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";
import api from "./lib/apis";
import { signOut } from "next-auth/react";
export async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user?.name) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  const res = await api.VerifyToken(session.user.name);

  if (!res.status) {
    await signOut({
      redirect: false,
    });
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
