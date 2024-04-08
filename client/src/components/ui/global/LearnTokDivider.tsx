"use client";
import React from "react";
import { Separator } from "@/components/cli/separator";
import { useTheme } from "@/context/Theme";
import { cn } from "@/lib/utils";

export default function LearnTokDivider() {
  const { theme } = useTheme();

  return (
    <Separator
      className={cn(
        "w-full",
        theme === "dark"
          ? ""
          : theme === "light"
          ? "border-borderLight"
          : "dark: border-borderLight"
      )}
    />
  );
}
