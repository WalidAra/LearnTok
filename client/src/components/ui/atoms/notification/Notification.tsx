"use client";
import React from "react";
import { User } from "@nextui-org/react";
import { Box, Flex } from "@chakra-ui/react";
import NoteUserPin from "./NoteUserPin";

type Props = {
  user_id?: string;
  children?: React.ReactNode;
  msg: string;
};

export default function Notification({ children, user_id, msg }: Props) {
  const isRead = false;
  return (
    <Box className="w-full flex items-center justify-normal duration-150 hover:bg-accent rounded-md p-3 cursor-pointer">
      <Flex className="flex-col gap-2 w-full">
        <Flex className="justify-between items-center">
          <NoteUserPin msg={msg} />

          <Flex className="flex-col gap-3 items-end">
            <div className="size-2">
              {!isRead && (
                <div className="size-2 rounded-full bg-blue-500"></div>
              )}
            </div>
            <p className="text-xs whitespace-nowrap text-accent-foreground">
              2 hours ago
            </p>
          </Flex>
        </Flex>

        {children}
      </Flex>
    </Box>
  );
}
