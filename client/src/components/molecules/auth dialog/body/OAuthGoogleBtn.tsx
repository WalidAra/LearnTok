/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/cli/shadcn/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "@/utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTheme } from "next-themes";
import { signIn } from "next-auth/react";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import { useFetch } from "@/hooks/useFetch";
import { toast } from "sonner";

export default function OAuthGoogleBtn() {
  const googleAuth = new GoogleAuthProvider();
  const { onClose } = useAuthDialog();
  const { theme } = useTheme();
  googleAuth.setCustomParameters({
    prompt: "select_account",
    login_hint: "user@example.com",
  });

  const handleOAuth = async () => {
    const result: any = await signInWithPopup(auth, googleAuth);
    const accessToken = result.user.accessToken as string;

    const res = await useFetch({
      method: "POST",
      body: { accessToken, recall: true },
      endPoint: "/oauth/google",
    });

    if (res.status === true && res.data.isBanned === false) {
      const nextAuth = await signIn("credentials", {
        token: res.token as string,
        callbackUrl: "/",
      });
      if (nextAuth?.ok) {
        onClose();
      }
    } else if (res.data.isBanned === true) {
      toast(
        "Your account has been banned.",
        {
          description:
            "please don't contact us you piece of human shit.",
          action: {
            label: "Close",
            onClick: () => {},
          },
        }
      );
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
