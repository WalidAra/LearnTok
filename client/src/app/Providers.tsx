"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: Kids) => {
  return (
    <ChakraProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ChakraProvider>
  );
};

export default Providers;
