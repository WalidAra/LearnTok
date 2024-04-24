import React from "react";
import VideoCardHeader from "../atoms/video/VideoCardHeader";
import VideoCardBody from "../atoms/video/VideoCardBody";

type Props = {
  video: VideoProps;
  index: number;
};

const VideoCard = ({ video, index }: Props) => {
  console.log(index);

  return (
    <div className="w-full sm:w-112 h-full xl:w-128 2xl:w-175 flex flex-col border border-border rounded shrink-0 p-2 snap-center">
      <VideoCardHeader
        description={video.description}
        user_id={video.user_id}
      />
      <VideoCardBody index={index} url={video.url} />
    </div>
  );
};

export default VideoCard;
