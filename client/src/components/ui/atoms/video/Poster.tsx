/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { User, Tooltip } from "@nextui-org/react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import UserPopCard from "./UserPopCard";
import FollowButton from "../FollowButton";
import api from "@/lib/apis";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  token: string;
  isShown?: boolean;
};

const Poster = ({ id, token , isShown = true }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [badge, setBadge] = useState<string>("");
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res: HTTPResponse = await api.getUserByID({ id });
      if (res.status) {
        setUser(res.data as User);
      }

      const res2: HTTPResponse = await api.getStatusByID({
        status_id: res.data.status_id,
      });
      if (res2.status) {
        setBadge(res2.data.name);
      }

      const res3: HTTPResponse = await api.followState({
        user_id: res.data.id,
        token: token,
      });
      if (res3.status) {
        setIsFollowing(res3.data);
      }
    };

    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <div className="w-full items-center flex justify-between">
      <Tooltip
        className="p-0 m-0 border-0 shadow-none "
        placement="top-start"
        content={
          <UserPopCard
            following_id={user.id}
            setFollowing={setIsFollowing}
            following={isFollowing}
            user={user}
          />
        }
      >
        <Link href={`/user/${id}`}>
          <User
            className="cursor-pointer"
            name={
              <Flex className="items-center font-medium gap-2">
                {user.username}{" "}
                <div
                  className={cn(
                    "rounded size-2 ",
                    badge === "Active"
                      ? "bg-lightGreen"
                      : badge === "Warning"
                      ? "bg-lightOrange"
                      : "bg-lightRed"
                  )}
                ></div>
              </Flex>
            }
            description={user.fullName}
            avatarProps={{
              src: user.picture
                ? user.picture
                : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg",
            }}
          />
        </Link>
      </Tooltip>

      {isShown && (
        <FollowButton
          following_id={user.id}
          setFollowing={setIsFollowing}
          following={isFollowing}
        />
      )}
    </div>
  );
};

export default Poster;
