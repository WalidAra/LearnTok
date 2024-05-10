import { Box } from "@chakra-ui/react";
import React from "react";
import SocialSignInPanel from "./body/SocialSignInPanel";
import OAuthContainer from "./body/OAuthContainer";
import Or from "./body/Or";

type Props = {
  isSignInForm?: boolean;
  children: React.ReactNode;
};

export default function FormWrapper({ children, isSignInForm = true }: Props) {
  return (
    <Box className="flex flex-col gap-2 w-full px-1.5 shrink-0">
      <Box className="w-full flex flex-col gap-3">
        <SocialSignInPanel isSignInForm={isSignInForm} />
        <OAuthContainer />
        <Or />
      </Box>

      {children}
    </Box>
  );
}
