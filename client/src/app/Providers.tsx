"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: Kids) => {
  return (
    <SessionProvider>
      <ChakraProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default Providers;
