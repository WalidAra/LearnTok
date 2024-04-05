import ColorSync from "@/components/ui/global/ColorSync";
import { Flex } from "@chakra-ui/react";
import React from "react";
import VideoPlayer from "./container/VideoPlayer";
import Link from "next/link";

export default function VideoContainer() {
  return (
    <Flex className="flex-1 flex flex-col gap-4 sm:gap-0">
      <ColorSync
        className="flex items-center text-sm  w-full "
        onDark={""}
        onLight={"text-muted-foreground"}
      >
        <p className="line-clamp-1">
          Join us on an awe-inspiring journey through the mystical ruins of
          Machu Picchu, nestled high in the Andes Mountains of Peru. In this
          captivating video, we embark on a virtual expedition to unravel the
          mysteries of this UNESCO World Heritage Site
        </p>
        <Link href={"/"} className=" font-medium shrink-0">
          see more
        </Link>
      </ColorSync>

      <div className=" flex-1 flex justify-center items-start md:items-center sm:grid sm:grid-cols-1frauto1fr">
        <div className="hidden sm:block"></div>
        <VideoPlayer />
        <div className="hidden sm:block"></div>
      </div>
    </Flex>
  );
}
