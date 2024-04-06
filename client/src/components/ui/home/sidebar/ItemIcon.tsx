/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/cli/ui/button";
import { usePathname } from "next/navigation";

type Props = {
  tooltip: string;
  children: React.ReactNode;
};

export default function ItemIcon({ children, tooltip }: Props) {
  const pathname = usePathname();
  const [variant, setVariant] = useState<
    | "default"
    | "ghost"
    | "destructive"
    | "outline"
    | "secondary"
    | "link"
    | null
    | undefined
  >(
    pathname === tooltip || (pathname === "/" && tooltip === "home")
      ? "default"
      : "ghost"
  );

  useEffect(() => {
    setVariant(
      pathname === "/" + tooltip || (pathname === "/" && tooltip === "home")
        ? "default"
        : "ghost"
    );
  }, [pathname]);

  return (
    <Button
      variant={variant}
      size="icon"
      className="rounded-lg "
      aria-label="Playground"
    >
      {children}
    </Button>
  );
}
