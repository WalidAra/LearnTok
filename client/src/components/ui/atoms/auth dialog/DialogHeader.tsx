import { AlertDialogHeader, Flex } from "@chakra-ui/react";
import React from "react";
import CloseAuthDialogBtn from "./head/CloseAuthDialogBtn";
import LearnTokLogo from "../../global/Logo";
import FormReturnButton from "./head/FormReturnButton";

const DialogHeader = () => {
  return (
    <AlertDialogHeader
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontSize="x-large"
      fontWeight="bold"
      className="px-1.5"
    >
      <div className="size-8">
        <FormReturnButton />
      </div>
      <Flex className="gap-2 items-center">
        <LearnTokLogo size={25} />
        <h2>LearnTok</h2>
      </Flex>
      <CloseAuthDialogBtn />
    </AlertDialogHeader>
  );
};

export default DialogHeader;
