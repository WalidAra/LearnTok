import api from "@/lib/apis";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  status_id: string;
};

export default async function LearnTokBadge({ status_id }: Props) {
  const res:HTTPResponse = await api.getStatusByID({ status_id });

  return (
    <div
      className={cn(
        "rounded size-2 ",
        res.data.name === "Active"
          ? "bg-lightGreen"
          : res.data.name === "Warning"
          ? "bg-lightOrange"
          : "bg-lightRed"
      )}
    ></div>
  );
}
