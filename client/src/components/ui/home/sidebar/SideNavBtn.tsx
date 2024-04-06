/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import ColorSync from "../../global/ColorSync";
import { Button } from "@/components/cli/ui/button";
import { usePathname } from "next/navigation";

type Props = {
  icon: React.ReactNode;
  tooltip: string;
};

export default function SideNavBtn({ icon, tooltip }: Props) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState<boolean>(
    pathname === tooltip || (pathname === "/" && tooltip === "home")
      ? true
      : false
  );

  useEffect(() => {
    setIsActive(
      pathname === "/" + tooltip || (pathname === "/" && tooltip === "home")
        ? true
        : false
    );
  }, [pathname]);

  return (
    <ColorSync
      className="rounded-lg"
      onDark={""}
      onLight={isActive ? "bg-muted" : "text-muted-foreground "}
    >
      <Button
        variant={"ghost"}
        size="default"
        className="rounded-lg hidden xl:flex items-center gap-3 w-full justify-start"
        aria-label="Playground"
      >
        {icon}

        <p className="capitalize" > {tooltip} </p>
      </Button>
    </ColorSync>
  );
}
