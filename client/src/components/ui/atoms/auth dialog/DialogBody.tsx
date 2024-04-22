/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { AlertDialogBody } from "@chakra-ui/react";
import React from "react";
import SignIn from "../../molecules/SignIn";
import SignUp from "../../molecules/SignUp";
import ConfirmSignUp from "../../molecules/ConfirmSignUp";
import { motion } from "framer-motion";
import { useMyForm } from "@/context/MyForm";
import { cn } from "@/lib/utils";

const DialogBody = () => {
  const {
    slide: { page },
  } = useMyForm();

  return (
    <AlertDialogBody>
      <div
        className={cn(
          "w-full overflow-hidden duration-75",
          page < 2 ? "sm:h-[377px] h-[421px]" : "h-[300px]"
        )}
      >
        <motion.div
          transition={{ type: "tween", duration: 0.6, ease: "anticipate" }}
          animate={{ translateX: `-${page * 100}%` }}
          className="w-full flex"
        >
          <SignIn />
          <SignUp />
          <ConfirmSignUp />
        </motion.div>
      </div>
    </AlertDialogBody>
  );
};

export default DialogBody;
