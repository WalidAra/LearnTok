import React from "react";
import UserMenuTrigger from "../atoms/navbar/UserMenuTrigger";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/cli/dropdown-menu";
import UserCard from "../atoms/UserCard";
import { LuUser2, LuSettings, LuMoon } from "react-icons/lu";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import ThemeSwitcher from "../atoms/ThemeSwitcher";
import LogOut from "../atoms/LogOut";

type Props = {
  id: string;
};

export default function UserMenu({ id }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserMenuTrigger id={id} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 w-60 shadow-none p-2 rounded-xl">
        <DropdownMenuLabel className="font-normal">
          <UserCard id={id} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href={"/profile"}>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <LuUser2 className="text-lg" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>

        <Link href={"/settings"}>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <LuSettings className="text-lg" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>

        <button className="flex items-center justify-between w-full relative rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground gap-2 cursor-pointer">
          <Flex className="items-center gap-2">
            <LuMoon className="text-lg" />
            <span>Dark mode</span>
          </Flex>

          <ThemeSwitcher />
        </button>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
