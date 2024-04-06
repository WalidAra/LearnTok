import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/cli/ui/tooltip";
import React from "react";
import Link from "next/link";
import ItemIcon from "./ItemIcon";
import SideNavBtn from "./SideNavBtn";

type Props = {
  icon: React.ReactNode;
  tooltip: string;
};

export default function ItemSideBar({ icon, tooltip }: Props) {
  return (
    <Link className="w-full" href={tooltip !== "home" ? `/${tooltip}` : "/"}>
      <div className="w-full xl:hidden">
        <Tooltip>
          <TooltipTrigger>
            <ItemIcon tooltip={tooltip}>{icon}</ItemIcon>
          </TooltipTrigger>
          <TooltipContent
            className="bg-background capitalize border-border border shadow-sm text-secondary-foreground"
            side="right"
            sideOffset={5}
          >
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </div>

      <SideNavBtn icon={icon} tooltip={tooltip} />
    </Link>
  );
}
