import { auth } from "@/auth";
import FollowButtonSection from "@/components/ui/atoms/profile/FollowButtonSection";
import ProfileCard from "@/components/ui/atoms/profile/ProfileCard";
import ProfileContent from "@/components/ui/atoms/profile/ProfileContent";
import MainView from "@/components/ui/molecules/MainView";
import api from "@/lib/apis";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const PublicUserProfile = async ({ params: { id } }: Props) => {
  const session = await auth();
  if (!session || !session.user?.name) return;

  const check: HTTPResponse = await api.tokenIdMatch({
    token: session.user.name,
    user_id: id,
  });

  if (check.status) {
    return redirect("/profile");
  }

  const res: HTTPResponse = await api.getUserByID({ id });

  if (res.status) {
    return (
      <MainView className="px-4 sm:px-10 py-10 flex flex-col gap-6 items-center">
        <ProfileCard isClient={false} user={res.data as User} />
        <FollowButtonSection user_id={id} />
        <ProfileContent user_id={id} />
      </MainView>
    );
  }
};

export default PublicUserProfile;
