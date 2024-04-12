import { Flex } from "@chakra-ui/react";
import React from "react";
import LoginAuthDialog from "./LoginAuthDialog";
import UserOptions from "./UserOptions";
import { auth } from "@/auth";

export default async function IsAuth() {
  const session = await auth();
  return (
    <Flex className="items-center gap-2 md:gap-4">
      {session ? (
        <>Hello there mate</>
      ) : (
        <>
          <UserOptions />
          <LoginAuthDialog />
        </>
      )}
    </Flex>
  );
}
