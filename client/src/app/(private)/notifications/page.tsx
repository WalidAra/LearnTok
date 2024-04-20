import { Button } from "@/components/cli/button";
import MainView from "@/components/ui/molecules/MainView";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/cli/tabs";
import NoteBadge from "@/components/ui/atoms/notification/NoteBadge";
import NoteContainer from "@/components/ui/atoms/notification/NoteContainer";
import NormalNote from "@/components/ui/atoms/notification/types/NormalNote";
import CommentNote from "@/components/ui/atoms/notification/types/CommentNote";

const NotificationUser = () => {
  return (
    <MainView className="flex flex-col p-2 gap-3">
      <Flex className="items-center justify-between">
        <h1 className="font-semibold" >Notifications</h1>
        <Button variant={"ghost"}> Mark as read</Button>
      </Flex>

      <Box className="flex-1 grid flex-col gap-3 ">
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
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <NormalNote msg="liked your video" />
          </TabsContent>
          <TabsContent value="comments">
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <NormalNote msg="liked your video" />
          </TabsContent>
          <TabsContent value="followings">
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <NormalNote msg="liked your video" />
          </TabsContent>
          <TabsContent value="likes">
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <CommentNote msg="commented on your video" />
            <NormalNote msg="liked your video" />
            <NormalNote msg="liked your video" />
          </TabsContent>
        </Tabs>
      </Box>
    </MainView>
  );
};

export default NotificationUser;
