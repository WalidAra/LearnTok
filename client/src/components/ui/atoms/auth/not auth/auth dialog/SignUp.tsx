"use client";

import React, { useRef } from "react";
import SocialSignInPanel from "./SocialSignInPanel";
import OAuthContainer from "./OAuthContainer";
import { InputWithLabel } from "./AuthInput";
import { Button } from "@/components/cli/button";
import Or from "./Or";

const SignUp = () => {
  const usernameRef = useRef<any>(null);
  const fullNameRef = useRef<any>(null);
  return (
    <div className="w-full flex flex-col gap-4">
      <SocialSignInPanel isSignInForm={false} />
      <OAuthContainer />
      <Or />
      <form className="w-full flex flex-col gap-4">
        <InputWithLabel
          forwardRef={usernameRef}
          label="Username"
          placeholder="Username"
          type="text"
        />
        <InputWithLabel
          isForgetPassword={true}
          forwardRef={fullNameRef}
          label="Full name"
          placeholder="Full name"
          type="text"
        />

        <Button type="submit">Next</Button>
      </form>
    </div>
  );
};

export default SignUp;
