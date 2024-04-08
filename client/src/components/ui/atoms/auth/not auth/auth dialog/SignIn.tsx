"use client"
import React, { useRef } from "react";
import SocialSignInPanel from "./SocialSignInPanel";
import OAuthContainer from "./OAuthContainer";
import { InputWithLabel } from "./AuthInput";
import { Button } from "@/components/cli/button";

const SignIn = () => {
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  return (
    <div className="w-full flex flex-col gap-4">
      <SocialSignInPanel />
      <OAuthContainer />
      <InputWithLabel
        forwardRef={emailRef}
        label="Email"
        placeholder="Email"
        type="email"
      />
      <InputWithLabel
        isForgetPassword={true}
        forwardRef={passwordRef}
        label="Password"
        placeholder="Password"
        type="password"
      />

      <Button>Login</Button>
    </div>
  );
};

export default SignIn;
