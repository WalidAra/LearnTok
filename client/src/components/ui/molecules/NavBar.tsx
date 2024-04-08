import React from "react";
import ColorSync from "../global/ColorSync";
import InputSearch from "../atoms/navbar/InputSearch";
import AuthIsTrue from "../atoms/navbar/AuthIsTrue";

const NavBar = () => {
  return (
    <ColorSync
      className="sticky top-0 z-10 h-[53px] border-b px-2 xl:px-4"
      onDark={""}
      onLight={"border-borderLight"}
      onSystem={"border-borderLight dark:"}
    >
      <header className="w-full justify-between items-center h-full flex">
        <InputSearch />
        <AuthIsTrue />
      </header>
    </ColorSync>
  );
};

export default NavBar;
