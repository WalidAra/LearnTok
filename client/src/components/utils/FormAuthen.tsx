import { getProfile } from "@/utils/api/private/client";
import { auth } from "@/utils/auth";
import React from "react";
import AuthDialog from "../organisms/AuthDialog";

export default async function FormAuthen() {
  const session = await auth();

  if (!session || !session.user?.name) {
    return <AuthDialog />;
  } else {
    const response = await getProfile({ token: session.user.name });

    if (response.status === false) {
      return <AuthDialog />;
    }

    return null;
  }
}
