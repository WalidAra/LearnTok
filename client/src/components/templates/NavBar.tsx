import React from "react";
import InputSearch from "../molecules/navbar/InputSearch";
import NavBarAuthen from "../utils/NavBarAuthen";

const NavBar = () => {
  return (
    <header className="z-10 flex h-[57px] justify-between items-center gap-1 border-b bg-background px-4">
      <InputSearch />
      <NavBarAuthen />
    </header>
  );
};

export default NavBar;
