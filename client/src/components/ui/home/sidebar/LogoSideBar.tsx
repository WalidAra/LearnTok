import { Button } from "@/components/cli/ui/button";
import React from "react";
import LearnTokLogo from "../../global/Logo";
import Link from "next/link";

export default function LogoSideBar() {
  return (
    <Link className="w-full xl:" href={"/"}>
      <div className="border-b p-2  ">
        <Button
          className="xl:hidden flex"
          variant="outline"
          size="icon"
          aria-label="Home"
        >
          <LearnTokLogo size={23} />
        </Button>

        <Button
          variant="ghost"
          className="xl:flex items-center  hidden font-semibold gap-3 w-full justify-start hover:bg-transparent"
          size="default"
          aria-label="Home"
        >
          <LearnTokLogo size={20} />
          <h2 className="text-xl ">LearnTok</h2>
        </Button>
      </div>
    </Link>
  );
}
