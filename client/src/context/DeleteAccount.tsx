"use client";
import { useDisclosure } from "@nextui-org/react";
import { createContext, useContext } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const DeleteAccount = createContext<Props>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

import React from "react";

export default function DeleteAccountProvider({ children }: Kids) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DeleteAccount.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </DeleteAccount.Provider>
  );
}

export const useDeleteDialog = () => useContext(DeleteAccount);
