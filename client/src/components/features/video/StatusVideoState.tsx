import { formatNumber } from "@/lib/formatNumber";
import React from "react";

type Props = {
  count: number;
  label: string;
  icon: React.ReactNode;
};

export default function StatusVideoState({ count, icon, label }: Props) {
  return (
    <div className="flex items-center text-muted-foreground gap-1.5 text-xs sm:text-sm font-medium">
      {icon}
      <span> {formatNumber(count)} </span>
      <p> {label} </p>
    </div>
  );
}
