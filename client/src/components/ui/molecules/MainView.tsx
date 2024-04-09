import { cn } from "@/lib/utils";
import React from "react";

const MainView = ({ children, className }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <main className={cn("grid flex-1 overflow-auto", className)}>
      {children}
    </main>
  );
};

export default MainView;
