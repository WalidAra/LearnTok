"use client";
import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const AuthDialog = createContext<Props>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

import React from "react";

export default function AuthDialogProvider({ children }:{ children: React.ReactNode}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AuthDialog.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </AuthDialog.Provider>
  );
}

export const useAuthDialog = () => {
  return useContext(AuthDialog);
};
