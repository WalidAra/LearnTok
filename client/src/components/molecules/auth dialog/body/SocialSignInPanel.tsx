import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  isSignInForm?: boolean;
};

const SocialSignInPanel = ({ isSignInForm = true }: Props) => {
  return (
    <Box className="flex flex-col w-full text-center">
      <h1 className="text-2xl font-semibold capitalize text-nowrap ">
        {isSignInForm ? "Login to your account" : "Sign up"}
      </h1>
      <p className="text-xs text-smTextDark">
        Discover, learn, and share your knowledge.
      </p>
    </Box>
  );
};

export default SocialSignInPanel;
