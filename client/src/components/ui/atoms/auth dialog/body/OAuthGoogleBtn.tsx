"use client";

import { Button } from "@/components/cli/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTheme } from "next-themes";
import api from "@/lib/apis";
import { signIn } from "next-auth/react";
import { useAuthDialog } from "@/context/AuthDialog";

export default function OAuthGoogleBtn() {
  const googleAuth = new GoogleAuthProvider();
  const { onClose } = useAuthDialog();
  const { theme } = useTheme();
  googleAuth.setCustomParameters({
    prompt: "select_account",
    login_hint: "user@example.com",
  });

  const handleOAuth = async () => {
    try {
      console.log("====================================");
      const firebaseResult:any = await signInWithPopup(auth, googleAuth);
      
      const { accessToken } = firebaseResult.user;
      console.log(accessToken , firebaseResult);
      const response: HTTPResponseWithToken = await api.oAuthGoogle({
        accessToken: accessToken,
      });

      console.log(response);
      console.log("====================================");

      if (response.status) {
        const res = await signIn("credentials", {
          token: response.token,
          callbackUrl: "/",
        });
        onClose();
      }else{
        alert(response.message);
      }
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
