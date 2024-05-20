import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/cli/shadcn/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/cli/shadcn/tabs";
import { Flex } from "@chakra-ui/react";
import { LuBell, LuCheckCheck } from "react-icons/lu";
import NoteBadge from "../atoms/NoteBadge";
import { Button } from "../cli/shadcn/button";
import { cn } from "@/lib/utils";
import { useFetch } from "@/hooks/useFetch";
import NotePin from "./NotePin";

type Props = {
  token: string;
};

const NotificationMenu = async ({ token }: Props) => {
  const notes = await useFetch({
    method: "GET",
    token: token,
    TokenInclude: true,
    endPoint: "/bells/",
  });

  console.log("====================================");
  console.log(notes.data);
  console.log("====================================");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="relative"
          size="icon"
          aria-label="Home"
        >
          <div
            className={cn(
              "absolute right-2.5 top-2.5 size-2 rounded-full bg-red-600 duration-300"
            )}
          ></div>
          <LuBell className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 mt-5 p-3 flex flex-col gap-3 w-full md:w-auto shadow-none">
        <Flex className="justify-between font-semibold items-center">
          <h2 className="text-xl">Your notifications</h2>

          <button className="flex items-center gap-3">
            <LuCheckCheck />

            <span>Mark all as read</span>
          </button>
        </Flex>
        <Tabs defaultValue="all" className="">
          <TabsList>
            <TabsTrigger className="flex items-center gap-2" value="all">
              View all{" "}
              <NoteBadge
                count={
                  notes.data.likes.length +
                  notes.data.comments.length +
                  notes.data.follows.length
                }
              />
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="comments">
              comments <NoteBadge count={notes.data.comments.length} />
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="followers">
              Followers
              <NoteBadge count={notes.data.follows.length} />
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="likes">
              Likes <NoteBadge count={notes.data.likes.length} />
            </TabsTrigger>
          </TabsList>
          <TabsContent className="flex flex-col gap-3" value="all">
            {notes.data.all.map((c: Note) => (
              <NotePin createdAt={c.createdAt} key={c.id} msg={c.content} user_id={c.user_id} />
            ))}
          </TabsContent>
          <TabsContent className="flex flex-col gap-3" value="comments">
            comments
          </TabsContent>
          <TabsContent className="flex flex-col gap-3" value="followers">
            followers
          </TabsContent>
          <TabsContent className="flex flex-col gap-3" value="likes">
            Likes.
          </TabsContent>
        </Tabs>

        {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationMenu;
