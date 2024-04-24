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
};

export default function VideoCardBody({ url, index }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { current } = useCurrentHomeVid();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (index + 1 === current) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <Box
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      p={0}
      flex={1}
      w={"100%"}
      className="sm:grid flex justify-center sm:justify-normal sm:grid-cols-1frauto1fr items-center "
    >
      <div></div>
      <div className="bg-black relative overflow-hidden rounded-xl">
        <Box
          className={cn(
            "absolute grid grid-rows-auto1fr left-0 top-0 w-full h-full z-30 duration-200 ease-out",
            isHovered ? "opacity-100 " : " opacity-0"
          )}
        >
          <ToggleSound videoRef={videoRef} />
          <ToggleVideo videoRef={videoRef} />
          <VideoProgress videoRef={videoRef} />
        </Box>
        <video
          ref={videoRef}
          src={url}
          loop
          className="object-cover w-full sm:w-60 lg:w-60 xl:w-80 2xl:w-96 aspect-[9/16]"
        />
      </div>
      <div></div>
    </Box>
  );
}
