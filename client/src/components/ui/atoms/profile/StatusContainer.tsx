import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  count: number;
  label: string;
};

function formatNumber(number: number) {
  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(1) + "m";
  } else if (number >= 1000000000 && number < 1000000000000) {
    return (number / 1000000000).toFixed(1) + "b";
  } else {
    return number.toString();
  }
}

export default function StatusContainer({ count, label }: Props) {
  const formattedCount = formatNumber(count);
  return (
    <Flex className="items-center gap-1.5 text-sm sm:text-base font-semibold capitalize">
      <span> {formattedCount} </span>
      <p> {label} </p>
    </Flex>
  );
}
