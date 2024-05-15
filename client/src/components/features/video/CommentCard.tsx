import { defaultPic } from "@/assets/pfp";
import Badge from "@/components/atoms/Badge";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type Props = {
  comment: string;
  status_name: string;
  picture: string;
  username: string;
  id: string;
};

const CommentCard = ({
  comment,
  picture,
  status_name,
  username,
  id,
}: Props) => {
  return (
    <Box className="inline-flex gap-3  ">
      <Link href={`/user/${id}`}>
        <Avatar
          isBordered
          className="shrink-0"
          src={picture ? picture : defaultPic}
        />
      </Link>

      <div className="w-full">
        <div className="rounded-xl bg-muted inline-flex flex-col p-3">
          <Flex className="items-center gap-1.5">
            <Link href={`/user/${id}`}>
              <p className=" cursor-pointer text-muted-foreground hover:underline">
                {username}
              </p>
            </Link>

            <Badge status_name={status_name} />
          </Flex>

          <Text fontSize={"14px"}> {comment} </Text>
        </div>
      </div>
    </Box>
  );
};

export default React.memo(CommentCard);
