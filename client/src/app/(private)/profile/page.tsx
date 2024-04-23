import { auth } from "@/auth";
import ProfileCard from "@/components/ui/atoms/profile/ProfileCard";
import ProfileContent from "@/components/ui/atoms/profile/ProfileContent";
import MainView from "@/components/ui/molecules/MainView";
import api from "@/lib/apis";
import React from "react";

const Profile = async () => {
  const session = await auth();
  let token: string = "";

  if (session?.user?.name) {
    token = session.user.name;
  }

  const res: HTTPResponse = await api.getUserProfile({ token });

  console.log("====================================");
  console.log(res.data);
  console.log("====================================");
  return (
    <MainView className="px-2 sm:px-10 pb-2  ">
      <div className="flex flex-col gap-6 items-center w-full overflow-x-hidden overflow-y-auto">
        <ProfileCard   user={res.data} />
        <ProfileContent />
      </div>
    </MainView>
  );
};

export default Profile;
