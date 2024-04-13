import { Button } from "@/components/cli/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/cli/tooltip";
import Link from "next/link";
import React from "react";

type Props = {
  tooltip: string;
  children: React.ReactNode;
};

export default function SideNavItem({ children, tooltip }: Props) {
  return (
    <Link href={tooltip === "/home" ? "/" : tooltip.split(" ").join("")}>
      <div className="md:hidden block">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg " //bg-muted
              aria-label="Playground"
            >
              {children}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="capitalize" side="right" sideOffset={5}>
            {tooltip.slice(1)}
          </TooltipContent>
        </Tooltip>
      </div>

      <Button
        variant="ghost"
        size="default"
        className="rounded-lg w-full items-center justify-start hidden md:flex gap-2 " //bg-muted
        aria-label="Playground"
      >
        {children}

        <span> {tooltip.slice(1)} </span>
      </Button>
    </Link>
  );
}
