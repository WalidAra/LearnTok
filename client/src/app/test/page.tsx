import { auth } from "@/auth";
import LikeIconContainer from "@/components/ui/global/LikeIconContainer";
import React from "react";

const Test = async () => {
  const session = await auth();
  if (session?.user?.name) {
    return (
      <div className="w-full flex-1 center-div">
        <LikeIconContainer token={session.user.name} video_id="" />
      </div>
    );
  }
};

export default Test;
