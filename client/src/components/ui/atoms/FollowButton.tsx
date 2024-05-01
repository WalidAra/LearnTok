"use client";
import api from "@/lib/apis";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {
  following: boolean;
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  following_id: string;
};

export default function FollowButton({
  following,
  setFollowing,
  following_id,
}: Props) {
  const { data: session } = useSession();

  return (
    <Button
      onClick={async () => {
        if (session?.user?.name) {
          setFollowing((prev) => !prev);
          const res: HTTPResponse = await api.ToggleFollow({
            user_id: following_id,
            token: session.user.name,
          });
        }
      }}
      className="font-medium"
      color="danger"
      size="sm"
      radius="full"
    >
      {following ? "Unfollow" : "Follow"}
    </Button>
  );
}
