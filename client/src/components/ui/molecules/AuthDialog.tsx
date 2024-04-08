/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  CloseButton,
  Box,
} from "@chakra-ui/react";
import { useAuthDialog } from "@/context/AuthDialog";
import AuthDialogLogo from "../atoms/auth/not auth/auth dialog/AuthDialogLogo";
import GoBackButton from "../atoms/auth/not auth/auth dialog/GoBackButton";
import LearnTokDivider from "../global/LearnTokDivider";
import SocialSignInPanel from "../atoms/auth/not auth/auth dialog/SocialSignInPanel";
import OAuthContainer from "../atoms/auth/not auth/auth dialog/OAuthContainer";
import { Button } from "@/components/cli/button";
import SignIn from "../atoms/auth/not auth/auth dialog/SignIn";
import ColorSync from "../global/ColorSync";
import SignUp from "../atoms/auth/not auth/auth dialog/SignUp";
import ConfirmSignUp from "../atoms/auth/not auth/auth dialog/ConfirmSignUp";

const AuthDialog = () => {
  const { isOpen, onClose, onOpen } = useAuthDialog();
  const cancelRef = React.useRef<any>(null);
  const session = false;
  useEffect(() => {
    const timer = setInterval(() => {
      if (!session) {
        onOpen();
      }
    }, 1000); // 1 second
  }, []);

  return (
    <div className="absolute w-full h-screen left-0 top-0">
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent w={"92%"}>
            <AlertDialogHeader
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              fontSize="lg"
              fontWeight="bold"
            >
              <div>
                <GoBackButton />
              </div>

              <AuthDialogLogo />

              <CloseButton onClick={onClose} />
            </AlertDialogHeader>

            <LearnTokDivider />

            <AlertDialogBody className="flex flex-col gap-3">
              <SignIn />
              {/* <SignUp /> */}
              {/* <ConfirmSignUp /> */}
            </AlertDialogBody>

            <AlertDialogFooter className="flex flex-col gap-3">
              <ColorSync
                className="w-full rounded-md p-3 text-center border"
                onDark={""}
                onLight={"bg-muted border-borderLight"}
                onSystem={"dark: bg-muted border-borderLight"}
              >
                <p className="text-xs font-medium">
                  By continuing, you agree to LearnTok's{" "}
                  <span className="text-lPrimary">Terms of Service</span> and
                  confirm that you have read LearnTok's{" "}
                  <span className="text-lPrimary"> Privacy Policy.</span>
                </p>
              </ColorSync>
              <Box className="center_div">
                <p className="text-sm  text-smText">Don't Have account ? </p>
                <Button variant="link" className="p-0 pl-1">
                  sign up
                </Button>
              </Box>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default AuthDialog;
