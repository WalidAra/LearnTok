import React from "react";
import VideoCardHeader from "../atoms/video/VideoCardHeader";
import VideoCardBody from "../atoms/video/VideoCardBody";
import { Box } from "@chakra-ui/react";
import Reactors from "../atoms/reactors/Reactors";

type Props = {
  video: VideoProps;
  index: number;
};

const VideoCard = ({ video, index }: Props) => {
  return (
    <div className="w-full sm:w-112 h-full xl:w-128 2xl:w-175 flex flex-col border border-border rounded shrink-0 p-2 snap-center">
      <VideoCardHeader
        description={video.description}
        user_id={video.user_id}
      />
      <Box
        p={0}
        flex={1}
        w={"100%"}
        className="sm:grid flex justify-center sm:justify-normal sm:grid-cols-1frauto1fr items-center "
      >
        <div></div>
        <VideoCardBody index={index} url={video.url} />
        <div className=" center-div flex-1  ">
          <Reactors user_id={video.user_id} video_id={video.id} />
        </div>
      </Box>
    </div>
  );
};

export default VideoCard;
