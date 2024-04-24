import api from "@/lib/apis";
import { Flex } from "@chakra-ui/react";
import { User } from "@nextui-org/react";
import React from "react";
import LearnTokBadge from "./LearnTokBadge";
import Link from "next/link";
import { auth } from "@/auth";

type Props = {
  id: string;
};

const UserCard = async ({ id }: Props) => {
  const session = await auth();
  const res: HTTPResponse = await api.getUserByID({ id });

  return (
    <Link href={`/user/${res.data.id}`}>
      <User
        name={
          <Flex className="items-center font-medium gap-2">
            {res.data.username} <LearnTokBadge status_id={res.data.status_id} />
          </Flex>
        }
        description={res.data.fullName}
        avatarProps={{
          src: res.data.picture ? res.data.picture : "",
        }}
      />
    </Link>
  );
};

export default UserCard;
