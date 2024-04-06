import React from "react";
import LogoSideBar from "./sidebar/LogoSideBar";
import { TooltipProvider } from "@/components/cli/ui/tooltip";
import ItemSideBar from "./sidebar/ItemSideBar";
import { LuHome } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";
import { LuCompass } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";
import { LuBookmark } from "react-icons/lu";
import ColorSync from "../global/ColorSync";

const SideBar = () => {
  return (
    <aside className="flex xl:w-[280px] h-screen flex-col border-r">
      <LogoSideBar />

      <nav className="grid gap-1 p-2">
        {/* <ColorSync onDark={""} className="text-xs" onLight={"text-muted-foreground"}>
          <p className="py-2 px-1 uppercase text-xs font-bold">menu</p>
        </ColorSync> */}
        <TooltipProvider delayDuration={1}>
          <ItemSideBar icon={<LuHome className="size-5" />} tooltip="home" />
          <ItemSideBar
            icon={<LuUsers2 className="size-5" />}
            tooltip="following"
          />
          <ItemSideBar
            icon={<LuSparkles className="size-5" />}
            tooltip="for you"
          />
          <ItemSideBar
            icon={<LuCompass className="size-5" />}
            tooltip="discover"
          />
          <ItemSideBar
            icon={<LuTrendingUp className="size-5" />}
            tooltip="trend"
          />
          <ItemSideBar
            icon={<LuBookmark className="size-5" />}
            tooltip="bookmark"
          />
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default SideBar;
