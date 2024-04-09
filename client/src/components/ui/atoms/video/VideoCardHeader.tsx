import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import UserCard from "../UserCard";
import FollowButton from "../FollowButton";

type Props = {
  user_id: string;
};

export default async function VideoCardHeader() {
  // const res = await api.getUserByID()

  return (
    <Box p={0} className="p-4 flex flex-col gap-2 ">
      <Flex className="items-center justify-between">
        <UserCard />
        <FollowButton />
      </Flex>

      <Box className="line-clamp-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero non
        similique perspiciatis sint placeat veritatis nam sed, aliquam ad
        voluptate animi? Iste veniam explicabo, culpa nesciunt pariatur placeat
        velit!
      </Box>
    </Box>
  );
}
