import React from "react";
import VideoInfo from "../../atoms/VideoInfo";
import { Divider } from "@nextui-org/react";
import CommentContainer from "../../atoms/video/CommentContainer";
import { auth } from "@/auth";

type Props = {
  video: VideoProps;
};

const VideoDataDisplay = async ({ video }: Props) => {
  const session = await auth();

  if (session && session.user?.name) {
    return (
      <section className="flex-1 w-full h-full flex flex-col border border-border gap-4 p-2 md:p-4 rounded-md ">
        <VideoInfo token={session.user.name} video={video} />
        <Divider />
        <CommentContainer token={session.user.name} video_id={video.id} />
      </section>
    );
  }
};

export default VideoDataDisplay;
