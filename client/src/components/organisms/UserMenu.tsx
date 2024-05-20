import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/cli/shadcn/dropdown-menu";
import { LuUser2, LuSettings, LuMoon, LuUploadCloud } from "react-icons/lu";
import Link from "next/link";
import ThemeSwitcher from "../atoms/ThemeSwitcher";
import LogOut from "../atoms/LogOut";
import { Flex } from "@chakra-ui/react";
import { User } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import TwitterCard from "./TwitterCard";
import { defaultPic } from "@/assets/pfp";
type Props = {
  client: Client;
};

const UserMenu = ({ client }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-3">
          <User
            className="gap-3"
            name={
              <div className="flex items-center text-muted-foreground gap-2">
                <span className="font-medium hidden sm:block">
                  {client.username}
                </span>

                <IoIosArrowDown />
              </div>
            }
            avatarProps={{
              src: client.picture ? client.picture : defaultPic,
              size: "sm",
              isBordered: true,
            }}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 w-60 bg-secondary border-border outline-0 shadow-none p-2 rounded-xl mr-5 sm:mr-0">
        <DropdownMenuLabel className="font-normal">
          <TwitterCard
            username={client.username}
            fullName={client.fullName}
            pic={client.picture}
            status_name={client.Status.name}
          />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href={"/profile"}>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-muted-foreground">
            <LuUser2 className="text-lg" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>

        <Link href={"/upload"}>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-muted-foreground">
            <LuUploadCloud className="text-lg" />
            <span>Upload</span>
          </DropdownMenuItem>
        </Link>

        <Link href={"/settings"}>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-muted-foreground">
            <LuSettings className="text-lg" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>

        <button className="flex items-center justify-between w-full relative rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground gap-2 cursor-pointer">
          <Flex className="items-center gap-2 text-muted-foreground">
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
};

export default UserMenu;
