"use client";

import { Button } from "@/components/cli/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTheme } from "next-themes";

export default function OAuthGoogleBtn() {
  const googleAuth = new GoogleAuthProvider();
  const { theme } = useTheme();
  googleAuth.setCustomParameters({
    prompt: "select_account",
    login_hint: "user@example.com",
  });

  const handleOAuth = async () => {
    try {
      const firebaseResult = await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <Button
      variant={theme === "light" || theme === "system" ? "outline" : "default"}
      onClick={handleOAuth}
      className="flex justify-center items-center gap-2 w-full "
    >
      <FcGoogle className="text-lg" />
      <span>Login with Google</span>
    </Button>
  );
}
