"use client";
import React, { useState } from "react";
import FollowButton from "../FollowButton";

type Props = {
  user_id: string;
  followState: boolean;
};

export default function FollowContainer({ user_id  , followState}: Props) {
  const [following, setFollowing] = useState<boolean>(followState);
  return (
    <FollowButton
      following={following}
      following_id={user_id}
      setFollowing={setFollowing}
    />
  );
}
