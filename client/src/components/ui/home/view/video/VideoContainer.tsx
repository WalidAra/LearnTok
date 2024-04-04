import ColorSync from "@/components/ui/global/ColorSync";
import { Flex } from "@chakra-ui/react";
import React from "react";
import VideoPlayer from "./container/VideoPlayer";
import Link from "next/link";

export default function VideoContainer() {
  return (
    <Flex className="flex-col flex-1 gap-2">
      <Flex className="w-full gap-1.5 items-center">
        <ColorSync className="line-clamp-1 text-sm " onDark={""} onLight={""}>
          <p>
            Well this is a comment brothers Well this is a comment brothers Well
            this is a comment brothers Well this is a comment brothers
          </p>
        </ColorSync>

        <Link className="shrink-0 text-sm font-medium hover:underline cursor-pointer" href="/">
          See more
        </Link>
      </Flex>

      <div className="flex-1 w-full sm:grid flex justify-center items-center sm:grid-cols-1frauto1fr">
        <div className="h-full"></div>
        <VideoPlayer />
        <div className="h-full center_div "></div>
      </div>
    </Flex>
  );
}
