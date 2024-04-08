import React from "react";
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
  Flex,
} from "@chakra-ui/react";
import { User } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import ColorSync from "@/components/ui/global/ColorSync";
export default function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger>
        <User
          className="cursor-pointer"
          name={
            <Flex className="items-center gap-2">
              <p className="hidden sm:block">Jane Doe</p>
              <ColorSync onSystem="dark: " onDark={""} onLight={"text-smText"}>
                <IoIosArrowDown />
              </ColorSync>
            </Flex>
          }
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            size: "sm",
            isBordered: true,
          }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
