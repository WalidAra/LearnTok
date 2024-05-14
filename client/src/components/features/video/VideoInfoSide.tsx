import React from "react";
import PosterCard from "./PosterCard";
import { Flex, Text } from "@chakra-ui/react";
import StatusVideoState from "./StatusVideoState";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Divider } from "@nextui-org/react";
import { useFetch } from "@/hooks/useFetch";
import CommentsContainer from "./CommentsContainer";

type Props = {
  video: VideoClip;
};

const VideoInfoSide = async ({ video }: Props) => {
  const { User, title, description } = video;

  const res = await useFetch({
    method: "GET",
    endPoint: `/videos/${video.id}/comments`,
  });

  return (
    <div className="w-full h-full overflow-hidden flex-1 grid md:flex md:flex-col gap-4 p-2 md:p-4">
      <div className="p-4 rounded-md bg-muted border border-border flex flex-col gap-4">
        <PosterCard user={User} />

        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-lg"> {title} </h4>
          <Text fontSize={"14px"}> {description} </Text>
        </div>

        <Flex className="items-center gap-4">
          <StatusVideoState
            count={video.views_count}
            icon={<AiFillEye />}
            label="views"
          />
          <StatusVideoState
            count={video.likes_count}
            icon={<AiFillHeart />}
            label="likes"
          />
          <StatusVideoState
            count={video.comments_count}
            icon={<FaComment />}
            label="comments"
          />
        </Flex>
      </div>

      <Divider />

      <CommentsContainer video_id={video.id} comments={res.data as CommentClip[]} />
    </div>
  );
};

export default VideoInfoSide;
