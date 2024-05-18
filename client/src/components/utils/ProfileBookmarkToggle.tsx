/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "@/hooks/useFetch";
import { auth } from "@/utils/auth";
import React from "react";
import BookmarkToggle from "../features/profile/pin/BookmarkToggle";

type Props = {
  video_id: string;
};

export default async function ProfileBookmarkToggle({ video_id }: Props) {
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
      <BookmarkToggle
        isSaved={res.data.isBookmarked}
        token={session.user.name}
        video_id={video_id}
        isAuthenticated={true}
      />
    );
  }
}
