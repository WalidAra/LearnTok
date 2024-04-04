import React from "react";
import { User } from "@nextui-org/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import ColorSync from "@/components/ui/global/ColorSync";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function UserDropMenu() {
  return (
    <Popover>
      <PopoverTrigger>
        <User
          className="cursor-pointer"
          name={
            <div className="flex items-center xl:gap-2">
              <p className=" hidden xl:inline-block"> Jane Doe </p>

              <ColorSync
                className="text-lg"
                onDark={""}
                onLight={"text-smTextDarK"}
              >
                <MdOutlineKeyboardArrowDown />
              </ColorSync>
            </div>
          }
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            size: "sm",
            isBordered: true,
          }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
