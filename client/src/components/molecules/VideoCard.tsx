import React from "react";
import { CarouselItem } from "../cli/shadcn/carousel";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import TwitterCard from "../organisms/TwitterCard";
import Link from "next/link";
import FollowCheck from "../utils/FollowCheck";
import VideoClip from "./video card/VideoClip";
import ReactorsAuthen from "../utils/ReactorsAuthen";

type Props = {
  video: VideoClip;
  index: number;
};

const VideoCard = ({ video, index }: Props) => {
  const {
    User: {
      Status: { name },
      fullName,
      id,
      picture,
      username,
    },
  } = video;

  return (
    <CarouselItem className=" shrink-0">
      <div className=" w-full h-full rounded-md border-border border flex-col flex">
        <Flex className="w-full p-2 md:px-4 md:py-3 gap-1 flex flex-col">
          <Flex className="w-full flex justify-between items-center">
            <Link href={`/user/${id}`}>
              <TwitterCard
                hoverUsername
                fullName={fullName}
                pic={picture}
                status_name={name}
                username={username}
              />
            </Link>

            <FollowCheck user_id={id} />
          </Flex>

          <Flex className="items-end w-full gap-2">
            <Text fontSize="sm" className="text-foreground">
              {video.description}
              <Link href={`/user/${id}/videos/${video.id}`}>
                <span className="shrink-0 ml-1.5 text-foreground underline cursor-pointer p-0 h-auto">
                  see more
                </span>
              </Link>
            </Text>
          </Flex>
        </Flex>

        <Box
          p={0}
          flex={1}
          w={"100%"}
          className="sm:grid flex-1 h-full flex justify-center sm:justify-normal sm:grid-cols-1frauto1fr items-center "
        >
          <div></div>
          <VideoClip index={index} url={video.url} video_id={video.id} />
          <div className=" h-full w-full flex items-center justify-center">
            <ReactorsAuthen poster_id={id} video_id={video.id} />
          </div>
        </Box>
      </div>
    </CarouselItem>
  );
};

export default VideoCard;
