import React from "react";
import SideBar from "../molecules/SideBar";
import { Box } from "@chakra-ui/react";
import NavBar from "../molecules/NavBar";
import Authenticator from "../helpers/Authenticator";

const HomeLayout = ({ children }: Kids) => {
  return (
    <div className="grid h-screen bg-background w-full pl-[53px] md:pl-[220px] text-muted-foreground">
      <Authenticator />
      <SideBar />
      <Box className="flex flex-col h-screen w-full">
        <NavBar />
        {children}
      </Box>
    </div>
  );
};

export default HomeLayout;
