"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { Checkbox } from "@nextui-org/react";

type Props = {
  recall: boolean;
  setRecall: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RememberMe({ recall, setRecall }: Props) {
  return (
    <Flex className="items-center  ">
      <Checkbox
        value={recall ? "true" : "false"}
        onChange={() => {
          setRecall((prev) => !prev);
        }}
      />{" "}
      Remember me for 30 days
    </Flex>
  );
}
