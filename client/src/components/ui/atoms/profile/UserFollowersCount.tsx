import React from "react";
import StatusContainer from "./StatusContainer";
import { auth } from "@/auth";
import api from "@/lib/apis";

export default async function UserFollowersCount() {
  let token: string = "";

  const session = await auth();
  if (session?.user?.name) {
    token = session.user.name;
  }
  const res: HTTPResponse = await api.getUserFollowers({ token: token });

  return <StatusContainer count={res.data.length} label="followers" />;
}
