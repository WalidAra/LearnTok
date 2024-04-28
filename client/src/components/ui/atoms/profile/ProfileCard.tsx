import { Box, Flex } from "@chakra-ui/react";
import { Avatar } from "@nextui-org/react";
import React from "react";
import LearnTokBadge from "../../global/LearnTokBadge";
import LearnTokLogo from "../../global/Logo";
import CopyUrlProfile from "./CopyUrlProfile";
import { BsDot } from "react-icons/bs";
import UserFollowingsCount from "./UserFollowingsCount";
import UserFollowersCount from "./UserFollowersCount";
import UserLikesCount from "./UserLikesCount";

type Props = {
  user: Client;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[date.getMonth()];

  const formattedDate = `Joined ${date.getDate()} ${monthName} ${date.getFullYear()}`;

  return formattedDate;
}

const ProfileCard = ({ user }: Props) => {
  return (
    <section className="w-full flex flex-col gap-3 pt-10">
      <div className="w-full center-div">
        <Avatar
          src={
            user.picture
              ? user.picture
              : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg"
          }
          className=" sm:w-36 sm:h-36 w-28 h-28"
          isBordered
        />
      </div>

      <Box className="w-full flex flex-col gap-2 text-center">
        <Flex className="items-center justify-center gap-2">
          <h1 className="font-semibold text-3xl"> {user.fullName} </h1>
          <LearnTokBadge status_id={user.status_id} />
        </Flex>

        <Flex className="items-center justify-center gap-2 font-medium">
          <LearnTokLogo size={20} />
          <p> {user.username} </p>
          <CopyUrlProfile />
        </Flex>

        <p className=" text-base sm:text-lg font-medium">
          {formatDate(user.createdAt)}
        </p>

        <p className="sm:text-base text-sm font-medium">
          {user.bio ? user.bio : "no bio."}
        </p>

        <Flex className="items-center justify-center sm:gap-1">
          <UserFollowingsCount />
          <BsDot className="size-5" />
          <UserFollowersCount />
          <BsDot className="size-5" />
          <UserLikesCount />
        </Flex>
      </Box>
    </section>
  );
};

export default ProfileCard;
