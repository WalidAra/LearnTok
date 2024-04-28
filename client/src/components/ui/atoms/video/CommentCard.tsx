"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import LearnTokBadge from "../../global/LearnTokBadge";
import api from "@/lib/apis";
import { cn } from "@/lib/utils";

type Props = {
  comment: CommentProps;
};

export default function CommentCard({ comment }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [badge, setBadge] = useState<string>("");

  useEffect(() => {
    const GetData = async () => {
      const res: HTTPResponse = await api.getUserByID({ id: comment.user_id });
      if (res.status) {
        const temp = res.data as User;

        setUser(res.data);
        const res2: HTTPResponse = await api.getStatusByID({
          status_id: res.data.status_id,
        });
        if (res2.status) {
          setBadge(res2.data.name);
        }
      }
    };

    GetData();
  }, [comment.user_id]);

  return (
    <Box className="inline-flex gap-3  ">
      <Avatar
        className="shrink-0"
        src={
          user?.picture
            ? user.picture
            : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg"
        }
      />

      <div className="w-full">
        <div className="rounded-xl bg-muted inline-flex flex-col p-3">
          <Flex className="items-center gap-1.5">
            <p className="font-medium text-muted-foreground">{user?.username}</p>
            {/* <LearnTokBadge status_id={user?.status_id ? user.status_id : ""} /> */}
            <div
              className={cn(
                "rounded size-2 ",
                badge === "Active"
                  ? "bg-lightGreen"
                  : badge === "Warning"
                  ? "bg-lightOrange"
                  : "bg-lightRed"
              )}
            ></div>
          </Flex>

          <p className="text-sm" > {comment.comment} </p>
        </div>
      </div>
    </Box>
  );
}
