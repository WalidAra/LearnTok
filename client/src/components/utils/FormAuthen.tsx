import { getProfile } from "@/utils/api/private/client";
import { auth } from "@/utils/auth";
import React from "react";
import AuthDialog from "../organisms/AuthDialog";
import { Flex } from "@chakra-ui/react";

export default async function FormAuthen() {
  const session = await auth();

  if (!session || !session.user?.name) {
    return <AuthDialog />;
  } else {
    const response = await getProfile({ token: session.user.name });

    if (response.status === false) {
      return <AuthDialog />;
    }

    return <Flex className="items-center gap-4"></Flex>;
  }
}
