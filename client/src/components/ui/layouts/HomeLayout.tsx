import React from "react";
import SideBar from "../molecules/SideBar";
import { Box } from "@chakra-ui/react";
import NavBar from "../molecules/NavBar";
import AuthDialog from "../organisms/AuthDialog";

const HomeLayout = ({ children }: Kids) => {
  return (
    <div className="grid h-screen bg-background w-full pl-[53px] text-muted-foreground">
      <AuthDialog />
      <SideBar />

      <Box className="flex flex-col h-screen w-full">
        <NavBar />
        {children}
      </Box>
    </div>
  );
};

export default HomeLayout;
