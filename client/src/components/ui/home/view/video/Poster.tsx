import { Flex } from "@chakra-ui/react";
import React from "react";
import { User } from "@nextui-org/react";
import FollowBtn from "./FollowBtn";
import LearnTokBadge from "@/components/ui/global/LearnTokBadge";

type Props = {
  user_id: string;
  description: string;
};

const Poster = () => {
  return (
    <Flex className="flex justify-between items-center w-full">
      <User
        name={
          <div className="flex items-center gap-2">
            <p>Jane Doe</p>
            <LearnTokBadge status_name="active" />
          </div>
        }
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          size: "sm",
        }}
      />

      <FollowBtn />
    </Flex>
  );
};

export default Poster;
