import Link from "next/link";
import React from "react";
import IconButton from "../atoms/IconButton";
import { FaRegComment } from "react-icons/fa";
type Props = {
  video_id: string;
  user_id: string;
};

export default function CommentIconButton({ video_id, user_id }: Props) {
  return (
    <Link href={`/user/${user_id}/videos/${video_id}`}>
      <IconButton>
        <FaRegComment className="size-5" />
      </IconButton>
    </Link>
  );
}
