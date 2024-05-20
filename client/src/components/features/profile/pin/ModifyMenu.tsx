"use client";
import React from "react";
import { LuPenSquare, LuTrash2 } from "react-icons/lu";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteVideoDialog from "@/components/molecules/DeleteVideoDialog";
import EditVideoDialog from "@/components/molecules/EditVideoDialog";
import { useTheme } from "next-themes";

type Props = {
  token: string;
  video_id: string;
};

export default function ModifyMenu({ token, video_id }: Props) {
  const { theme } = useTheme();

  return (
    <Menu>
      <MenuButton className="rounded-full hover:bg-muted p-1.5 duration-150 border-border border ">
        <BsThreeDotsVertical className="size-5" />
      </MenuButton>
      <MenuList
        border={theme === "light" ? "" : "0"}
        w={"20px"}
        bg={theme === "light" ? "" : "#252836"}
      >
        <EditVideoDialog token={token} video_id={video_id}>
          <MenuItem
            bg={theme === "light" ? "" : "#252836"}
            className="flex items-center gap-2 border-b border-slate-600"
          >
            <LuPenSquare />
            <span>Edit</span>
          </MenuItem>
        </EditVideoDialog>
        <DeleteVideoDialog token={token} video_id={video_id}>
          <MenuItem
            bg={theme === "light" ? "" : "#252836"}
            color={"red"}
            className="flex items-center gap-2 "
          >
            <LuTrash2 />
            <span>Delete</span>
          </MenuItem>
        </DeleteVideoDialog>
      </MenuList>
    </Menu>
  );
}
