/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/cli/shadcn/button";
import { Input } from "@/components/cli/shadcn/input";
import { useFetch } from "@/hooks/useFetch";
import { Flex } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React, { useRef } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { toast } from "sonner";

type Props = {
  updateCommentsArray: () => void;
  video_id: string;
};

const CommentInput = ({ updateCommentsArray, video_id }: Props) => {
  const { data: session } = useSession();
  const commentRef = useRef<HTMLInputElement>(null);

  if (session?.user?.name && session) {
    const HandleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (commentRef.current) {
        const res = await useFetch({
          method: "POST",
          endPoint: "/comment/create",
          token: session.user?.name as string,
          TokenInclude: true,
          body: { video_id, comment: commentRef.current.value },
        });

        console.log('====================================');
        console.log(res);
        console.log('====================================');
        if (res.status === true) {
          updateCommentsArray();
        } else if (res.status === false && res.data?.offensive === true) {
          const sessionExpirationDate = new Date();
          toast(
            "Your comment is inappropriate and does not align with our community guidelines",
            {
              description:
                sessionExpirationDate.toDateString() +
                " at " +
                sessionExpirationDate.toLocaleTimeString(),
              action: {
                label: "Undo",
                onClick: () => {},
              },
            }
          );
        } else if(res.status === false && res.data?.isBanned === true){
          const sessionExpirationDate = new Date();
          toast(
            "Your account has been banned due to repeated violations of our community guidelines",
            {
              description:
                sessionExpirationDate.toDateString() +
                " at " +
                sessionExpirationDate.toLocaleTimeString(),
              action: {
                label: "Undo",
                onClick: () => {},
              },
            }
          );
          await signOut({ callbackUrl: "/", redirect: true });
        }
      }
    };

    return (
      <Flex className="flex-col w-full p-4 border-t border-border">
        <form
          onSubmit={HandleSubmit}
          className="w-full grid grid-cols-1frauto gap-2"
        >
          <Input
            placeholder="what's your opinion"
            ref={commentRef}
            className="w-full"
          />
          <Button type="submit" size={"icon"}>
            <LuSendHorizonal className="size-5" />
          </Button>
        </form>
      </Flex>
    );
  }
  return null;
};

export default React.memo(CommentInput);
