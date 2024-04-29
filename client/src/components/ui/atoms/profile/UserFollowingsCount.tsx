import React from "react";
import StatusContainer from "./StatusContainer";
import api from "@/lib/apis";
import { auth } from "@/auth";

type Props = {
  user_id: string;
  isClient: boolean;
};

export default async function UserFollowingsCount({
  user_id,
  isClient,
}: Props) {
  const session = await auth();

  if (session?.user?.name) {
    if (isClient) {
      const res: HTTPResponse = await api.getClientFollowings({
        token: session.user.name,
      });
      return <StatusContainer count={res.data.length} label="followings" />;
    } else {
      const res: HTTPResponse = await api.getUserFollowings({ user_id });
      return <StatusContainer count={res.data.length} label="followings" />;
    }
  }
}
