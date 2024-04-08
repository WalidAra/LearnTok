"use client"
import { Button } from '@/components/cli/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
  children: React.ReactNode;
  tooltip: string;
};

export default function SideNavBtn({children , tooltip}:Props) {
    const pathname = usePathname();
  return (
    <Button
      variant="ghost"
      size="default"
      className={cn(
        "rounded-lg w-full hidden lg:flex items-center justify-normal gap-2",
        pathname === tooltip || (pathname === "/" && tooltip === "/home")
          ? "bg-muted"
          : "text-muted-foreground"
      )}
      aria-label="Playground"
    >
      {children}

      <p className="capitalize"> {tooltip.slice(1)} </p>
    </Button>
  );
}
