import { cn } from "@/lib/utils";
import React from "react";
import { LuBell } from "react-icons/lu";


export default function NotificationMenu() {
  const arr = [1, 2, 3];

  return (
    <div className="size-9 inline-flex hover:bg-accent justify-center items-center border-border border relative rounded-lg">
      <div
        className={cn(
          "absolute right-2 top-2 size-2 rounded-full bg-red-600 duration-300",
          arr.length > 0 ? "" : "scale-0"
        )}
      ></div>
      <LuBell className="size-5" />
    </div>
  );
}
