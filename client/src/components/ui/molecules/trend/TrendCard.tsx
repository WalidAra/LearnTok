import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import StatusInfo from "../../atoms/video/StatusInfo";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { User } from "@nextui-org/react";

import { auth } from "@/auth";
import LikeIconContainer from "../../global/LikeIconContainer";
import Poster from "../../atoms/video/Poster";

type Props = {
  video: VideoProps;
};

const TrendCard = async ({ video }: Props) => {
  let token: string = "";
  const session = await auth();

  if (session?.user?.name) {
    token = session.user.name;
  }
  return (
    <div className="flex w-full h-full md:h-auto relative md:flex-row flex-col p-2 md:p-4 gap-3 rounded-xl bg-muted border border-border">
      <video
        src={video.url}
        controls
        autoPlay
        loop
        className=" object-cover md:w-128 w-full aspect-[9/11] md:aspect-video flex-1 md:h-auto rounded-xl"
      ></video>

      <Flex className="flex-col gap-3 p-2 flex-1 w-[90%] text-white md:text-foreground absolute md:relative bottom-4 left-4  ">
        <div className="block">
          <div className="grid w-full grid-cols-1frauto gap-3">
            <h2 className="text-xl font-semibold line-clamp-2">
              {video.title} lore
            </h2>

            <div className="shrink-0">
              {session?.user?.name && (
                <LikeIconContainer
                  token={session.user.name}
                  video_id={video.id}
                />
              )}
            </div>
          </div>

          <Flex className="items-center gap-2">
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
          </Flex>
        </div>
        <Poster isShown={false} token={token} id={video.user_id} />

        <Text className="text-sm font-medium"> {video.description} </Text>
      </Flex>
    </div>
  );
};

export default TrendCard;
