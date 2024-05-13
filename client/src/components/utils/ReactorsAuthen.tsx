/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "@/hooks/useFetch";
import { auth } from "@/utils/auth";
import React from "react";
import LikeIconButton from "../molecules/LikeIconButton";
import CommentIconButton from "../molecules/CommentIconButton";
import ShareIconButton from "../molecules/ShareIconButton";
import BookmarkIconButton from "../molecules/BookmarkIconButton";

type Props = {
  video_id: string;
  poster_id: string;
};

export default async function ReactorsAuthen({ video_id, poster_id }: Props) {
  const session = await auth();
  if (!session || !session.user?.name) {
    return (
      <div className="flex flex-col gap-5">
        <LikeIconButton
          isLiked={false}
          token={""}
          video_id={""}
          isAuthenticated={false}
        />

        <CommentIconButton user_id={poster_id} video_id={video_id} />
        <ShareIconButton />
        <BookmarkIconButton
          isSaved={false}
          token=""
          video_id=""
          isAuthenticated={false}
        />
      </div>
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
        <div className="flex flex-col gap-5">
          <LikeIconButton
            isLiked={false}
            token={""}
            video_id={""}
            isAuthenticated={false}
          />
          <CommentIconButton user_id={poster_id} video_id={video_id} />
          <ShareIconButton />
          <BookmarkIconButton
            isSaved={false}
            token=""
            video_id=""
            isAuthenticated={false}
          />
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-5">
        <LikeIconButton
          isLiked={res.data.isLiked}
          token={session.user.name}
          video_id={video_id}
          isAuthenticated
        />
        <CommentIconButton user_id={poster_id} video_id={video_id} />
        <ShareIconButton />
        <BookmarkIconButton
          isSaved={res.data.isBookmarked}
          token={session.user.name}
          video_id={video_id}
          isAuthenticated={true}
        />
      </div>
    );
  }
}
