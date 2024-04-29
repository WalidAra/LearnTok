"use client";

import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export default function Redirector() {
  useEffect(() => {
    signOut();
    toast("Session expired ");
  }, []);

  return <></>;
}