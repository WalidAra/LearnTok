import { Flex } from "@chakra-ui/react";
import React from "react";
import StatusContainer from "../features/profile/StatusContainer";
import { BsDot } from "react-icons/bs";
import { useFetch } from "@/hooks/useFetch";

type Props = {
  token: string;
};

const StatusStates = async ({ token }: Props) => {
  const res = await useFetch({
    method: "GET",
    endPoint: "/auth/profile-status",
    token,
    TokenInclude: true,
  });

  if (res.status) {
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
};

export default StatusStates;
