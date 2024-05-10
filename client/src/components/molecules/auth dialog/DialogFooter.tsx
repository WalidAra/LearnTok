"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/cli/shadcn/button";
import { useMyForm } from "@/providers/Form";
import { AlertDialogFooter, Box } from "@chakra-ui/react";
import React from "react";

const DialogFooter = () => {
  const {
    slide: { page, setPage },
  } = useMyForm();

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
      <Box className="center">
        <p className="text-sm  text-smText">
          {page === 0 ? "Don't Have account ?" : "Already have a account ?"}
        </p>
        <Button
          onClick={() => {
            if (page === 0) {
              setPage(1);

            } else {
              setPage(0);
            }
          }}
          variant="link"
          className="p-0 pl-1"
        >
          {page === 0 ? "sign up" : "login"}
        </Button>
      </Box>
    </AlertDialogFooter>
  );
};

export default DialogFooter;
