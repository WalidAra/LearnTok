import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import React from "react";

export default function Or() {
  return (
    <div className="py-2" >
      <Box position="relative">
        <Divider colorScheme="gray" />
        <AbsoluteCenter bg="white" px="4" className=" text-gray-400">
          or
        </AbsoluteCenter>
      </Box>
    </div>
  );
}
