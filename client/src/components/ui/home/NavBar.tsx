import React from "react";
import IsAuth from "./navbar/IsAuth";

const NavBar = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 h-[53px] border-b">
      <div></div>

      <IsAuth />
    </header>
  );
};

export default NavBar;
