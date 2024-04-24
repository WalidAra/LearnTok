import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";


export default function DeleteVideoButton() {
  return (
    <div className="absolute top-2 right-2 sm:right-4 sm:top-4 z-30">
      <Menu>
        <MenuButton>
          <BsThreeDotsVertical />
        </MenuButton>
        <MenuList w={'50px'} >
          <MenuItem className="flex items-center gap-2">
            <LuFileSignature />
            <p>update</p>
          </MenuItem>
          <MenuItem className="flex items-center gap-2 ">
            <LuTrash2 className="text-red-500" />
            <p className="text-red-500">delete</p>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
