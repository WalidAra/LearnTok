import { Flex } from "@chakra-ui/react";
import React from "react";
import LoginAuthDialog from "../atoms/navbar/LoginAuthDialog";
import UserOptions from "../atoms/navbar/UserOptions";
import { auth } from "@/auth";
import UserMenu from "../molecules/UserMenu";
import NotificationMenu from "../molecules/NotificationMenu";


export default async function IsAuth() {
  const session = await auth();
  return (
    <Flex className="items-center gap-2 md:gap-4">
      {session && session?.user?.name ? (
        <>
          <UserMenu id={session.user.name} />

            <NotificationMenu />
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
