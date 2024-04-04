import React from "react";
import UserDropMenu from "./user options/UserDropMenu";
import NoteDropMenu from "./user options/NoteDropMenu";

export default function UserOptions() {
  return (
    <div className="flex items-center gap-2 xl:gap-5">
      <UserDropMenu />
      <NoteDropMenu />
    </div>
  );
}
