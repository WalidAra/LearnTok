"use client";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  activeStyle?: string;
  isChecked?: boolean;
};

function IconButton({ children, onClick, activeStyle, isChecked }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "  p-2 duration-200 text-xl rounded-full border border-border center-div active:scale-75 hover:scale-105",

        isChecked && activeStyle ? activeStyle : "bg-muted"
      )}
    >
      {children}
    </button>
  );
}

export default React.memo(IconButton);
