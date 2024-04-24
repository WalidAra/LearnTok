import React from "react";
import { User, Tooltip } from "@nextui-org/react";
import { Box, Flex } from "@chakra-ui/react";
import LearnTokBadge from "../../global/LearnTokBadge";
import Link from "next/link";
import UserPopCard from "../../atoms/video/UserPopCard";
import LikeButton from "../../atoms/LikeButton";
import ShareButton from "../../atoms/ShareButton";
import FollowButton from "../../atoms/FollowButton";

const Poster = () => {
  return (
    <div className="w-full border-b border-border items-center flex justify-between">
      <Tooltip
        className="p-0 m-0 border-0 shadow-none "
        placement="right"
        content={<UserPopCard />}
      >
        <Link href={"/"}>
          <User
            className="cursor-pointer"
            name={
              <Flex className="items-center font-medium gap-2">Joe Mama</Flex>
            }
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </Link>
      </Tooltip>

      <FollowButton />
    </div>
  );
};

export default Poster;
