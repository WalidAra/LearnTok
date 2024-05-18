/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { auth } from "@/utils/auth";
import LikeToggle from "../features/profile/pin/LikeToggle";

type Props = {
  video_id: string;
};

export default async function ProfileLikeToggle({ video_id }: Props) {
  const session = await auth();

  if (session && session.user?.name) {
    const res = await useFetch({
      method: "POST",
      body: { video_id },
      endPoint: "/auth/reactors",
      token: session.user.name,
      TokenInclude: true,
    });

    return (
      <LikeToggle
        isLiked={res.data.isLiked}
        token={session.user.name}
        video_id={video_id}
        isAuthenticated
      />
    );
  } else {
    return <div>here</div>;
  }
}
