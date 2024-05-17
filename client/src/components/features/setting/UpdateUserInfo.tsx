import React from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

type Props = {
  user: Client;
};

export default async function UpdateUserInfo({user}:Props) {
  return (
    <div className="w-full flex flex-col gap-6">
      <EditProfile user={user} />
      <ChangePassword />
    </div>
  );
}
