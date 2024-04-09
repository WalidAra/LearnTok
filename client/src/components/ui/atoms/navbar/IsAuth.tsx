import { Flex } from "@chakra-ui/react";
import React from "react";
import LoginAuthDialog from "./LoginAuthDialog";
import UserOptions from "./UserOptions";

export default function IsAuth() {
  const session = false;

  return (
    <Flex className="items-center gap-2 md:gap-4">
      {session ? (
        <></>
      ) : (
        <>
          <UserOptions />
          <LoginAuthDialog />
        </>
      )}
    </Flex>
  );
}
