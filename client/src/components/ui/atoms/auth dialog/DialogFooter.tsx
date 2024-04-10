/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/cli/button";
import { AlertDialogFooter, Box } from "@chakra-ui/react";
import React from "react";

const DialogFooter = () => {
  return (
    <AlertDialogFooter className="flex flex-col">
      <Box className="w-full bg-muted rounded-md p-3 text-center border">
        <p className="text-xs font-medium">
          By continuing, you agree to LearnTok's{" "}
          <span className="text-lPrimary">Terms of Service</span> and confirm
          that you have read LearnTok's{" "}
          <span className="text-lPrimary"> Privacy Policy.</span>
        </p>
      </Box>
      <Box className="center-div">
        <p className="text-sm  text-smText">Don't Have account ? </p>
        <Button variant="link" className="p-0 pl-1">
          sign up
        </Button>
      </Box>
    </AlertDialogFooter>
  );
};

export default DialogFooter;
