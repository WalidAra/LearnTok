import { Button } from "@/components/cli/button";
import React from "react";
import LearnTokLogo from "../../global/LearnTokLogo";
import ColorSync from "../../global/ColorSync";

export default function LogoSidebar() {
  return (
    <ColorSync
      className=" p-2 max-h-13 "
      onDark={""}
      onLight={"border-borderLight"}
    >
      <Button variant="outline" size="icon" aria-label="Home">
        <LearnTokLogo size={20} color="hsl(222.2 47.4% 11.2%)" />
      </Button>
    </ColorSync>
  );
}
