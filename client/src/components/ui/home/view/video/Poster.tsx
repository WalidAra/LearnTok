import { Flex } from "@chakra-ui/react";
import React from "react";
import { User } from "@nextui-org/react";
import FollowBtn from "./FollowBtn";
import LearnTokBadge from "@/components/ui/global/LearnTokBadge";
import Link from "next/link";

type Props = {
  user_id: string;
  description: string;
};

const Poster = () => {
  const user_id = "id";
  return (
    <Flex className="flex justify-between items-center w-full">
      <Link href={`/user/${user_id}`}>
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
      </Link>

      <FollowBtn />
    </Flex>
  );
};

export default Poster;
