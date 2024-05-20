/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useFetch } from "@/hooks/useFetch";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import { Button, cn } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {
  follow: boolean;
  token: string;
  user_id: string;
  isAuthenticated?: boolean;
};

const FollowButton = ({
  follow,
  token,
  user_id,
  isAuthenticated = false,
}: Props) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(follow);
  const { onOpen } = useAuthDialog();
  const { theme } = useTheme();

  const handleClick = async () => {
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
    <Button
      className={cn(
        "font-medium",
        isFollowing
          ? theme === "dark" && "border border-primary text-primary"
          : theme === "dark" && "bg-secondary"
      )}
      size="sm"
      radius="full"
      onClick={handleClick}
      color={theme === "light" ? "danger" : "default"}
      variant={isFollowing ? "bordered" : "solid"}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
