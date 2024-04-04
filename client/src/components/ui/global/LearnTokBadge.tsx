import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  status_name: string;
};

export default function LearnTokBadge({ status_name, className }: Props) {
  return (
    <div
      className={cn("h-1.5 w-1.5 rounded-full", className, {
        "bg-green-400": status_name === "active",
        "bg-orange-400": status_name === "warning",
        "bg-red-600": status_name === "last_warning",
      })}
    ></div>
  );
}
