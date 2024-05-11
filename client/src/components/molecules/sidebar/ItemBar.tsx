"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/cli/shadcn/tooltip";
import { Button } from "@/components/cli/shadcn/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
type Props = {
  tooltip: string;
  children: React.ReactNode;
};

export default function ItemBar({ children, tooltip }: Props) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-lg",
            (pathname === "/" && tooltip === "/home") || pathname === tooltip
              ? "bg-muted text-foreground"
              : "text-muted-foreground"
          )}
          aria-label="Playground"
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="capitalize" side="right" sideOffset={5}>
        {tooltip.slice(1)}
      </TooltipContent>
    </Tooltip>
  );
}
