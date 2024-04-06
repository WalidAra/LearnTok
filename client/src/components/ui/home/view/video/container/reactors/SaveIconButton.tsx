"use client";
import IconButton from "@/components/ui/global/IconButton";
import { useTheme } from "@/context/Theme";
import React, { useCallback, useEffect, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";

export default function SaveIconButton() {
  const [isSaved, setIsSaved] = useState(false);
  const theme = useTheme();

  const HandleAddBookmark = useCallback(async () => {
    setIsSaved((prev) => !prev);
  }, []);

  useEffect(() => {
    // fetch api
  }, []);

  return (
    <IconButton
      onClick={HandleAddBookmark}
      className={
        isSaved
          ? "bg-commonLightOrange text-white"
          : theme.isDark
          ? ""
          : "bg-muted text-muted-foreground"
      }
    >
      <BsBookmarkFill />
    </IconButton>
  );
}
