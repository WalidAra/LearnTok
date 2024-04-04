import React from "react";
import UserOptions from "./UserOptions";

export default function IsAuth() {
  const session = true;

  return <>{session ? <UserOptions /> : <></>}</>;
}
