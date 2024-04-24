/* eslint-disable @next/next/no-img-element */
import { Flex } from "@chakra-ui/react";
import {  User } from "@nextui-org/react";
import React from "react";
import LearnTokBadge from "../global/LearnTokBadge";

const DiscoverCard = () => {
  return (
    <div className="max-w-[280px] rounded-lg overflow-hidden bg-[#242424] text-white">
      <div className="relative ">
        <video
          className="w-full"
          style={{
            aspectRatio: "280/180",
            objectFit: "cover",
          }}
          height="180"
          width="280"
          src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3"
        ></video>
      </div>

      <div className="p-4">
        <User
          name={
            <Flex className="items-center gap-2">
              Jane Doe 
            </Flex>
          }
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />

        <div className="mt-3">
          <div className="font-semibold line-clamp-2">
            Basic how to ride your skateboard comfortably
          </div>
          <div className="flex items-center space-x-1 text-xs text-[#A3A3A3] mt-1">
            <span>53K views</span>
            <span>•</span>
            <span>2 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
