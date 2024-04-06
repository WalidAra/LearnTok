import React from "react";
import UserOptions from "./UserOptions";
import LoginBtn from "./LoginBtn";

export default function IsAuth() {
  const session = false;

  return <>{session ? <UserOptions /> : <LoginBtn />}</>;
}
