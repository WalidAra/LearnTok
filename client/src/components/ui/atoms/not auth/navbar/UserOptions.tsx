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
import { LuSettings2 } from "react-icons/lu";
import ColorSync from "@/components/ui/global/ColorSync";
export default function UserOptions() {
  return (
    <Menu>
      <MenuButton>
        <ColorSync
          className="size-9 inline-flex hover:bg-accent justify-center items-center  border relative rounded-lg"
          onDark={""}
          onLight={"border-borderLight "}
          onSystem={"dark: border-borderLight"}
        >
          <LuSettings2 className="size-5" />
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
