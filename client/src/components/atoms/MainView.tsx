import { cn } from "@/lib/utils";
import React from "react";

const MainView = ({ children, className }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <main className={cn("flex-1", className)}>
      {children}
    </main>
  );
};

export default MainView;
