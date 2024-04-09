import React from "react";
import SideBarLogo from "../atoms/sidebar/SideBarLogo";
import { TooltipProvider } from "@/components/cli/tooltip";
import SideNavItem from "../atoms/sidebar/SideNavItem";
import {
  LuHome,
  LuUsers,
  LuSparkles,
  LuCompass,
  LuTrendingUp,
  LuBookmark,
} from "react-icons/lu";

const SideBar = () => {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r border-border">
      <SideBarLogo />

      <TooltipProvider delayDuration={1} >
        <nav className="grid gap-1 p-2">
          <SideNavItem tooltip="/home">
            <LuHome size={20} />
          </SideNavItem>

          <SideNavItem tooltip="/following">
            <LuUsers size={20} />
          </SideNavItem>

          <SideNavItem tooltip="/for you">
            <LuSparkles size={20} />
          </SideNavItem>

          <SideNavItem tooltip="/discover">
            <LuCompass size={20} />
          </SideNavItem>
          <SideNavItem tooltip="/trending">
            <LuTrendingUp size={20} />
          </SideNavItem>
          <SideNavItem tooltip="/bookmark">
            <LuBookmark size={20} />
          </SideNavItem>
        </nav>
      </TooltipProvider>
    </aside>
  );
};

export default SideBar;
