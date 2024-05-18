/* eslint-disable react-hooks/rules-of-hooks */
import LikeIconButton from "@/components/molecules/LikeIconButton";
import { useFetch } from "@/hooks/useFetch";
import { auth } from "@/utils/auth";
import React from "react";

type Props = {
  video_id: string;
};

const LikeCheck = async ({ video_id }: Props) => {
  const session = await auth();

  if (!session || !session.user?.name) {
    return (
      <LikeIconButton
        isLiked={false}
        token={""}
        video_id={""}
        isAuthenticated={false}
      />
    );
  } else {
    const res = await useFetch({
      method: "POST",
      body: { video_id },
      endPoint: "/auth/reactors",
      token: session.user.name,
      TokenInclude: true,
    });
    if (res.status === false) {
      return (
        <LikeIconButton
          isLiked={false}
          token={""}
          video_id={""}
          isAuthenticated={false}
        />
      );
    }
    return (
      <LikeIconButton
        isLiked={res.data.isLiked}
        token={session.user.name}
        video_id={video_id}
        isAuthenticated
      />
    );
  }
};

export default LikeCheck;
