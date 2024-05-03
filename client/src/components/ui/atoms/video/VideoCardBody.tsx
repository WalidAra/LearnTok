/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useCurrentHomeVid } from "@/context/Home";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ToggleSound from "./ToggleSound";
import ToggleVideo from "./ToggleVideo";
import VideoProgress from "./VideoProgress";
import { cn } from "@/lib/utils";

type Props = {
  url: string;
  index: number;
  video_id: string;
  token: string | null;
};

export default function VideoCardBody({ url, index, video_id , token }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { current } = useCurrentHomeVid();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current && current === index + 1) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [current, videoRef]);

  return (
    <div
      className="bg-black relative overflow-hidden rounded-xl"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={url}
        loop
        className="object-cover w-full sm:w-60 lg:w-60 xl:w-80 2xl:w-96 aspect-[9/16]"
      />
      <Box
        className={cn(
          "absolute grid grid-rows-auto1fr left-0 top-0 w-full h-full z-30 duration-200 ease-out",
          isHovered ? "opacity-100 " : " opacity-0"
        )}
      >
        <ToggleSound videoRef={videoRef} />
        <ToggleVideo videoRef={videoRef} />
        <VideoProgress token={token} video_id={video_id} videoRef={videoRef} />
      </Box>
    </div>
  );
}
