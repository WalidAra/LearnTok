"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { Checkbox } from "@nextui-org/react";
export default function RememberMe() {
  return (
    <Flex className="items-center  ">
      <Checkbox /> Remember me for 30 days
    </Flex>
  );
}
