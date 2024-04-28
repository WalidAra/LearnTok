import { auth } from "@/auth";
import MainView from "@/components/ui/molecules/MainView";
import AccountSetting from "@/components/ui/molecules/settings/AccountSetting";
import ChangePassword from "@/components/ui/molecules/settings/ChangePassword";
import DeleteProfile from "@/components/ui/molecules/settings/DeleteProfile";
import NewsLetter from "@/components/ui/molecules/settings/NewsLetter";
import ProfilePicSetting from "@/components/ui/molecules/settings/ProfilePicSetting";
import SessionPart from "@/components/ui/molecules/settings/SessionPart";
import UpdateContainer from "@/components/ui/molecules/upload/UpdateContainer";
import DeleteAccDialog from "@/components/ui/organisms/DeleteAccDialog";
import DeleteAccountProvider from "@/context/DeleteAccount";
import UserUpdateProvider from "@/context/user-update";
import api from "@/lib/apis";
import React from "react";

const Settings = async () => {
  const session = await auth();

  if (session && session?.user?.name) {
    const res: HTTPResponse = await api.getUserProfile({
      token: session.user.name,
    });

    if (res.status) {
      const client = res.data as Client;
      return (
        <MainView className="md:grid-cols-2 grid-cols-1 gap-4 p-4 pb-20">
          <UserUpdateProvider>
            <UpdateContainer token={session.user.name} />
            <div className="flex flex-col gap-6">
              <ProfilePicSetting url={client.picture} />
              <AccountSetting />
              <ChangePassword />
            </div>
            <div className="flex-col flex gap-6">
              <SessionPart />
              <NewsLetter />
              <DeleteAccountProvider>
                <DeleteAccDialog />
                <DeleteProfile />
              </DeleteAccountProvider>
            </div>
          </UserUpdateProvider>
        </MainView>
      );
    } else return;
  }
};

export default Settings;
