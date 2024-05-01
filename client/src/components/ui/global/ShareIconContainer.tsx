import React from "react";
import ShareIconButton from "./ShareIconButton";

type Props = {
  user_id: string;
  video_id: string;
};

export default function ShareIconContainer({ user_id, video_id }: Props) {
  return <ShareIconButton />;
}
