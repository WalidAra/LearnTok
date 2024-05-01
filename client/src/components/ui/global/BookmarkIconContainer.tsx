import React from "react";
import BookmarkIcon from "./BookmarkIcon";
import api from "@/lib/apis";

type Props = {
  token: string;
  video_id: string;
};

export default async function BookmarkIconContainer({
  token,
  video_id,
}: Props) {
  const res: HTTPResponse = await api.videoSavedAsBookmark({ token, video_id });

  return <BookmarkIcon isSaved={res.data} token={token} video_id={video_id} />;
}
