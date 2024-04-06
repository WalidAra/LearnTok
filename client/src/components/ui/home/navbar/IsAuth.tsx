import React from "react";
import LoginAuthDialog from "./auth/LoginAuthDialog";
import UserMenu from "./auth/UserMenu";
import NoteMenu from "./auth/NoteMenu";

export default function IsAuth() {
  const session = true;

  return (
    <>
      {session ? (
        <nav className="flex items-center gap-3 sm:gap-6">
          <UserMenu />
          <NoteMenu />
        </nav>
      ) : (
        <LoginAuthDialog />
      )}
    </>
  );
}
