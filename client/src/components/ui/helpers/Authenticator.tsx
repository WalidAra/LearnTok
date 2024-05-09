import { auth } from "@/auth";
import React from "react";
import AuthDialog from "../organisms/AuthDialog";
import api from "@/lib/apis";

const Authenticator = async () => {
  const session = await auth();
  const res: HTTPResponse = await api.getUserProfile({
    token: session?.user?.name as string,
  });

  if (!res.status) {
    return <AuthDialog />;
  }
};

export default Authenticator;
