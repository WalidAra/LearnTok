import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLButtonElement> & {
  onClick?: () => void;
};

function IconButton({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full w-9 h-9 shrink-0 flex justify-center hover:scale-105 items-center text-xl duration-150 active:scale-90 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}

export default React.memo(IconButton);
