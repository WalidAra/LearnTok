"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/cli/button";
import { useMyForm } from "@/context/MyForm";
import { AlertDialogFooter, Box } from "@chakra-ui/react";
import React from "react";

const DialogFooter = () => {
  const {
    carousel: { api },
    form: { setCurrent, current },
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
      <Box className="center-div">
        <p className="text-sm  text-smText">
          {current === 1 ? "Don't Have account ?" : "Already have a account ?"}
        </p>
        <Button
          onClick={() => {
            if (current === 1) {
              setCurrent(2);
              api.scrollNext();
            } else {
              setCurrent(1);
              api.scrollPrev();
            }
          }}
          variant="link"
          className="p-0 pl-1"
        >
          {current === 1 ? "sign up" : "login"}
        </Button>
      </Box>
    </AlertDialogFooter>
  );
};

export default DialogFooter;
