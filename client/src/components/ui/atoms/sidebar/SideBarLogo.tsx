import { Button } from "@/components/cli/button";
import React from "react";
import LearnTokLogo from "../../global/Logo";
import Link from "next/link";

export default function SideBarLogo() {
  return (
    <Link href={"/"}>
      <div className="border-b border-border p-2 md:px-6 flex justify-center items-center h-13">
        <Button
          className="md:hidden flex"
          variant="outline"
          size="icon"
          aria-label="Home"
        >
          <LearnTokLogo size={25} />
        </Button>

        <div className=" items-center justify-start gap-2 font-semibold w-full hidden md:flex">
          <LearnTokLogo size={25} />
          <span className="text-xl">Learntok</span>
        </div>
      </div>
    </Link>
  );
}
