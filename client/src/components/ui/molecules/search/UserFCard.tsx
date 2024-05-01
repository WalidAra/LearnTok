"use client";
import React, { useEffect, useState } from "react";
import UserPopCard from "../../atoms/video/UserPopCard";
import api from "@/lib/apis";

type Props = {
  user: User;
  token: string;
};

export default function UserFCard({ user, token }: Props) {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res3: HTTPResponse = await api.followState({
        user_id: user.id,
        token: token,
      });
      if (res3.status) {
        setIsFollowing(res3.data);
      }
    };

    fetchUser();
  }, [token, user.id]);
  return (
    <UserPopCard
      following={isFollowing}
      following_id={user.id}
      setFollowing={setIsFollowing}
      user={user}
    />
  );
}
