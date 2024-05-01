"use client";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import api from "@/lib/apis";

type Props = {
  token: string;
  isLiked: boolean;
  video_id: string;
};

const LikeIconButton = ({ token, isLiked, video_id }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(isLiked);

  const HandleLike = async () => {
    setIsChecked((prev) => !prev);
    const res: HTTPResponse = await api.ToggleLike({
      video_id,
      token,
    });
  };

  return (
    <IconButton
      isChecked={isChecked}
      activeStyle="text-white bg-lightRed"
      onClick={HandleLike}
    >
      {isChecked ? <FaHeart /> : <LuHeart />}
    </IconButton>
  );
};

export default LikeIconButton;
