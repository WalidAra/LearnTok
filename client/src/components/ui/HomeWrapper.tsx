import React from "react";
import ColorSync from "./global/ColorSync";
import SideBar from "./home/SideBar";
import NavBar from "./home/NavBar";

const HomeWrapper = ({ children }: Children) => {
  return (
    <ColorSync
      className="relative w-full h-screen grid"
      onDark={""}
      onLight={"bg-background"}
    >
      <SideBar />
      <div className="flex flex-col w-full h-screen">
        <NavBar />
        {children}
      </div>
    </ColorSync>
  );
};

export default HomeWrapper;
