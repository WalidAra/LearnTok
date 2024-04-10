import { Button } from "@/components/cli/button";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function OAuthFacebookBtn() {
  return (
    <Button className="flex justify-center items-center gap-2 w-full ">
      <FaFacebook className="text-blue-500 shrink-0" />
      <span>Login with facebook</span>
    </Button>
  );
}
