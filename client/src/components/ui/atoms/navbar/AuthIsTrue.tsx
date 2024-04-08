import { Flex } from "@chakra-ui/react";
import React from "react";
import LoginAuthDialog from "../auth/not auth/navbar/LoginAuthDialog";
import UserOptions from "../auth/not auth/navbar/UserOptions";
import UserMenu from "../auth/is auth/navbar/UserMenu";
import NoteMenu from "../auth/is auth/navbar/NoteMenu";

export default function AuthIsTrue() {
  const session = false;
  return (
    <Flex className="xl:gap-5 gap-2 sm:gap-3 items-center">
      {session ? (
        <>
          <UserMenu />
          <NoteMenu />
        </>
      ) : (
        <>
          <UserOptions />
          <LoginAuthDialog />
        </>
      )}
    </Flex>
  );
}