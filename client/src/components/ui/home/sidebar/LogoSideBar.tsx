import { Button } from "@/components/cli/ui/button";
import React from "react";
import LearnTokLogo from "../../global/Logo";
import Link from "next/link";

export default function LogoSideBar() {
  return (
    <Link href={"/"}>
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <LearnTokLogo size={20} />
        </Button>
      </div>
    </Link>
  );
}
