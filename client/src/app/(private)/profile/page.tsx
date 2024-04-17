import ProfileCard from "@/components/ui/atoms/profile/ProfileCard";
import ProfileContent from "@/components/ui/atoms/profile/ProfileContent";
import MainView from "@/components/ui/molecules/MainView";
import React from "react";

const Profile = () => {
  return (
    <MainView className="px-4 sm:px-10 py-10 flex flex-col gap-6 items-center">
      <ProfileCard />
      <ProfileContent />
    </MainView>
  );
};

export default Profile;
