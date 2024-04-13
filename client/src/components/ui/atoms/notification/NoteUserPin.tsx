import { Flex } from "@chakra-ui/react";
import { User } from "@nextui-org/react";
import React from "react";

type Props = {
  user_id?: string;
  msg: string;
};

export default function NoteUserPin({ msg, user_id }: Props) {
  return (
    <User
      className="w-full justify-normal gap-3"
      name={
        <Flex className="items-center gap-1 mb-0.5">
          <h3 className="font-medium">@Jane Doe</h3>
          <p>{msg}</p>
        </Flex>
      }
      description="Sunday 3:12pm"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
    />
  );
}
