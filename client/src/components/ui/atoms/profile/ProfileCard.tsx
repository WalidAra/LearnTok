import { Box, Flex } from "@chakra-ui/react";
import { Avatar } from "@nextui-org/react";
import React from "react";
import LearnTokBadge from "../../global/LearnTokBadge";
import LearnTokLogo from "../../global/Logo";
import CopyUrlProfile from "./CopyUrlProfile";
import StatusContainer from "./StatusContainer";
import { BsDot } from "react-icons/bs";

const ProfileCard = () => {
  return (
    <section className="w-full flex flex-col gap-3">
      <div className="w-full center-div">
        <Avatar
          src="https://i.pinimg.com/564x/d7/b8/6a/d7b86a23cd5bc3593e9c5ea94b20927f.jpg"
          className=" sm:w-36 sm:h-36 w-28 h-28"
          isBordered
        />
      </div>

      <Box className="w-full flex flex-col gap-2 text-center">
        <Flex className="items-center justify-center gap-2">
          <h1 className="font-semibold text-3xl">Walid Ara</h1>
          <LearnTokBadge />
        </Flex>

        <Flex className="items-center justify-center gap-2 font-medium">
          <LearnTokLogo size={20} />
          <p>ExoticAra__</p>
          <CopyUrlProfile />
        </Flex>

        <p className=" text-base sm:text-lg font-medium">Joined 17 Nov 2019</p>

        <p className="text-sm sm:text-base" >
          👩‍💻 Tech Teacher 🌟 | Turning learners into coding pros! 💡| 👩‍💻 Tech
          Teacher 🌟
        </p>

        {/* 60 chars */}

        <Flex className="items-center justify-center sm:gap-1">
          <StatusContainer count={2} label="followings" />
          <BsDot className="size-5" />
          <StatusContainer count={5000} label="followers" />
          <BsDot className="size-5" />
          <StatusContainer count={2000} label="likes" />
        </Flex>
      </Box>
    </section>
  );
};

export default ProfileCard;
