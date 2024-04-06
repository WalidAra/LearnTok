import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
};

const MainView = ({ children, className }: Props) => {
  return (
    <main className={cn("grid flex-1 overflow-auto", className)}>
      {children}
    </main>
  );
};

export default MainView;
