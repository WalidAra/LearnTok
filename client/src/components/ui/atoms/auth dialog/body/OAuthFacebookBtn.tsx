"use client";
import { Button } from "@/components/cli/button";
import { useTheme } from "next-themes";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function OAuthFacebookBtn() {
  const { theme } = useTheme();
  return (
    <Button
      variant={theme === "light" || theme === "system" ? "outline" : "default"}
      className="flex justify-center items-center gap-2 w-full "
    >
      <FaFacebook className="text-blue-500 shrink-0 text-lg" />
      <span>Login with facebook</span>
    </Button>
  );
}
