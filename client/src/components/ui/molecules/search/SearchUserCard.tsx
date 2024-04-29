import React from "react";
import { User, Tooltip } from "@nextui-org/react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { auth } from "@/auth";
import UserFCard from "./UserFCard";

type Props = {
  user: User;
};

const Poster = async ({ user }: Props) => {
  const session = await auth();

  if (session && session?.user?.name) {
    return (
      <div className="w-full border-b border-border items-center flex justify-between">
        <Tooltip
          className="p-0 m-0 border-0 shadow-none "
          placement="right"
          content={<UserFCard token={session.user.name} user={user} />}
        >
          <Link href={`/user/${user.id}`}>
            <User
              className="cursor-pointer"
              name={
                <Flex className="items-center font-medium gap-2">
                  {" "}
                  {user.username}{" "}
                </Flex>
              }
              description={user.fullName}
              avatarProps={{
                src: user.picture ,
                className: "my-2",
              }}
            />
          </Link>
        </Tooltip>

        {/* <FollowButton /> */}
      </div>
    );
  }
};

export default Poster;
