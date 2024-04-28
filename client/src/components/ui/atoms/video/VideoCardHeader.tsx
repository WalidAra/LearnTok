import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import FollowButton from "../FollowButton";
import api from "@/lib/apis";
import UserCard from "../../global/UserCard";
import FollowContainer from "./FollowContainer";

type Props = {
  user_id: string;
  description: string;
};

export default async function VideoCardHeader({ user_id, description }: Props) {
  const res: HTTPResponse = await api.getUserByID({ id: user_id });

  return (
    <Box p={0} className="p-4 flex flex-col ">
      <Flex className="items-center justify-between">
        <UserCard id={res.data.id} />
        <FollowContainer user_id={res.data.id} />
      </Flex>

      <Box className="line-clamp-1 text-sm">{description}</Box>
    </Box>
  );
}
