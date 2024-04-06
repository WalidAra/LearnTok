"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";

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
      className={cn(
        "font-medium capitalize",
        isFollowing ? "border-primary text-primary" : "bg-primary"
      )}
      size="sm"
    >
      {isFollowing ? "unfollow" : "follow"}
    </Button>
  );
}
