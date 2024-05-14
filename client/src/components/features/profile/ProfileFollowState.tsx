/* eslint-disable react-hooks/rules-of-hooks */
import ProfileFollowBtn from "@/components/atoms/ProfileFollowBtn";
import { useFetch } from "@/hooks/useFetch";
import { auth } from "@/utils/auth";
import React from "react";

type Props = {
  user_id: string;
};

export default async function ProfileFollowState({ user_id }: Props) {
  const session = await auth();

  if (!session || !session.user?.name) {
    return (
      <div className="w-full center">
        <ProfileFollowBtn following={false} token="" user_id="" />
      </div>
    );
  } else {
    const response = await useFetch({
      method: "POST",
      endPoint: "/follow/state",
      body: {
        user_id,
      },
      token: session.user.name,
      TokenInclude: true,
    });

    if (response.status === false && response.data.isItMe === true) {
      return null;
    } else if (response.status === false && response.data.isExpired === true) {
      return (
        <div className="w-full center">
          <ProfileFollowBtn following={false} token="" user_id="" />
        </div>
      );
    }
    return (
      <div className="w-full center">
        <ProfileFollowBtn
          following={response.data}
          token={session.user.name}
          user_id={user_id}
          isAuthenticated={true}
        />
      </div>
    );
  }
}
