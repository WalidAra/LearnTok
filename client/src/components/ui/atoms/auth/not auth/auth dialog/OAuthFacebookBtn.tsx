import { Button } from "@/components/cli/button";
import React from "react";
import { BsFacebook } from "react-icons/bs";

export default function OAuthFacebookBtn() {
  return (
    <Button className="flex justify-center items-center gap-2 w-full sm:w-auto">
      <BsFacebook className="text-blue-500" />
      <span>Login with facebook</span>
    </Button>
  );
}
