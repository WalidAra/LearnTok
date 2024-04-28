/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Flex,
} from "@chakra-ui/react";
import { useDeleteDialog } from "@/context/DeleteAccount";
import { Button } from "@/components/cli/button";
import { IoWarningOutline } from "react-icons/io5";
import api from "@/lib/apis";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function DeleteAccDialog() {
  const { data: session } = useSession();
  const { onOpen, isOpen, onClose } = useDeleteDialog();
  const cancelRef = React.useRef<any>();
  const router = useRouter();

  const HandleDelete = async () => {
    if (session && session.user?.name) {
      const res: HTTPResponse = await api.deleteProfile({
        token: session.user.name,
      });
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      if (res.status) {
        onClose();
        signOut({ callbackUrl: "/", redirect: true });
      }
    }
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent className="text-center">
            <AlertDialogHeader
              className="flex flex-col justify-center items-center gap-2"
              fontSize="lg"
              fontWeight="bold"
            >
              <div className="p-3 rounded-full bg-red-500/20 text-red-500">
                <IoWarningOutline className="size-8" />
              </div>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Flex className="w-full justify-center gap-4 items-center">
                <Button onClick={onClose} className="w-40" variant={"outline"}>
                  Cancel
                </Button>
                <Button
                  onClick={HandleDelete}
                  className="w-40 bg-red-500 hover:bg-red-800 duration-200"
                >
                  Delete
                </Button>
              </Flex>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
