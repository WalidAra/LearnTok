/* eslint-disable react/jsx-no-undef */
import MainView from "@/components/atoms/MainView";
import SettingContainer from "@/components/features/setting/SettingContainer";
import UserUpdateProvider from "@/providers/UpdateProfileProvider";
import { auth } from "@/utils/auth";
import React from "react";

const Settings = async () => {
  const session = await auth();

  if (session && session.user?.name) {
    return (
      <MainView className="w-full overflow-auto text-foreground relative p-2 md:p-3">
        <UserUpdateProvider>
          <SettingContainer token={session.user.name} />
        </UserUpdateProvider>
      </MainView>
    );
  } else {
    return null;
  }
};

export default Settings;
