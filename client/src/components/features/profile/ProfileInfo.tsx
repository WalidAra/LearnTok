import React from "react";
import { Avatar } from "@nextui-org/react";
import { defaultPic } from "@/assets/pfp";
import { Box, Flex } from "@chakra-ui/react";
import Badge from "@/components/atoms/Badge";
import LearnTokLogo from "@/components/atoms/LearnTokLogo";
import CopyUrlProfile from "./CopyUrlProfile";
import { formatDate } from "@/lib/formatDate";

type Props = {
  picture: string;
  status_name: string;
  username: string;
  fullName: string;
  createdAt: string;
  bio: string;
  children?: React.ReactNode;
};

export default function ProfileInfo({
  picture,
  status_name,
  username,
  fullName,
  createdAt,
  bio,
  children
}: Props) {
  return (
    <section className="w-full flex flex-col gap-3 pt-10">
      <div className="w-full center">
        <Avatar
          src={picture ? picture : defaultPic}
          className=" sm:w-36 sm:h-36 w-28 h-28"
          isBordered
        />
      </div>

      <Box className="w-full flex flex-col gap-2 text-center">
        <Flex className="items-center justify-center gap-2">
          <h1 className="font-semibold text-3xl"> {fullName} </h1>
          <Badge status_name={status_name} />
        </Flex>

        <Flex className="items-center justify-center gap-2 font-medium">
          <LearnTokLogo size={20} />
          <p> {username} </p>
          <CopyUrlProfile />
        </Flex>

        <p className=" text-base sm:text-lg font-medium">
          {formatDate(createdAt)}
        </p>

        <p className="sm:text-base text-muted-foreground text-sm font-medium">
          {bio ? bio : "no bio."}
        </p>

        {children}
      </Box>
    </section>
  );
}
