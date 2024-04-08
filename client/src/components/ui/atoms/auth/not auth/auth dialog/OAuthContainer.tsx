import { Flex } from "@chakra-ui/react";
import React from "react";
import OAuthGoogleBtn from "./OAuthGoogleBtn";
import OAuthFacebookBtn from "./OAuthFacebookBtn";

export default function OAuthContainer() {
  return (
    <Flex className="w-full justify-center gap-5 flex-wrap items-center">
      <OAuthGoogleBtn />
      <OAuthFacebookBtn />
    </Flex>
  );
}
