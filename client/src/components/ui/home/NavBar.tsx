import React from "react";
import IsAuth from "./navbar/IsAuth";
import InputSearch from "./navbar/InputSearch";

const NavBar = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 h-[53px] border-b">
      <InputSearch />
      <IsAuth />
    </header>
  );
};

export default NavBar;
