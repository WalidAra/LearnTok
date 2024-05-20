import React from "react";
import { User } from "@nextui-org/react";
import { Box, Flex } from "@chakra-ui/react";
import { useFetch } from "@/hooks/useFetch";
import { defaultPic } from "@/assets/pfp";
import timeAgo from "@/lib/timeAgo";

type Props = {
  user_id: string;
  msg: string;
  createdAt: string;
};

export default async function NotePin({ msg, user_id, createdAt }: Props) {
  const res = await useFetch({ method: "GET", endPoint: `/user/${user_id}` });

  if (res.status === true) {
    return (
      <Box className="w-full flex items-center justify-normal duration-150 hover:bg-accent rounded-md p-3 cursor-pointer">
        <Flex className="flex-col gap-2 w-full">
          <Flex className="justify-between items-center">
            <User
              className="w-full justify-normal gap-3"
              name={
                <Flex className="items-center gap-1 mb-0.5">
                  <h3 className="font-medium">@{res.data.username}</h3>
                  <p>{msg}</p>
                </Flex>
              }
              description="Sunday 3:12pm"
              avatarProps={{
                src: res.data.picture ? res.data.picture : defaultPic,
              }}
            />

            <Flex className="flex-col gap-3 items-end">
              <div className="size-2">
                <div className="size-2 rounded-full bg-blue-500"></div>
              </div>
              <p className="text-xs whitespace-nowrap text-accent-foreground">
                {timeAgo(createdAt)}
              </p>
            </Flex>
          </Flex>

          {/* here  */}
        </Flex>
      </Box>
    );
  }
}
