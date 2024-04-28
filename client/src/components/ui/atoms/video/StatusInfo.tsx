import React from "react";

type Props = {
  count: number;
  label: string;
  icon: React.ReactNode;
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

export default function StatusInfo({ count, icon, label }: Props) {
  return (
    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
      {icon}
      <span> {formatNumber(count)} </span>
      <p> {label} </p>
    </div>
  );
}
