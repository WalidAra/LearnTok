import React from "react";

import { Button } from "@/components/cli/ui/button";
import { LuBellDot } from "react-icons/lu";
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
import ColorSync from "@/components/ui/global/ColorSync";

export default function NoteDropMenu() {
  return (
    <Menu>
      <MenuButton>
        <ColorSync
          className="p-2 rounded-md border "
          onDark={""}
          onLight={"border-border duration-150 hover:bg-slate-200"}
        >
          <LuBellDot size={20} />
        </ColorSync>
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
