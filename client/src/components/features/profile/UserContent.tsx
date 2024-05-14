import { useFetch } from "@/hooks/useFetch";
import React from "react";
import TabPanelsB from "./TabPanelsB";

type Props = {
  user_id: string;
};

export default async function UserContent({ user_id }: Props) {
  const res = await useFetch({
    method: "GET",
    endPoint: `/user/${user_id}/videos-book`,
  });

  return (
    <TabPanelsB
      createdVids={res.data.created}
      likedVids={res.data.liked}
      savedVids={[]}
      isClient={false}
    />
  );
}
