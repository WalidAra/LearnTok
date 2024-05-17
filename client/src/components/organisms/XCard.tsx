import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@nextui-org/react";
import { defaultPic } from "@/assets/pfp";
import FollowCheck from "../utils/FollowCheck";
import Link from "next/link";
import CardFooterXCard from "./x card/CardFooterXcard";

type Props = {
  user: User;
};

export default function XCard({ user }: Props) {
  return (
    <Card className="w-[340px] border-border border">
      <CardHeader className="justify-between">
        <Link href={`/user/${user.id}`}>
          <div className="flex gap-4">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={user.picture ? user.picture : defaultPic}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small hover:underline font-semibold leading-none text-default-600">
                {user.fullName}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @{user.username}
              </h5>
            </div>
          </div>
        </Link>

        <FollowCheck user_id={user.id} />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small overflow-hidden text-default-400">
        <p className="line-clamp-2">{user.bio ? user.bio : "No bio."}</p>
      </CardBody>
      <CardFooterXCard user_id={user.id} />
    </Card>
  );
}
