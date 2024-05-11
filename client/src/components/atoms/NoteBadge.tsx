import React from "react";

type Props = {
  count: number;
};

export default function NoteBadge({ count }: Props) {
  return (
    <div className="size-4 rounded-md bg-muted text-xs text-primary center-div">
      {count}
    </div>
  );
}
