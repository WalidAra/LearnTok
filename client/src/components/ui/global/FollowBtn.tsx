"use client";
import api from "@/lib/apis";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {
  token: string;
  user_id: string;
  following: boolean;
};

export default function FollowBtn({ token, following, user_id }: Props) {
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
    <Button
      onClick={ToggleFollow}
      className="font-medium"
      color="danger"
      size="sm"
      radius="full"
    >
      {
        isFollowing
         ? "Unfollow"
          : "Follow"
      }
    </Button>
  );
}
