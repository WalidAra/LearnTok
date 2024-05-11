import React from "react";
import InputSearch from "../molecules/navbar/InputSearch";
import NavBarAuthen from "../utils/NavBarAuthen";

const NavBar = () => {
  return (
    <header className="z-10 flex p-2 justify-between items-center gap-1 border-b border-border bg-background px-4">
      <InputSearch />
      <NavBarAuthen />
    </header>
  );
};

export default NavBar;
