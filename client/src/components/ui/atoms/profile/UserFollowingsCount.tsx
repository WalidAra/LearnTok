import React from "react";
import StatusContainer from "./StatusContainer";
import { auth } from "@/auth";
import api from "@/lib/apis";

export default async function UserFollowingsCount() {
  let token: string = "";

  const session = await auth();
  if (session?.user?.name) {
    token = session.user.name;
  }

  const res: HTTPResponse = await api.getUserFollowings({ token: token });

  return <StatusContainer count={res.data.length} label="followings" />;
}