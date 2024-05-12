/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useFetch } from "@/hooks/useFetch";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

type Props = {
  follow: boolean;
  token: string;
  user_id: string;
};

const FollowButton = ({ follow, token, user_id }: Props) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(follow);

  const handleClick = async () => {
    setIsFollowing((prev) => !prev);
    const res = await useFetch({
      method: "PUT",
      TokenInclude: true,
      body: {
        user_id,
      },
      endPoint: "/follow/toggle",
      token,
    });
  };

  return (
    <Button
      className="font-medium"
      color="danger"
      size="sm"
      radius="full"
      onClick={handleClick}
      variant={isFollowing ? "bordered" : "solid"}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
