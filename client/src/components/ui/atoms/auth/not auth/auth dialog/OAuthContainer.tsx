import { Flex } from "@chakra-ui/react";
import React from "react";
import OAuthGoogleBtn from "./OAuthGoogleBtn";
import OAuthFacebookBtn from "./OAuthFacebookBtn";

export default function OAuthContainer() {
  return (
    <Flex className="w-full flex items-center flex-wrap sm:flex-nowrap gap-2  sm:grid sm:grid-cols-2 sm:gap-6">
      <OAuthGoogleBtn />
      <OAuthFacebookBtn />
    </Flex>
  );
}
