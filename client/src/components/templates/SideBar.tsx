import React from "react";
import { Button } from "../cli/shadcn/button";
import LearnTokLogo from "../atoms/LearnTokLogo";
import Link from "next/link";
import {
  TooltipProvider,
} from "@/components/cli/shadcn/tooltip";
import {
  LuHome,
  LuUsers,
  LuSparkles,
  LuCompass,
  LuTrendingUp,
} from "react-icons/lu";
import ItemBar from "../molecules/sidebar/ItemBar";

const SideBar = () => {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r border-border">
      <div className="border-b border-border p-2">
        <Link href={"./"}>
          <Button variant="outline" size="icon" aria-label="Home">
            <LearnTokLogo size={25} />
          </Button>
        </Link>
      </div>
      <TooltipProvider delayDuration={1}>
        <nav className="grid gap-1 p-2">
          <ItemBar tooltip="/home">
            <LuHome size={20} />
          </ItemBar>

          <ItemBar tooltip="/following">
            <LuUsers size={20} />
          </ItemBar>

          <ItemBar tooltip="/for you">
            <LuSparkles size={20} />
          </ItemBar>

          <ItemBar tooltip="/discover">
            <LuCompass size={20} />
          </ItemBar>
          <ItemBar tooltip="/trending">
            <LuTrendingUp size={20} />
          </ItemBar>
        </nav>
      </TooltipProvider>
    </aside>
  );
};

export default SideBar;
