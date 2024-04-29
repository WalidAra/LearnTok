/* eslint-disable @next/next/no-img-element */
import { Flex } from "@chakra-ui/react";
import { User } from "@nextui-org/react";
import React from "react";
import LearnTokBadge from "../global/LearnTokBadge";
import api from "@/lib/apis";
import Link from "next/link";

type Props = {
  video: VideoProps;
};

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

function timeAgo(timestamp: string): string {
  const currentTime = new Date();
  const createdAt = new Date(timestamp);
  const difference = currentTime.getTime() - createdAt.getTime();

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}

const DiscoverCard = async ({ video }: Props) => {
  const res: HTTPResponse = await api.getUserByID({ id: video.user_id });

  const user: User = res.data;
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
                {user.username} <LearnTokBadge status_id={user.status_id} />
              </Flex>
            }
            description={user.fullName}
            avatarProps={{
              src: user.picture
                ? user.picture
                : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg",
            }}
          />

          <div className="mt-3">
            <div className="font-semibold line-clamp-2">{video.title}</div>
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

export default DiscoverCard;
