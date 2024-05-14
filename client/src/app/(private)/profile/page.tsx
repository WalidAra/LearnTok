import MainView from "@/components/atoms/MainView";
import ProfileInfo from "@/components/features/profile/ProfileInfo";
import StatusStates from "@/components/utils/StatusStates";
import { getProfile } from "@/utils/api/private/client";
import { auth } from "@/utils/auth";
import React from "react";
import ProfileContent from "@/components/utils/ProfileContent";

const Profile = async () => {
  const session = await auth();

  if (session && session.user?.name) {
    const res = await getProfile({ token: session.user.name });

    if (res.status === true) {
      const data = res.data as Client;
      return (
        <MainView className="px-2 sm:px-10 pb-2 overflow-auto">
          <div className="flex flex-col gap-6 items-center w-full">
            <section className="w-full flex flex-col gap-3 pt-10">
              <ProfileInfo
                bio={data.bio}
                createdAt={data.createdAt}
                fullName={data.fullName}
                picture={data.picture}
                status_name={data.Status.name}
                username={data.username}
              >
                <StatusStates token={session.user.name} />
              </ProfileInfo>
            </section>
            <ProfileContent />
          </div>
        </MainView>
      );
    }
  }
};

export default Profile;
