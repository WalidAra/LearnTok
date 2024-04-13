"use client";
import { Button } from "@/components/cli/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/cli/tooltip";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  tooltip: string;
  children: React.ReactNode;
};

export default function SideNavItem({ children, tooltip }: Props) {
  const pathname = usePathname();

  return (
    <Link href={tooltip === "/home" ? "/" : tooltip.split(" ").join("")}>
      <div className="md:hidden block">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-lg",
                (pathname === "/" && tooltip === "/home") ||
                  pathname === tooltip
                  ? "bg-muted text-foreground"
                  : ""
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
      </div>

      <Button
        variant="ghost"
        size="default"
        className={cn(
          "rounded-lg w-full items-center justify-start hidden md:flex gap-2",
          (pathname === "/" && tooltip === "/home") || pathname === tooltip
            ? "bg-muted text-foreground"
            : ""
        )}
        aria-label="Playground"
      >
        {children}

        <span className="capitalize"> {tooltip.slice(1)} </span>
      </Button>
    </Link>
  );
}
