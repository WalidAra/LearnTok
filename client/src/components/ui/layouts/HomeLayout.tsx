import React from "react";
import ColorSync from "../global/ColorSync";
import SideBar from "../molecules/SideBar";
import { Box } from "@chakra-ui/react";
import NavBar from "../molecules/NavBar";

const HomeLayout = ({ children }: Children) => {
  return (
    <ColorSync
      className="grid h-screen w-full pl-[53px]"
      onDark={""}
      onLight={"bg-background"}
      onSystem={"dark:"}
    >
      <SideBar />

      <Box className="w-full h-screen flex flex-col">
        <NavBar />
        {children}
      </Box>
    </ColorSync>
  );
};

export default HomeLayout;
