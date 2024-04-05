import React from "react";
import LikeIconButton from "./reactors/LikeIconButton";
import ShareButton from "./reactors/ShareButton";
import CommentIconButton from "./reactors/CommentIconButton";
import SaveIconButton from "./reactors/SaveIconButton";

export default function Reactors() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <LikeIconButton />
      <ShareButton />
      <CommentIconButton />
      <SaveIconButton />
    </div>
  );
}
