import React from "react";
import VideoCardHeader from "../atoms/video/VideoCardHeader";
import VideoCardBody from "../atoms/video/VideoCardBody";

const VideoCard = () => {
  return (
    <div className="m-auto w-full sm:w-112 h-clientVideo 2xl:w-128 flex flex-col border border-border rounded shrink-0 p-2">
      <VideoCardHeader />
      <VideoCardBody />
    </div>
  );
};

export default VideoCard;
