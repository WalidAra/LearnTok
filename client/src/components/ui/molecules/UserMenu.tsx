import React from "react";
import UserMenuTrigger from "../atoms/navbar/UserMenuTrigger";

type Props = {
  id: string ;
};

export default function UserMenu({ id }: Props) {
  return <UserMenuTrigger id={id} />;
}
