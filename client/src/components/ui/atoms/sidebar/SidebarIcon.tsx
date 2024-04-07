import { Button } from "@/components/cli/button";
import React from "react";
import LearnTokLogo from "../../global/Logo";
import ColorSync from "../../global/ColorSync";

export default function SidebarIcon() {
  return (
    <ColorSync
      className="border-b  p-2"
      onDark={""}
      onLight={"border-borderLight"}
      onSystem={"dark:"}
    >
      <Button variant="outline" size="icon" aria-label="Home">
        <LearnTokLogo size={20} />
      </Button>
    </ColorSync>
  );
}
