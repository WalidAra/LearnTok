import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import StatusInfo from "./video/StatusInfo";
import { AiFillEye } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Poster from "./video/Poster";
import { FaComment } from "react-icons/fa6";

type Props = {
  video: VideoProps;
  token: string;
};

export default function VideoInfo({ video , token}: Props) {
  return (
    <Flex className="border-border border rounded-md p-4 flex-col gap-1">
      <Poster token={token} id={video.user_id} />
      <h2
        className="text-2xl font-semibold tracking-tighter  text-slate-950 "
        data-testid="home-h2"
      >
        {video.title}
      </h2>

      <p>{video.description}</p>

      <Flex className="items-center gap-4">
        <StatusInfo
          count={video.views_count}
          icon={<AiFillEye />}
          label="views"
        />
        <StatusInfo
          count={video.likes_count}
          icon={<AiFillHeart />}
          label="likes"
        />
        <StatusInfo
          count={video.comments_count}
          icon={<FaComment />}
          label="comments"
        />
      </Flex>
    </Flex>
  );
}
