import { Button } from "@/components/cli/button";
import React from "react";
import LearnTokLogo from "../../global/Logo";
import ColorSync from "../../global/ColorSync";

export default function SidebarIcon() {
  return (
    <>
      <ColorSync
        className="border-b lg:hidden p-2"
        onDark={""}
        onLight={"border-borderLight"}
        onSystem={"dark: border-borderLight"}
      >
        <Button variant="outline" size="icon" aria-label="Home">
          <LearnTokLogo size={20} />
        </Button>
      </ColorSync>
      <ColorSync
        className="border-b hidden lg:flex p-2 w-full "
        onDark={""}
        onLight={"border-borderLight"}
        onSystem={"dark: border-borderLight"}
      >
        <Button
          className="flex items-center justify-start hover:bg-transparent w-full gap-2"
          variant="ghost"
          size="default"
          aria-label="Home"
        >
          <LearnTokLogo size={20} />
          <h1 className="text-xl font-semibold">LearnTok</h1>
        </Button>
      </ColorSync>
    </>
  );
}
