import api from "@/lib/apis";
import { Flex } from "@chakra-ui/react";
import { User } from "@nextui-org/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  id: string;
};
export default async function UserMenuTrigger({ id }: Props) {
  const user: Client = await api.getUserProfile({ token: id });

  return (
    <User
      className="cursor-pointer"
      name={
        <Flex className="items-center gap-2">
          <p className="hidden sm:block">Jane Doe</p>
          <div className={"text-smText"}>
            <IoIosArrowDown />
          </div>
        </Flex>
      }
      avatarProps={{
        src: user.picture
          ? user.picture
          : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg",
        size: "sm",
        isBordered: true,
      }}
    />
  );
}
