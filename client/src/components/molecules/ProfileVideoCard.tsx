import { formatNumber } from "@/lib/formatNumber";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { LuHeart, LuPlay } from "react-icons/lu";

type Props = {
  video: VideoClip;
};

export default function ProfileVideoCard({ video }: Props) {
  return (
    <Link href={`/user/${video.User.id}/videos/${video.id}`}>
      <Flex className="flex-col gap-1.5 ">
        <Box className="w-full relative">
          <Flex className="absolute sm:bottom-2 bottom-1 left-1 sm:left-2 items-center gap-2 text-xs sm:text-sm">
            <div className=" font-medium  text-white flex items-center gap-1">
              <LuPlay />

              {formatNumber(video.views_count)}
            </div>
            <div className=" font-medium  text-white flex items-center gap-1">
              <LuHeart />
              {formatNumber(video.likes_count)}
            </div>
            <div className=" font-medium  text-white flex items-center gap-1">
              <FaRegComment />
              {formatNumber(video.comments_count)}
            </div>
          </Flex>
          <video
            className="w-full aspect-[7/9.33] rounded-sm bg-black object-cover"
            src={video.url}
          ></video>
        </Box>

        <p className="line-clamp-1 px-0.5 font-medium text-sm sm:text-base ">
          {video.description}
        </p>
      </Flex>
    </Link>
  );
}
