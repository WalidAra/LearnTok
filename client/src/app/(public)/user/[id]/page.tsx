import MainView from "@/components/atoms/MainView";
import ProfileInfo from "@/components/features/profile/ProfileInfo";
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
      <MainView className="px-2 sm:px-10 pb-2 ">
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
        </div>
      </MainView>
    );
  }
};

export default UserProfile;
