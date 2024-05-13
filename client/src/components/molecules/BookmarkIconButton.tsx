/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import IconButton from "../atoms/IconButton";
import { toast } from "sonner";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import { LuBookmark } from "react-icons/lu";
import { IoBookmark } from "react-icons/io5";
import { useFetch } from "@/hooks/useFetch";
type Props = {
  video_id: string;
  token: string;
  isAuthenticated?: boolean;
  isSaved: boolean;
};
const BookmarkIconButton = ({
  isSaved,
  token,
  video_id,
  isAuthenticated,
}: Props) => {

  const [saved, setSaved] = useState(isSaved);
  const { onOpen } = useAuthDialog();

  const HandleSavingBookmark = async () => {
    if (isAuthenticated === true) {
      setSaved((prev) => !prev);
      const res = await useFetch({
        method: "PUT",
        body: { video_id },
        endPoint: "/bookmark/toggle",
        token,
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
    <IconButton isLiked={saved} onActive="bg-lightOrange text-white" onClick={HandleSavingBookmark}>
      {saved ? (
        <IoBookmark className="size-5" />
      ) : (
        <LuBookmark className="size-5" />
      )}
    </IconButton>
  );
};

export default BookmarkIconButton;
