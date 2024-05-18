import { formatNumber } from "@/lib/formatNumber";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { LuHeart, LuPlay } from "react-icons/lu";

type Props = {
  video: VideoClip;
  children?: React.ReactNode;
};

export default function VideoPin({ video, children }: Props) {
  const {
    comments_count,
    description,
    id,
    likes_count,
    views_count,
    url,
    User,
  } = video;
  return (
    <Flex className="flex-col md:w-56 w-auto gap-1.5 relative">
      <Link href={`/user/${User.id}/videos/${id}`}>
        <Box className="w-full relative">
          <Flex className="absolute sm:bottom-2 bottom-1 left-1 sm:left-2 items-center gap-2 text-xs sm:text-sm">
            <div className=" font-medium  text-white flex items-center gap-1">
              <LuPlay />

              {formatNumber(views_count)}
            </div>
            <div className=" font-medium  text-white flex items-center gap-1">
              <LuHeart />
              {formatNumber(likes_count)}
            </div>
            <div className=" font-medium  text-white flex items-center gap-1">
              <FaRegComment />
              {formatNumber(comments_count)}
            </div>
          </Flex>
          <video
            className="w-full aspect-[7/9.33] rounded-sm bg-black object-cover"
            src={url}
          ></video>
        </Box>
      </Link>
      <div className="grid grid-cols-1frauto gap-1">
        <p className="line-clamp-1 px-0.5 font-medium text-sm sm:text-base ">
          {description}
        </p>
        {children}
      </div>
    </Flex>
  );
}
