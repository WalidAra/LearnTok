import React from "react";
import { User, Tooltip } from "@nextui-org/react";
import { Box, Flex } from "@chakra-ui/react";
import LearnTokBadge from "../../global/LearnTokBadge";
import Link from "next/link";
import UserPopCard from "./UserPopCard";
import LikeButton from "../LikeButton";
import ShareButton from "../ShareButton";
import FollowButton from "../FollowButton";

const Poster = () => {
  return (
    <div className="w-full items-center flex justify-between">
      <Tooltip
        className="p-0 m-0 border-0 shadow-none "
        placement="top-start"
        content={<UserPopCard />}
      >
        <Link href={"/"}>
          <User
            className="cursor-pointer"
            name={
              <Flex className="items-center font-medium gap-2">
                Joe Mama <LearnTokBadge />
              </Flex>
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
