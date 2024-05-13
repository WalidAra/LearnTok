import { useFetch } from "@/hooks/useFetch";
import { Flex } from "@chakra-ui/react";
import React from "react";
import StatusContainer from "../features/profile/StatusContainer";
import { BsDot } from "react-icons/bs";

type Props = {
  id: string;
};

export default async function StatusStatesUser({ id }: Props) {
  const res = await useFetch({
    method: "GET",
    endPoint: `/user/${id}/profile-status`,
  });

  if (res.status === true) {
    return (
      <Flex className="items-center text-muted-foreground justify-center sm:gap-1">
        <StatusContainer count={res.data.followings} label="followings" />
        <BsDot className="size-5" />
        <StatusContainer count={res.data.followers} label="followers" />
        <BsDot className="size-5" />
        <StatusContainer count={res.data.likes} label="likes" />
      </Flex>
    );
  }
}
