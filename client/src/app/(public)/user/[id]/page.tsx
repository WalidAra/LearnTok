import FollowButtonSection from "@/components/ui/atoms/profile/FollowButtonSection";
import ProfileCard from "@/components/ui/atoms/profile/ProfileCard";
import ProfileContent from "@/components/ui/atoms/profile/ProfileContent";
import MainView from "@/components/ui/molecules/MainView";
import api from "@/lib/apis";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const PublicUserProfile = async ({ params: { id } }: Props) => {
  const res: HTTPResponse = await api.getUserByID({ id });

  if (res.status) {
    return (
      <MainView className="px-4 sm:px-10 py-10 flex flex-col gap-6 items-center">
        <ProfileCard isClient={false} user={res.data as User} />
        <FollowButtonSection user_id={id} />
        <ProfileContent />
      </MainView>
    );
  }
};

export default PublicUserProfile;
