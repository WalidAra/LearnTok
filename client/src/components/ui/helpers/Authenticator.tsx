import { auth } from "@/auth";
import React from "react";
import AuthDialog from "../organisms/AuthDialog";

const Authenticator = async () => {
  const session = await auth();

  if (!session) {
    return <AuthDialog />;
  }
};

export default Authenticator;
