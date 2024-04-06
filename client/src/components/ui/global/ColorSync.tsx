"use client";
import { useTheme } from "@/context/Theme";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  onDark: string;
  onLight: string;
};

export default function ColorSync({ onDark, onLight, className, key }: Props) {
  const { isDark } = useTheme();

  return (
    <div key={key} className={cn(className, isDark ? onDark : onLight)}>
      ColorSync
    </div>
  );
}
