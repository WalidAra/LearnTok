import { cn } from "@/lib/utils";
import React from "react";

export default function ScrollingContainer({
  className,
  key,
  children,
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div key={key} className={cn("scroll-snap-type w-full h-full", className)}>
      {children}
    </div>
  );
}
