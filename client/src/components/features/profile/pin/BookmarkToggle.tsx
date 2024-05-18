/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useFetch } from "@/hooks/useFetch";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {
  video_id: string;
  token: string;
  isAuthenticated?: boolean;
  isSaved: boolean;
};
export default function BookmarkToggle({
  isSaved,
  token,
  video_id,
  isAuthenticated,
}: Props) {
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
    <label className="ui-bookmark z-30 shrink-0">
      <input checked={saved} onChange={HandleSavingBookmark} type="checkbox" />
      <div className="bookmark">
        <svg viewBox="0 0 32 32">
          <g>
            <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
          </g>
        </svg>
      </div>
    </label>
  );
}
