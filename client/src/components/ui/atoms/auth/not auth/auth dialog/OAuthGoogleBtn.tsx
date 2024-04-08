import { Button } from "@/components/cli/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuthGoogleBtn() {
  return (
    <Button className="flex justify-center items-center gap-2 w-full sm:w-auto">
      <FcGoogle />
      <span>Login with google</span>
    </Button>
  );
}
