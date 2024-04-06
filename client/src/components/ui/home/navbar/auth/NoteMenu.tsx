import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Button } from "@/components/cli/button";
import { LuBell } from "react-icons/lu";
import { cn } from "@/lib/utils";
export default function NoteMenu() {
  const arr = [2];

  return (
    <Menu>
      <MenuButton>
        <Button className="relative" size={"icon"} variant={"outline"}>
          <div
            className={cn(
              "absolute right-2 top-2 size-2 rounded-full bg-red-600 duration-300",
              arr.length > 0 ? "" : "scale-0"
            )}
          ></div>

          <LuBell className="size-5" />
        </Button>
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}
