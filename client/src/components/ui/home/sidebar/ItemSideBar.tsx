import { Button } from "@/components/cli/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/cli/tooltip";
import React from "react";

type Props = {
  children: React.ReactNode;
  tooltip: string;
};

export default function ItemSideBar({ children, tooltip }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg"
          aria-label="Playground"
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="capitalize" side="right" sideOffset={5}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
