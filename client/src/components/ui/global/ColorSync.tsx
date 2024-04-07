"use client";

type Props = React.HTMLProps<HTMLDivElement> & {
  onDark: string;
  onLight: string;
  onSystem: string;
};

import { useTheme } from "@/context/Theme";
import { cn } from "@/lib/utils";
import React from "react";

const ColorSync = ({
  onDark,
  onLight,
  className,
  key,
  children,
  onSystem,
  onClick,
}: Props) => {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
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
