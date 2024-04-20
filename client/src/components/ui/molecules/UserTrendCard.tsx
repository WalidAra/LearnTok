import { Button } from "@/components/cli/button";
import { CarouselItem } from "@/components/cli/carousel";
import { Flex } from "@chakra-ui/react";
import { Avatar, Tooltip } from "@nextui-org/react";
import React from "react";
import LearnTokBadge from "../global/LearnTokBadge";
import UserPopCard from "../atoms/video/UserPopCard";

const UserTrendCard = () => {
  return (
    <div className="flex items-center flex-col gap-2">
      <Tooltip
        className="p-0 m-0 border-0 shadow-none "   
        content={<UserPopCard />}
      >
        <Avatar size="sm" isBordered />
      </Tooltip>
      <Flex className="items-center gap-2 text-sm font-medium">
        ExoticAra__ <LearnTokBadge />
      </Flex>
    </div>
  );
};

export default UserTrendCard;
