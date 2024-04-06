import React from "react";
import LogoSidebar from "./sidebar/LogoSidebar";
import { TooltipProvider } from "@/components/cli/tooltip";
import ItemSideBar from "./sidebar/ItemSideBar";
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
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r border-borderLight">
      <LogoSidebar />
      <TooltipProvider>
        <nav className="grid gap-1 p-2">
          <ItemSideBar tooltip="/home">
            <LuHome size={20} />
          </ItemSideBar>

          <ItemSideBar tooltip="/following">
            <LuUsers size={20} />
          </ItemSideBar>

          <ItemSideBar tooltip="/for you">
            <LuSparkles size={20} />
          </ItemSideBar>

          <ItemSideBar tooltip="/discover">
            <LuCompass size={20} />
          </ItemSideBar>

          <ItemSideBar tooltip="/trending">
            <LuTrendingUp size={20} />
          </ItemSideBar>

          <ItemSideBar tooltip="/bookmark">
            <LuBookmark size={20} />
          </ItemSideBar>
        </nav>
      </TooltipProvider>
    </aside>
  );
};

export default SideBar;
