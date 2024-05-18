"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { createContext } from "react";
import { useDisclosure } from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const deleteVideo = createContext<Props>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export default function DeleteVideoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <deleteVideo.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </deleteVideo.Provider>
  );
}
