import { Flex, Text } from "@chakra-ui/react";
import { User } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import timeAgo from "@/lib/timeAgo";
import Badge from "../atoms/Badge";
import { defaultPic } from "@/assets/pfp";
import { formatNumber } from "@/lib/formatNumber";

type Props = {
  video: VideoClip;
};

const GlobalVideoCard = async ({ video }: Props) => {
  const {
    User: { username, picture, fullName, Status },
  } = video;

  return (
    <Link href={`/user/${video.user_id}/videos/${video.id}`}>
      <div className="max-w-[280px] rounded-lg overflow-hidden bg-muted text-muted-foreground border border-border">
        <div className="relative ">
          <video
            className="w-full"
            style={{
              aspectRatio: "280/180",
              objectFit: "cover",
            }}
            height="180"
            width="280"
            src={video.url}
          ></video>
        </div>

        <div className="p-4 h-[180px] flex flex-col items-start justify-evenly">
          <User
            name={
              <Flex className="items-center gap-2">
                {username} <Badge status_name={Status.name} />
              </Flex>
            }
            description={fullName}
            avatarProps={{
              src: picture ? picture : defaultPic,
            }}
          />

          <div className="mt-3">
            <div className="font-semibold line-clamp-2 text-lg">{video.title}</div>
            <Text className="line-clamp-2 font-medium" fontSize={"13px"}>
              {" "}
              {video.description}{" "}
            </Text>
            <div className="flex items-center space-x-1 text-xs text-[#A3A3A3] mt-1">
              <span> {formatNumber(video.views_count)} views </span>
              <span>•</span>
              <span>{timeAgo(video.uploadedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GlobalVideoCard;
