import { formatNumber } from "@/lib/formatNumber";
import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  count: number;
  label: string;
};

export default function StatusContainer({ count, label }: Props) {
  const formattedCount = formatNumber(count);
  return (
    <Flex className="items-center gap-1.5 text-sm sm:text-base font-semibold capitalize">
      <span> {formattedCount} </span>
      <p> {label} </p>
    </Flex>
  );
}
