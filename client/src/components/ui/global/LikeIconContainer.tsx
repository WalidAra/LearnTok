import React from "react";
import LikeIconButton from "./LikeIconButton";
import api from "@/lib/apis";

type Props = {
  token: string;
  video_id: string;
};

export default async function LikeIconContainer({ token, video_id }: Props) {

  const res: HTTPResponse = await api.likeState({
    video_id: video_id,
    token: token,
  });

  if (res.status) {
    return <LikeIconButton video_id={video_id} isLiked={res.data} token={token} />;
  }
}
