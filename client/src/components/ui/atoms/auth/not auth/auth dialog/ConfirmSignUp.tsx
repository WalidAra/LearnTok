"use client";
import React, { useRef } from "react";
import { InputWithLabel } from "./AuthInput";
import SocialSignInPanel from "./SocialSignInPanel";
import { Button } from "@/components/cli/button";

const ConfirmSignUp = () => {
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  return (
    <div className="w-full flex flex-col gap-4">
      <SocialSignInPanel isSignInForm={false} />
      <form className="w-full flex flex-col gap-4">
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

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default ConfirmSignUp;
