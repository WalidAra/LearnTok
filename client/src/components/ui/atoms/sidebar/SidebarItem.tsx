import { Button } from "@/components/cli/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/cli/tooltip";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  tooltip: string;
};

export default function SidebarItem({ children, tooltip }: Props) {
  return (
    <Link href={`${tooltip === "/home" ? "/" : tooltip.trim()}`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg " // bg-muted
            aria-label="Playground"
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="capitalize" side="right" sideOffset={5}>
          {tooltip.slice(1)}
        </TooltipContent>
      </Tooltip>
    </Link>
  );
}
