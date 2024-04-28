/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import api from "@/lib/apis";
import FollowButton from "../FollowButton";

type Props = {
  user: User;
  following: boolean;
  following_id: string;
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
};

type State = {
  followers: number;
  followings: number;
};

function formatNumber(number: number) {
  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(1) + "m";
  } else if (number >= 1000000000 && number < 1000000000000) {
    return (number / 1000000000).toFixed(1) + "b";
  } else {
    return number.toString();
  }
}

export default function UserPopCard({ user, following, setFollowing , following_id }: Props) {
  const [userState, setUserState] = useState<State>({
    followers: 0,
    followings: 0,
  });

  useEffect(() => {
    api.getOtherUserFollowers({ id: user.id }).then((res: HTTPResponse) => {
      setUserState((prev) => ({ ...prev, followers: res.data.length }));
    });
    api.getOtherUserFollowings({ id: user.id }).then((res: HTTPResponse) => {
      setUserState((prev) => ({ ...prev, followings: res.data.length }));
    });
  }, []);

  return (
    <Card className="w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={
              user.picture
                ? user.picture
                : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg"
            }
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {user.fullName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{user.username}
            </h5>
          </div>
        </div>
        <FollowButton
          following_id={following_id}
          following={following}
          setFollowing={setFollowing}
        />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="line-clamp-3">{user.bio ? user.bio : "no bio."}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {formatNumber(userState.followings)}
          </p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {formatNumber(userState.followers)}
          </p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
