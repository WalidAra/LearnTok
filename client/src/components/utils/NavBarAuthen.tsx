import { getProfile } from "@/lib/api/private/client";
import { auth } from "@/utils/auth";
import { Flex } from "@chakra-ui/react";
import React from "react";
import LoginButtonDialog from "../atoms/navbar/LoginAuthDialog";
import ThemeMenu from "../molecules/navbar/ThemeMenu";
import Toaster from "./toaster";
import UserMenu from "../organisms/UserMenu";
import NotificationMenu from "../organisms/NotificationMenu";

const NavBarAuthen = async () => {
  const session = await auth();

  if (!session || !session.user?.name) {
    return (
      <Flex className="items-center gap-4">
        <ThemeMenu />
        <LoginButtonDialog />
      </Flex>
    );
  } else {
    const response = await getProfile({ token: session.user.name });

    if (response.status === false) {
      return (
        <Flex className="items-center gap-4">
          {response.data.isExpired && <Toaster />}
          <ThemeMenu />
          <LoginButtonDialog />
        </Flex>
      );
    }

    return (
      <Flex className="items-center gap-4">
        <UserMenu client={response.data as Client} />
        <NotificationMenu token={session.user.name} />
      </Flex>
    );
  }
};

export default NavBarAuthen;
