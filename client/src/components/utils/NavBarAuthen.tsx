import { getProfile } from "@/utils/api/private/client/client";
import { auth } from "@/utils/auth";
import { Flex } from "@chakra-ui/react";
import React from "react";
import LoginButtonDialog from "../molecules/navbar/LoginAuthDialog";
import ThemeMenu from "../molecules/navbar/ThemeMenu";
import Toaster from "./toaster";

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

    return <Flex className="items-center gap-4"></Flex>;
  }
};

export default NavBarAuthen;
