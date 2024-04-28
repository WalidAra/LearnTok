"use client";
import { Button } from "@/components/cli/button";
import { Input } from "@/components/cli/input";
import { LuSendHorizonal } from "react-icons/lu";
import React, { useRef } from "react";
import { useSession } from "next-auth/react";
import api from "@/lib/apis";

type Props = {
  updateComments: () => void;
  video_id: string;
};

function CommentInput({ updateComments, video_id }: Props) {
  const commentRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();

  return (
    <div className="p-2 flex items-center gap-2">
      <Input ref={commentRef} placeholder="Write your comment..." />

      <Button
        onClick={async (e) => {
          if (!session || !session.user || !commentRef.current) return;

          const res: HTTPResponse = await api.createComment({
            comment: commentRef.current.value as string,
            token: session.user.name as string,
            video_id: video_id,
          });

          if (res.status) {
            updateComments();
          }
        }}
        type="submit"
        className=""
        size={"icon"}
      >
        <LuSendHorizonal className="size-5" />
      </Button>
    </div>
  );
}

export default React.memo(CommentInput);
