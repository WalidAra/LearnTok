"use client ";

import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  onActive?: string;
  isLiked?: boolean;
};

const IconButton = ({ children, onClick, onActive , isLiked }: Props) => {
  return (
    <button
      aria-label="reactor-icon-button"
      onClick={onClick}
      className={cn(
        "rounded-full size-10 center border duration-150 hover:scale-105 active:scale-75",
        isLiked
          ? onActive + " border-transparent"
          : "bg-muted text-muted-foreground border-border"
      )}
    >
      {children}
    </button>
  );
};

export default React.memo(IconButton);
