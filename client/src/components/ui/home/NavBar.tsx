import React from "react";
import ColorSync from "../global/ColorSync";
import InputSearch from "./navbar/InputSearch";

const NavBar = () => {
  return (
    <ColorSync
      onDark={""}
      onLight={"border-borderLight"}
      className="border-b pl-[61px] sticky top-0 z-10 pr-4"
    >
      <header className="w-full flex h-[53px] items-center justify-between ">
        {/* inputSearch */}
        <InputSearch />
        {/* auth */}
      </header>
    </ColorSync>
  );
};

export default NavBar;
