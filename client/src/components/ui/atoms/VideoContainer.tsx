import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { LuPlay, LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/auth";

function formatNumber(number: number) {
  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(1) + "m";
  } else if (number >= 1000000000 && number < 1000000000000) {
    return (number / 1000000000).toFixed(1) + "b";
  } else {
    return number.toString();
  }
}

type Props = {
  video: VideoProps;
};

export default async function VideoContainer({ video }: Props) {
  const { comments_count, views_count, likes_count, url, description, id } =
    video;
  const session = await auth();
  let user_id: string = "";

  if (session?.user?.name) {
    user_id = session.user.name;
  }

  return (
    <Link href={`/user/${user_id}/videos/${id}`}>
      <Flex className="flex-col gap-1.5 ">
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

        <p className="line-clamp-1 px-0.5 font-medium text-sm sm:text-base ">
          {description}
        </p>
      </Flex>
    </Link>
  );
}
