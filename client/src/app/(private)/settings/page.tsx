import MainView from "@/components/ui/molecules/MainView";
import AccountSetting from "@/components/ui/molecules/settings/AccountSetting";
import ChangePassword from "@/components/ui/molecules/settings/ChangePassword";
import DeleteProfile from "@/components/ui/molecules/settings/DeleteProfile";
import NewsLetter from "@/components/ui/molecules/settings/NewsLetter";
import ProfilePicSetting from "@/components/ui/molecules/settings/ProfilePicSetting";
import SessionPart from "@/components/ui/molecules/settings/SessionPart";
import React from "react";

const Settings = () => {
  return (
    <MainView className="md:grid-cols-2 grid-cols-1 gap-4 p-4">
      <div className="flex flex-col gap-6">
        <ProfilePicSetting />
        <AccountSetting />
        <ChangePassword />
      </div>
      <div className="flex-col flex gap-6">
        <SessionPart />
        <NewsLetter />
        <DeleteProfile />
      </div>
    </MainView>
  );
};

export default Settings;
