import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import StatusInfo from "./video/StatusInfo";
import { AiFillEye } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Poster from "./video/Poster";
import { FaComment } from "react-icons/fa6";

type Props = {
  user_id: string;
  description: string;
  title: string;
};

export default function VideoInfo() {
  return (
    <Flex className="border-border border rounded-md p-4 flex-col gap-1 md:gap-3">
      <Poster />
      <h2
        className="text-2xl font-semibold tracking-tighter  text-slate-950 "
        data-testid="home-h2"
      >
        This is a title of the video
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla quo!
        Iure porro, nemo adipisci animi expedita quod vero ullam voluptatum non,
        aliquam eum aspernatur alias sit eligendi, ipsa recusandae.
      </p>

      <Flex className="items-center gap-4">
        <StatusInfo count={44} icon={<AiFillEye  />} label="views" />
        <StatusInfo count={45} icon={<AiFillHeart />} label="likes" />
        <StatusInfo count={45} icon={<FaComment />} label="comments" />
      </Flex>
    </Flex>
  );
}
