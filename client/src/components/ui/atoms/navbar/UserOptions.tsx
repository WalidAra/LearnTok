"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/cli/dropdown-menu";

import { LuSun } from "react-icons/lu";
import { Button } from "@/components/cli/button";
import { useTheme } from "next-themes";
export default function UserOptions() {

  const {setTheme} = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={'outline'} >
          <LuSun className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border-border" >
        <DropdownMenuItem onClick={() => { setTheme('light') }}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('dark') }}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('system') }}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
