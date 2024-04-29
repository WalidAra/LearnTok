"use client";
import { Button } from "@/components/cli/button";
import api from "@/lib/apis";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {
  token: string;
  user_id: string;
  following: boolean;
};

export default function ProfileFollowBtn({ following, token, user_id }: Props) {
  const [isFollowing, setIsFollowing] = useState<boolean>(following);

  const ToggleFollow = async () => {
    const res: HTTPResponse = await api.ToggleFollow({
      following_id: user_id,
      token,
    });

    if (res.status) {
      setIsFollowing(res.data);
    }

    toast("Event has been created.");
  };
  return (
    <Button onClick={ToggleFollow} size={"lg"} className="w-56 ">
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
