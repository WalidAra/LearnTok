import UserPinWithPopCard from "@/components/molecules/UserPinWithPopCard";
import FollowCheck from "@/components/utils/FollowCheck";
import React from "react";

type Props = {
  user: User;
};

export default function SearchUserCard({ user }: Props) {
  return (
    <div className="w-full md:w-128 flex justify-between items-center px-2 py-2 border-y border-border">
      <UserPinWithPopCard user={user} />
      <FollowCheck user_id={user.id} />
    </div>
  );
}
