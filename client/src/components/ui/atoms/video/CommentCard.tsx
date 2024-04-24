import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LearnTokBadge from "../../global/LearnTokBadge";
import { Avatar } from "@nextui-org/react";

type Props = {
  comment: string;
};

export default function CommentCard({ comment }: Props) {
  return (
    <Box className="inline-flex gap-3  ">
      <Avatar className="shrink-0" />

      <div className="w-full">
        <div className="rounded-xl bg-muted inline-flex flex-col p-3">
          <Flex className="items-center gap-1.5">
            <p className="font-medium">Exotic Ara</p>
            {/* <LearnTokBadge /> */}
          </Flex>
          <p>{comment}</p>
        </div>
      </div>
    </Box>
  );
}
