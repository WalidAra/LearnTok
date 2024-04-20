"use client";
import { Button } from "@/components/cli/button";
import { Input } from "@/components/cli/input";
import { LuSendHorizonal } from "react-icons/lu";
import React, { useRef } from "react";

export default function CommentInput() {
  const commentRef = useRef<HTMLInputElement>(null);

  return (
    <div className="p-2 flex items-center gap-2">
      <Input ref={commentRef} placeholder="Write your comment..." />

      <Button className="" size={"icon"}>
        <LuSendHorizonal className="size-5" />
      </Button>
    </div>
  );
}
