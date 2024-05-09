"use client";

import { Button } from "@/components/cli/button";
import { useAuthDialog } from "@/context/AuthDialog";
import { signOut } from "next-auth/react";
import React from "react";
import { LuLogIn } from "react-icons/lu";

export default function LoginAuthDialog() {
  const { onOpen } = useAuthDialog();
  const DestroyToken = async () => {
    onOpen();
    // await signOut({ redirect: true });
  };

  return (
    <Button onClick={DestroyToken} size={"default"} className="capitalize">
      <LuLogIn className="mr-2 size-4" /> login
    </Button>
  );
}
