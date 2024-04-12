"use client";
// File: OAuthGoogleBtn.js
// Import necessary dependencies
import { Button } from "@/components/cli/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function OAuthGoogleBtn() {
  const googleAuth = new GoogleAuthProvider();

  googleAuth.setCustomParameters({
    prompt: "select_account",
    login_hint: "user@example.com",
  });

  const handleOAuth = async () => {
    try {
      const firebaseResult = await signInWithPopup(auth, googleAuth);
      console.log("====================================");
      console.log(firebaseResult);
      console.log("====================================");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <Button
      onClick={handleOAuth}
      className="flex justify-center items-center gap-2 w-full"
    >
      <FcGoogle />
      <span>Login with Google</span>
    </Button>
  );
}
