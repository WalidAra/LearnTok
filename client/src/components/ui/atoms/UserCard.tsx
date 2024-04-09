import React from "react";
import { User } from "@nextui-org/react";
import { Flex } from "@chakra-ui/react";
import LearnTokBadge from "../global/LearnTokBadge";

type Props = {
  // user props
};

const UserCard = () => {
  return (
    <User
      name={
        <Flex className="items-center gap-2">
          Jane Doe <LearnTokBadge />{" "}
        </Flex>
      }
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        size: "sm",
        isBordered: true,
      }}
    />
  );
};

export default UserCard;
