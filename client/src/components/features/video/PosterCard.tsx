import TwitterCard from "@/components/organisms/TwitterCard";
import FollowCheck from "@/components/utils/FollowCheck";
import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  user: PosterCip;
};

export default function PosterCard({ user }: Props) {
  return (
    <Flex className="flex flex-col">
      <Flex className="w-full justify-between items-center">
        <TwitterCard
          fullName={user.fullName}
          pic={user.picture}
          status_name={user.Status.name}
          username={user.username}
        />

        <FollowCheck user_id={user.id} />
      </Flex>
    </Flex>
  );
}
