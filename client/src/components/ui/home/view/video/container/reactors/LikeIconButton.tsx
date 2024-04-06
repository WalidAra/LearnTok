"use client";
import IconButton from "@/components/ui/global/IconButton";
import { useTheme } from "@/context/Theme";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";


type Props = {
  video_id: string;
};

function LikeIconButton() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const theme = useTheme();

  const handleToggle = useCallback(() => {
    setIsLiked((prev) => !prev);
  }, []);

  useEffect(() => {
    // fetching api
    setIsLiked(false);
  }, []);

  return (
    <IconButton
      className={
        isLiked
          ? "bg-commonLightRed text-white"
          : theme.isDark
          ? ""
          : "bg-muted text-muted-foreground"
      }
      onClick={handleToggle}
    >
      <AiFillHeart />
    </IconButton>
  );
}

export default LikeIconButton;
