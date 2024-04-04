import { Button } from "@/components/cli/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/cli/ui/tooltip";
import React from "react";
import LearnTokLogo from "../../global/Logo";
import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  tooltip: string;
};

export default function ItemSideBar({ icon, tooltip }: Props) {
  return (
    <Link className="w-full" href={tooltip !== "home" ? `/${tooltip}` : "/"}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg "
            aria-label="Playground"
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="bg-background capitalize border-border border shadow-sm text-secondary-foreground"
          side="right"
          sideOffset={5}
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </Link>
  );
}
