import { Flex } from "@chakra-ui/react";
import React from "react";
import LoginAuthDialog from "../atoms/navbar/LoginAuthDialog";
import UserOptions from "../atoms/navbar/UserOptions";
import { auth } from "@/auth";
import UserMenu from "../molecules/UserMenu";
import NotificationMenu from "../molecules/NotificationMenu";
import api from "@/lib/apis";

export default async function IsAuth() {
  const session = await auth();
  const res: HTTPResponse = await api.getUserProfile({
    token: session?.user?.name as string,
  });

  return (
    <Flex className="items-center gap-2 md:gap-4">
      {res.status ? (
        <>
          <UserMenu id={session?.user?.name as string} />
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
