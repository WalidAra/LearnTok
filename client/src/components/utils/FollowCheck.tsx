/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "@/hooks/useFetch";
import { auth } from "@/utils/auth";
import React from "react";
import FollowButton from "../atoms/FollowButton";

type Props = {
  user_id: string;
};

export default async function FollowCheck({ user_id }: Props) {
  const session = await auth();

  if (!session || !session.user?.name) {
    return (
      <FollowButton
        follow={false}
        token={""}
        user_id={user_id}
        isAuthenticated={false}
      />
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
        <FollowButton
          follow={false}
          token={""}
          user_id={user_id}
          isAuthenticated={false}
        />
      );
    }

    return (
      <FollowButton
        follow={response.data}
        token={session.user.name}
        user_id={user_id}
        isAuthenticated={true}
      />
    );
  }
}
