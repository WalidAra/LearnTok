"use client";
import { useTheme } from "@/context/Theme";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  onDark: string;
  onLight: string;
};

const ColorSync = ({ onDark, onLight, className, key, children }: Props) => {
  const theme = useTheme();
  return (
    <div key={key} className={cn(className, theme.isDark ? onDark : onLight)}>
      {children}
    </div>
  );
};

export default ColorSync;
