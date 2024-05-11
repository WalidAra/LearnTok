"use client";

import { Button } from "@/components/cli/shadcn/button";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import React from "react";
import { LuLogIn } from "react-icons/lu";

export default function LoginButtonDialog() {
  const { onOpen } = useAuthDialog();

  return (
    <Button onClick={onOpen} size={"default"} className="capitalize">
      <LuLogIn className="mr-2 size-4" /> login
    </Button>
  );
}
