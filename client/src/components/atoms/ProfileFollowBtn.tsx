/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";
type Props = {
  token: string;
  user_id: string;
  following: boolean;
  isAuthenticated?: boolean;
};

export default function ProfileFollowBtn({
  following,
  token,
  user_id,
  isAuthenticated,
}: Props) {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(following);
  const { onOpen } = useAuthDialog();

  const ToggleFollow = async () => {
    if (isAuthenticated === true) {
      setIsFollowing((prev) => !prev);
      await useFetch({
        method: "PUT",
        TokenInclude: true,
        body: {
          user_id,
        },
        endPoint: "/follow/toggle",
        token,
      });
    } else {
      onOpen();
      toast("You can't interact with anything", {
        description: "Please sign-in or sign up for interaction ",
        action: {
          label: "Undo",
          onClick: () => {},
        },
      });
    }
  };

  return (
    <Button  onClick={ToggleFollow} size={"md"} className="w-56 bg-primary text-white">
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
