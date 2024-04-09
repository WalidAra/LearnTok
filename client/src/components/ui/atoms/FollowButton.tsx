"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  return (
    <Button
      className="font-medium"
      color="danger"
      size="sm"
      variant={isFollowing ? "bordered" : "solid"}
      onClick={() => {
        setIsFollowing((prev) => !prev);
      }}
      radius="full"
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
