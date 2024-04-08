"use client"
import { Button } from "@/components/cli/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  tooltip: string;
};

export default function SideNavIconBtn({ children, tooltip }: Props) {
  const pathname = usePathname();
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("rounded-lg" , pathname === tooltip || (pathname === '/' && tooltip === '/home') ? "bg-muted":"text-muted-foreground")} // bg-muted
      aria-label="Playground"
    >
      {children}
    </Button>
  );
}
