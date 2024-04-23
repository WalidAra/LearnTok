import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { LuPlay, LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import Link from "next/link";

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

export default function VideoContainer() {
  return (
    <Link href={"/"}>
      <Flex className="flex-col gap-1.5 ">
        <Box className="w-full relative">
          <Flex className="absolute sm:bottom-2 bottom-1 left-1 sm:left-2 items-center gap-2 text-xs sm:text-sm">
            <div className=" font-medium  text-white flex items-center gap-1">
              <LuPlay />
              125k
            </div>
            <div className=" font-medium  text-white flex items-center gap-1">
              <LuHeart />
              25k
            </div>
            <div className=" font-medium  text-white flex items-center gap-1">
              <FaRegComment />
              225k
            </div>
          </Flex>
          <video
            className="w-full aspect-[7/9.33] rounded-sm bg-black object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2F2024-04-16%2019-13-52.mp4?alt=media&token=e92ee06d-4c21-429a-b142-dfa8686c56e9"
          ></video>
        </Box>

        <p className="line-clamp-1 px-0.5 font-medium text-sm sm:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          ullam eveniet, enim ex, odio nemo numquam sapiente cum explicabo
          similique. Molestiae consectetur eaque placeat minus, ipsa non et
          atque!
        </p>
      </Flex>
    </Link>
  );
}
