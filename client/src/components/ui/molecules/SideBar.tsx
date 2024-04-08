import React from "react";
import SidebarIcon from "../atoms/sidebar/SidebarIcon";
import SidebarItem from "../atoms/sidebar/SidebarItem";
import { LuHome } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";
import { LuCompass } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";
import { LuBookmark } from "react-icons/lu";
import { TooltipProvider } from "@/components/cli/tooltip";
import ColorSync from "../global/ColorSync";

const SideBar = () => {
  return (
    <ColorSync
      className="border-r inset-y fixed left-0 z-20 h-full lg:w-56 "
      onDark={""}
      onLight={"border-borderLight"}
      onSystem={"dark: border-borderLight"}
    >
      <aside className="flex h-full w-full flex-col">
        <SidebarIcon />
        <TooltipProvider delayDuration={1}>
          <nav className="grid gap-1 p-2 w-full">
            <SidebarItem tooltip="/home">
              <LuHome className="size-5" />
            </SidebarItem>

            <SidebarItem tooltip="/following">
              <LuUsers className="size-5" />
            </SidebarItem>

            <SidebarItem tooltip="/for you">
              <LuSparkles className="size-5" />
            </SidebarItem>

            <SidebarItem tooltip="/discover">
              <LuCompass className="size-5" />
            </SidebarItem>
            <SidebarItem tooltip="/trending">
              <LuTrendingUp className="size-5" />
            </SidebarItem>
            <SidebarItem tooltip="/bookmark">
              <LuBookmark className="size-5" />
            </SidebarItem>
          </nav>
        </TooltipProvider>
      </aside>
    </ColorSync>
  );
};

export default SideBar;
