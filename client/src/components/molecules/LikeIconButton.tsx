/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import IconButton from "../atoms/IconButton";
import { LuHeart } from "react-icons/lu";
import { toast } from "sonner";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import { FaHeart } from "react-icons/fa";
import { useFetch } from "@/hooks/useFetch";

type Props = {
  video_id: string;
  token: string;
  isAuthenticated?: boolean;
  isLiked: boolean;
};

export default function LikeIconButton({
  token,
  video_id,
  isAuthenticated = false,
  isLiked,
}: Props) {
  const [liked, setLiked] = useState(isLiked);
  const { onOpen } = useAuthDialog();

  const HandleToggleLike = async () => {
    if (isAuthenticated === true) {
      setLiked((prev) => !prev);
      const res = await useFetch({
        method: "PUT",
        body: {
          video_id,
        },
        endPoint: "/like/toggle",
        token: token,
        TokenInclude: true,
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
    <IconButton
      isLiked={liked}
      onActive="text-white bg-lightRed"
      onClick={HandleToggleLike}
    >
      {liked ? <FaHeart className="size-5" /> : <LuHeart className="size-5" />}
    </IconButton>
  );
}
