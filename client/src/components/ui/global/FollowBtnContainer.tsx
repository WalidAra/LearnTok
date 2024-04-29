import { auth } from "@/auth";
import React from "react";
import FollowBtn from "./FollowBtn";
import api from "@/lib/apis";

type Props = {
  user_id: string;
};

export default async function FollowBtnContainer() {
  const user_id = "a2af2433-477a-4213-8bdf-fecafec10d59";
  const session = await auth();

  if (session && session.user?.name) {
    const res: HTTPResponse = await api.tokenIdMatch({
      token: session.user.name,
      user_id,
    });

    const followRes: HTTPResponse = await api.followState({
      following_id: user_id,
      token: session.user.name,
    });

    if (!res.status) {
      return <FollowBtn following={followRes.data} user_id={user_id} token={session.user.name} />;
    }
  }
}
