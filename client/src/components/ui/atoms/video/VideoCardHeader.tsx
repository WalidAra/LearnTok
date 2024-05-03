import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import api from "@/lib/apis";
import UserCard from "../../global/UserCard";
import FollowContainer from "./FollowContainer";
import { auth } from "@/auth";

type Props = {
  user_id: string;
  description: string;
};

export default async function VideoCardHeader({ user_id, description }: Props) {
  const res: HTTPResponse = await api.getUserByID({ id: user_id });

  const session = await auth();
  if (session?.user?.name) {
    const followRes: HTTPResponse = await api.followState({
      user_id: user_id,
      token: session.user.name,
    });

    return (
      <Box p={0} className="p-4 flex flex-col ">
        <Flex className="items-center justify-between">
          <UserCard id={res.data.id} />
          {/* <FollowContainer followState={followRes.data} user_id={res.data.id} /> */}
        </Flex>
        <Box className="line-clamp-1 text-sm">{description}</Box>
      </Box>
    );
  }
}
