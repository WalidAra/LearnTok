import ProfileCard from "@/components/ui/atoms/profile/ProfileCard";
import ProfileContent from "@/components/ui/atoms/profile/ProfileContent";
import MainView from "@/components/ui/molecules/MainView";
import React from "react";

const Profile = () => {
  return (
    <MainView className="px-2 sm:px-10 pb-2  ">
      <div className="flex flex-col gap-6 items-center w-full overflow-x-hidden overflow-y-auto">
        <ProfileCard />
        <ProfileContent />
      </div>
    </MainView>
  );
};

export default Profile;
