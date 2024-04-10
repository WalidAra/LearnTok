"use client";
import { useAuthDialog } from "@/context/AuthDialog";
import { CloseButton } from "@chakra-ui/react";
import React from "react";

export default function CloseAuthDialogBtn() {
  const { onClose } = useAuthDialog();

  return <CloseButton onClick={onClose} />;
}
