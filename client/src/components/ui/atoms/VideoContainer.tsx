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
    <Link href={'/'} >
      <Flex className="flex-col w-60 gap-2 ">
        <Box className="w-full relative">
          <Flex className="absolute bottom-2 left-2 items-center gap-2 text-sm">
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
            className="w-full aspect-[7/9.33] rounded"
            src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3"
          ></video>
        </Box>

        <p className="line-clamp-1 px-0.5 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          ullam eveniet, enim ex, odio nemo numquam sapiente cum explicabo
          similique. Molestiae consectetur eaque placeat minus, ipsa non et
          atque!
        </p>
      </Flex>
    </Link>
  );
}
