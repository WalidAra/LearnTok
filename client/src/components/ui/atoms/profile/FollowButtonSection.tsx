import React from "react";
import ProfileFollowBtn from "./ProfileFollowBtn";
import { auth } from "@/auth";
import api from "@/lib/apis";

type Props = {
  user_id: string;
};

const FollowButtonSection = async ({user_id}:Props) => {
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

    return (
      <section className="w-full center-div">
        <ProfileFollowBtn
          following={followRes.data}
          user_id={user_id}
          token={session.user.name}
        />
      </section>
    );
  }
};

export default FollowButtonSection;
