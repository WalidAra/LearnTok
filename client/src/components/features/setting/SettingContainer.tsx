import React from "react";
import UpdateUserInfo from "./UpdateUserInfo";
import { getProfile } from "@/lib/api/private/client";
import SessionPart from "./SessionPart";
import NewsLetter from "./NewsLetter";
import DeleteProfile from "./DeleteProfile";
import PopConfirmSave from "./PopConfirmSave";

type Props = {
  token: string;
};

const SettingContainer = async ({ token }: Props) => {
  const res = await getProfile({ token });

  if (res.status === true) {
    return (
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4">
        <PopConfirmSave token={token} />
        <UpdateUserInfo user={res.data} />
        <div className="flex-col flex gap-6">
          <SessionPart />
          <NewsLetter />
          <DeleteProfile token={token} />
        </div>
      </div>
    );
  }
};

export default SettingContainer;
