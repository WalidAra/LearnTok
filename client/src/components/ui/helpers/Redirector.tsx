"use client";

import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export default function Redirector() {
  useEffect(() => {
    toast("Session expired ");
    const DestroyToken = async () => {
      await signOut({ callbackUrl: "/", redirect: true });
    };
    DestroyToken();
  }, []);

  return <div></div>;
}
