/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import React from "react";
import { LuBell } from "react-icons/lu";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/cli/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/cli/dropdown-menu";

import { LuCheckCheck } from "react-icons/lu";

import NoteBadge from "../atoms/notification/NoteBadge";
import { Flex, Heading } from "@chakra-ui/react";
import NoteContainer from "../atoms/notification/NoteContainer";
import { Button } from "@/components/cli/button";

export default function NotificationMenu() {
  const arr = [1, 2, 3];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="size-9 inline-flex hover:bg-accent justify-center items-center border-border border relative rounded-lg">
          <div
            className={cn(
              "absolute right-2 top-2 size-2 rounded-full bg-red-600 duration-300",
              arr.length > 0 ? "" : "scale-0"
            )}
          ></div>
          <LuBell className="size-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 mt-4 p-3 flex flex-col gap-3 w-full md:w-[455px] rounded-xl shadow-none">
        <Flex className="justify-between font-semibold items-center">
          <h2 className="text-xl">Your notifications</h2>

          <button className="flex items-center gap-3">
            <LuCheckCheck />

            <span>Mark all as read</span>
          </button>
        </Flex>

        <Tabs defaultValue="view all">
          <TabsList>
            <TabsTrigger className="flex items-center gap-2" value="view all">
              View all <NoteBadge count={4} />
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="comments">
              Comments <NoteBadge count={4} />
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="followings">
              Followings
              <NoteBadge count={4} />
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="likes">
              Likes
              <NoteBadge count={4} />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="view all">
            <NoteContainer />
          </TabsContent>
          <TabsContent value="comments">
            <NoteContainer />
          </TabsContent>
          <TabsContent value="followings">
            <NoteContainer />
          </TabsContent>
          <TabsContent value="likes">
            <NoteContainer />
          </TabsContent>
        </Tabs>

        <DropdownMenuSeparator className="bg-border" />

        <Flex className="justify-end">
          <Button>View all notifications</Button>
        </Flex>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
