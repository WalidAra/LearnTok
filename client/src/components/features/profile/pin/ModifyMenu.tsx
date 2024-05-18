import React from "react";
import { LuPenSquare, LuTrash2 } from "react-icons/lu";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteVideoDialog from "@/components/molecules/DeleteVideoDialog";
import EditVideoDialog from "@/components/molecules/EditVideoDialog";

type Props = {
  token: string;
  video_id: string;
};

export default function ModifyMenu({ token, video_id }: Props) {
  return (
    <Menu>
      <MenuButton className="rounded-full hover:bg-muted p-1.5 duration-150 border-border border ">
        <BsThreeDotsVertical className="size-5" />
      </MenuButton>
      <MenuList w={"20px"}>
        <EditVideoDialog token={token} video_id={video_id}>
          <MenuItem className="flex items-center gap-2">
            <LuPenSquare />
            <span>Edit</span>
          </MenuItem>
        </EditVideoDialog>
        <DeleteVideoDialog token={token} video_id={video_id}>
          <MenuItem color={"red"} className="flex items-center gap-2">
            <LuTrash2 />
            <span>Delete</span>
          </MenuItem>
        </DeleteVideoDialog>
      </MenuList>
    </Menu>
  );
}
