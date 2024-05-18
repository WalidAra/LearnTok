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
  isLiked: boolean;
};

export default function LikeToggle({
  isLiked,
  token,
  video_id,
  isAuthenticated,
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
    
    <label className="ui-like shrink-0">
      <input checked={liked} onChange={HandleToggleLike} type="checkbox" />
      <div className="like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
          </g>
        </svg>
      </div>
    </label>
  );
}
