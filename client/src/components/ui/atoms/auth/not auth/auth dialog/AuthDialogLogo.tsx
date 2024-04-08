import LearnTokLogo from "@/components/ui/global/Logo";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function AuthDialogLogo() {
  return (
    <Flex className="items-center gap-2">
      <LearnTokLogo size={30} />

      <h1 className="text-2xl" >LearnTok</h1>
    </Flex>
  );
}
