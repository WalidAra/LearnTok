"use client";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import { CloseButton } from "@chakra-ui/react";
import React from "react";

export default function CloseAuthDialogBtn() {
  const { onClose } = useAuthDialog();

  return <CloseButton onClick={onClose} />;
}
