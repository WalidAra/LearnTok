import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import StatusVideoState from "../video/StatusVideoState";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import TwitterCard from "@/components/organisms/TwitterCard";
import Link from "next/link";
import LikeCheck from "./LikeCheck";

type Props = {
  video: VideoClip;
};

const TrendingCard = ({ video }: Props) => {
  const {
    User: { Status, fullName, id, picture, username },
  } = video;

  return (
    <div className="bg-muted md:w-175 w-full border border-border rounded-md p-4 flex gap-4">
      <video
        className="w-60 aspect-video rounded-md bg-black"
        src={video.url}
      ></video>

      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-semibold text-xl"> {video.title} </h1>
            <Text> {video.description} </Text>
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

          <Link href={`/user/${id}`}>
            <TwitterCard
              username={username}
              fullName={fullName}
              pic={picture}
              status_name={Status.name}
            />
          </Link>
        </div>

        <div className="shrink-0"  >
          <LikeCheck video_id={video.id} />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
