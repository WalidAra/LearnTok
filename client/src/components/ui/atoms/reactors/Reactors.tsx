import { auth } from "@/auth";
import React from "react";
import LikeIconContainer from "../../global/LikeIconContainer";
import ShareIconContainer from "../../global/ShareIconContainer";
import CommentIconButton from "../../global/CommentIconButton";
import BookmarkIconContainer from "../../global/BookmarkIconContainer";

type Props = {
  video_id: string;
  user_id: string;
};

export default async function Reactors({ video_id, user_id }: Props) {
  const session = await auth();
  if (session?.user?.name) {
    return (
      <div className="md:flex hidden flex-col items-center gap-5">
        <LikeIconContainer token={session.user.name} video_id={video_id} />
        <ShareIconContainer user_id={user_id} video_id={video_id} />
        <CommentIconButton user_id={user_id} video_id={video_id} />
        <BookmarkIconContainer token={session.user.name} video_id={video_id} />
      </div>
    );
  }
}
