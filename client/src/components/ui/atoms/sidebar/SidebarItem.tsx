import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/cli/tooltip";
import Link from "next/link";
import React from "react";
import SideNavIconBtn from "./SideNavIconBtn";
import SideNavBtn from "./SideNavBtn";

type Props = {
  children: React.ReactNode;
  tooltip: string;
};

export default function SidebarItem({ children, tooltip }: Props) {
  return (
    <Link
      className="w-full"
      href={`${tooltip === "/home" ? "/" : tooltip.trim()}`}
    >
      <div className="lg:hidden block w-full">
        <Tooltip>
          <TooltipTrigger asChild>
            <SideNavIconBtn tooltip={tooltip}>{children}</SideNavIconBtn>
          </TooltipTrigger>
          <TooltipContent className="capitalize" side="right" sideOffset={5}>
            {tooltip.slice(1)}
          </TooltipContent>
        </Tooltip>
      </div>

      <SideNavBtn tooltip={tooltip}>
        {children}
      </SideNavBtn>
    </Link>
  );
}
