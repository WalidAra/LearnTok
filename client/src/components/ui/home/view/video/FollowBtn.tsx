"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

type Props = {
  user_id: string;
};

export default function FollowBtn() {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  return (
    <Button
      onClick={() => {
        setIsFollowing((prev) => !prev);
      }}
      radius="full"
      variant={isFollowing ? "bordered" : "solid"}
      color="danger"
      className="font-medium capitalize"
      size="sm"
    >
      {isFollowing ? "unfollow" : "follow"}
    </Button>
  );
}
