import React from "react";
import NavBar from "../templates/NavBar";
import SideBar from "../templates/SideBar";

const HomeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid bg-background h-screen w-full pl-[56px]">
      <SideBar />
      <div className="flex flex-col h-screen">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default HomeWrapper;
