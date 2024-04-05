import React from "react";
import ColorSync from "./global/ColorSync";
import SideBar from "./home/SideBar";
import NavBar from "./home/NavBar";
import MainView from "./home/MainView";

const HomeWrapper = ({ children }: Children) => {
  return (
    <ColorSync
      className="w-full h-screen flex"
      onDark={""}
      onLight={""}
    >
      <SideBar />

      <div className="flex flex-col w-full h-screen ">
        <NavBar />
        <MainView>{children}</MainView>
      </div>
    </ColorSync>
  );
};

export default HomeWrapper;
