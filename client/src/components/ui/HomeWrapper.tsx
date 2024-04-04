import React from "react";
import ColorSync from "./global/ColorSync";
import SideBar from "./home/SideBar";
import NavBar from "./home/NavBar";
import MainView from "./home/MainView";

const HomeWrapper = ({ children }: Children) => {
  return (
    <ColorSync
      className="w-full h-screen grid grid-cols-auto1fr "
      onDark={""}
      onLight={""}
    >
      <SideBar />

      <div className="flex flex-col ">
        <NavBar />
        <MainView>{children}</MainView>
      </div>
    </ColorSync>
  );
};

export default HomeWrapper;
