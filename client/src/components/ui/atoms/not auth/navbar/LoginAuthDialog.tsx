"use client";
import { Button } from "@/components/cli/button";
// import { useAuthDialog } from "@/context/AuthDialog";
import React from "react";
import { LuLogIn } from "react-icons/lu";

export default function LoginAuthDialog() {
  //   const { onOpen } = useAuthDialog();

  return (
    <Button size={"default"} className="capitalize">
      <LuLogIn className="mr-2 size-4" /> login
    </Button>
  );
}
