/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "@/hooks/useFetch";
import { auth } from "@/utils/auth";
import React from "react";
import TabPanelsB from "../features/profile/TabPanelsB";

const ProfileContent = async () => {
  const session = await auth();

  if (session && session.user?.name) {
    const res = await useFetch({
      method: "GET",
      endPoint: "/auth/videos-book",
      token: session.user.name,
      TokenInclude: true,
    });

    return (
      <TabPanelsB
        createdVids={res.data.created}
        likedVids={res.data.liked}
        savedVids={res.data.saved}
        isClient
      />
    );
  }
};

export default ProfileContent;
