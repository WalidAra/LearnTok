/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Divider,
} from "@chakra-ui/react";
import { useAuthDialog } from "@/context/AuthDialog";
import DialogFooter from "../atoms/auth dialog/DialogFooter";
import DialogHeader from "../atoms/auth dialog/DialogHeader";
import DialogBody from "../atoms/auth dialog/DialogBody";
import MyFormProvider from "@/context/MyForm";
import { useSession } from "next-auth/react";

const AuthDialog = () => {
  const cancelRef = React.useRef<any>();
  const { data: session } = useSession();
  const { isOpen, onClose, onOpen } = useAuthDialog();
  useEffect(() => {
    if (!session || !session.user) {
      const timer = setInterval(() => {
        onOpen();
      }, 100);

      return () => clearInterval(timer);
    }
  }, [session]);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent w={"90%"} maxH={"95%"}>
          <MyFormProvider>
            <DialogHeader />
            <Divider />
            <DialogBody />
            <Divider />
            <DialogFooter />
          </MyFormProvider>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AuthDialog;
