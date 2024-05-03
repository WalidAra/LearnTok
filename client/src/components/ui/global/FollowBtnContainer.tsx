import { auth } from "@/auth";
import React from "react";
import FollowBtn from "./FollowBtn";
import api from "@/lib/apis";

type Props = {
  user_id: string;
};

export default async function FollowBtnContainer({user_id}:Props) {
  const session = await auth();

  if (session && session.user?.name) {
    const res: HTTPResponse = await api.tokenIdMatch({
      token: session.user.name,
      user_id,
    });

    const followRes: HTTPResponse = await api.followState({
      user_id: user_id,
      token: session.user.name,
    });

    if (!res.status) {
      return <FollowBtn following={followRes.data} user_id={user_id} token={session.user.name} />;
    }
  }
}
