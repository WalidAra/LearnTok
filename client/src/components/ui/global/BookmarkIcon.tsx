"use client";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { FaBookmark } from "react-icons/fa6";
import { LuBookmark } from "react-icons/lu";
import api from "@/lib/apis";
type Props = {
  token: string;
  video_id: string;
  isSaved: boolean;
};

export default function BookmarkIcon({ token, video_id, isSaved }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(isSaved);

  const HandleSaveBookmark = async () => {
    setIsChecked((prev) => !prev);
    const res = await api.ToggleBookmark({ token, video_id });
  };

  return (
    <IconButton
      isChecked={isChecked}
      activeStyle="text-white bg-lightOrange"
      onClick={HandleSaveBookmark}
    >
      {isChecked ? <FaBookmark /> : <LuBookmark />}
    </IconButton>
  );
}
