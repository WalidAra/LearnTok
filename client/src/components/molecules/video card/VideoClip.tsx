"use client";
import { cn } from "@/lib/utils";
import { Box } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ToggleSound from "./ToggleSound";
import PlayPause from "./PlayPause";
import ProgressBar from "./ProgressBar";

type Props = {
  url: string;
  video_id: string;
  index: number;
};

const VideoClip = ({ url, video_id, index }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className=" center  relative overflow-hidden rounded-xl"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={url}
        loop
        className="object-cover rounded-xl sm:rounded-none w-[95%] bg-black sm:w-60 lg:w-60 xl:w-80 2xl:w-96 aspect-[9/16]"
      />

      <Box
        className={cn(
          "absolute grid grid-rows-auto1frauto left-0 top-0 w-full h-full z-20 duration-200 ease-out",
          isHovered ? "opacity-100 " : " opacity-0"
        )}
      >
        <ToggleSound videoRef={videoRef} />
        <PlayPause idx={index} videoRef={videoRef} />
        <ProgressBar videoRef={videoRef} video_id={video_id} />
      </Box>
    </div>
  );
};

export default VideoClip;
