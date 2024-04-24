import React from "react";
import { User } from "@nextui-org/react";
import { Flex } from "@chakra-ui/react";
import LearnTokBadge from "../global/LearnTokBadge";
import api from "@/lib/apis";

type Props = {
  id: string;
};

const UserCard = async ({ id }: Props) => {
  const res: HTTPResponse = await api.getUserProfile({ token: id });
  return (
    <User
      name={
        <Flex className="items-center font-medium gap-2">
          {res.data.username} <LearnTokBadge status_id={res.data.status_id} />
        </Flex>
      }
      description={res.data.fullName}
      avatarProps={{
        src: res.data.picture
          ? res.data.picture
          : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg",
        size: "sm",
        isBordered: true,
      }}
    />
  );
};

export default UserCard;
