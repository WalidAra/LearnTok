import { defaultPic } from "@/assets/pfp";
import Badge from "@/components/atoms/Badge";
import { useFetch } from "@/hooks/useFetch";
import { Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@nextui-org/react";
import React from "react";

type Props = {
  user_id: string;
};

export default async function UserShortPin({ user_id }: Props) {
  const res = await useFetch({ method: "GET", endPoint: `/user/${user_id}` });

  if (res.status === true) {
    const user = res.data as User;
    return (
      <div className="flex flex-col items-center justify-evenly gap-2">
        <Avatar isBordered src={user.picture ? user.picture : defaultPic} />
        <Flex className="items-center gap-2">
          <Text fontSize={"14px"}> {user.username} </Text>
          <Badge status_name={user.Status.name} />
        </Flex>
      </div>
    );
  }
}
