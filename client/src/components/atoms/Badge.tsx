import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  status_name: string;
};

export default function Badge({ status_name }: Props) {
  return (
    <div
      className={cn(
        "rounded size-2 ",
        status_name === "Active"
          ? "bg-lightGreen"
          : status_name === "Warning"
          ? "bg-lightOrange"
          : "bg-lightRed"
      )}
    ></div>
  );
}
