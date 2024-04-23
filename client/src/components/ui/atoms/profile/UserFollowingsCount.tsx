import React from "react";
import StatusContainer from "./StatusContainer";
import { auth } from "@/auth";

export default async function UserFollowingsCount() {
  let token: string = "";

  const session = await auth();
  if (session?.user?.name) {
    token = session.user.name;
  }

  return <StatusContainer count={2} label="followings" />;
}
