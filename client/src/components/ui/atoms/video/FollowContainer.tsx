"use client";
import React, { useState } from "react";
import FollowButton from "../FollowButton";

type Props = {
  user_id: string;
};

export default function FollowContainer({ user_id }: Props) {
  const [following, setFollowing] = useState<boolean>(false);
  return (
    <FollowButton
      following={following}
      following_id={user_id}
      setFollowing={setFollowing}
    />
  );
}
