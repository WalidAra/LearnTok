import MainView from "@/components/atoms/MainView";
import ProfileFollowState from "@/components/features/profile/ProfileFollowState";
import ProfileInfo from "@/components/features/profile/ProfileInfo";
import UserContent from "@/components/features/profile/UserContent";
import StatusStatesUser from "@/components/utils/StatusStatesUser";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const UserProfile = async ({ params: { id } }: Props) => {
  const res = await useFetch({ method: "GET", endPoint: `/user/${id}` });

  if (res.status === true) {
    const data = res.data as User;
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
              <StatusStatesUser id={id} />
            </ProfileInfo>
          </section>
          <ProfileFollowState user_id={id} />
          <UserContent user_id={id} />
        </div>
      </MainView>
    );
  }
};

export default UserProfile;
