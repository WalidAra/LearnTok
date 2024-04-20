import React from "react";

type Props = {
  count: number;
  label: string;
  icon: React.ReactNode;
};

export default function StatusInfo({ count, icon, label }: Props) {
  return (
    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
      {icon}
      <span> {count} </span>
      <p> {label} </p>
    </div>
  );
}
