"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/cli/dropdown-menu";

import { LuSun } from "react-icons/lu";
import ColorSync from "@/components/ui/global/ColorSync";
import { useTheme } from "@/context/Theme";
import clientLocalStorage from "@/lib/clientLocalStorage";
export default function UserOptions() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ColorSync
          className="size-9 inline-flex hover:bg-accent justify-center items-center duration-200  border relative rounded-lg"
          onDark={""}
          onLight={"border-borderLight "}
          onSystem={"dark: border-borderLight"}
        >
          <LuSun className="size-5" />
        </ColorSync>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            clientLocalStorage.setItem("learntok-theme", "light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
            clientLocalStorage.setItem("learntok-theme", "dark");
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system");
            clientLocalStorage.setItem("learntok-theme", "system");
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
