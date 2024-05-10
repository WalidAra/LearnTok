/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Divider,
} from "@chakra-ui/react";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import DialogFooter from "../molecules/auth dialog/DialogFooter";
import DialogHeader from "../molecules/auth dialog/DialogHeader";
import DialogBody from "../molecules/auth dialog/DialogBody";
import MyFormProvider from "@/providers/Form";

const AuthDialog = () => {
  const cancelRef = React.useRef<any>();
  const { isOpen, onClose, onOpen } = useAuthDialog();
  useEffect(() => {
    const timer = setInterval(() => {
      onOpen();
    }, 300000);

    return () => clearInterval(timer);
  }, []);

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
