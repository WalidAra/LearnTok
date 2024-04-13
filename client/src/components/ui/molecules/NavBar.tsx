import React from "react";
import InputSearch from "../atoms/navbar/InputSearch";
import IsAuth from "../helpers/IsAuth";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 border-border flex h-[53px] items-center justify-between border-b bg-background px-2 xl:px-4">
      <InputSearch />
      <IsAuth />
    </header>
  );
};

export default NavBar;
