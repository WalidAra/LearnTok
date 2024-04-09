"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useTheme } from "next-themes";

type Props = React.HTMLProps<HTMLDivElement> & {
  onDark: string;
  onLight: string;
  onSystem: string;
};

const ColorSync = ({
  onDark,
  onLight,
  key,
  className,
  children,
  onSystem,
}: Props) => {
  const { theme } = useTheme();
  return (
    <div
      key={key}
      className={cn(
        className,
        theme === "dark" ? onDark : theme === "light" ? onLight : onSystem
      )}
    >
      {children}
    </div>
  );
};

export default ColorSync;
