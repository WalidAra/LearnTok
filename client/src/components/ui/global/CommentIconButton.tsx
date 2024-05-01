"use client";
import Link from "next/link";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { FaComment, FaRegComment } from "react-icons/fa";
type Props = {
  user_id: string;
  video_id: string;
};

export default function CommentIconButton({ user_id, video_id }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Link href={`/user/${user_id}/videos/${video_id}`}>
      <IconButton
        onClick={() => {
          setIsChecked((prev) => !prev);
        }}
      >
        {isChecked ? <FaComment /> : <FaRegComment />}
      </IconButton>
    </Link>
  );
}
