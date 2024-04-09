import { Button } from "@/components/cli/button";
import React from "react";
import LearnTokLogo from "../../global/Logo";
import Link from "next/link";

export default function SideBarLogo() {
  return (
    <Link href={"/"}  >
      <div className="border-b border-border p-2 h-13">
        <Button variant="outline" size="icon" aria-label="Home">
          <LearnTokLogo size={25} />
        </Button>
      </div>
    </Link>
  );
}
