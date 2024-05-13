/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { toast } from "sonner";
export default function Toaster() {
  useEffect(() => {
    const DestroyToken = async () => {
      await signOut({ redirect: false });
    };

    DestroyToken();
    return () => {
      const sessionExpirationDate = new Date();
      toast("Session Expired please sign-in", {
        description:
          sessionExpirationDate.toDateString() +
          " at " +
          sessionExpirationDate.toLocaleTimeString(),
        action: {
          label: "Undo",
          onClick: () => {},
        },
      });
    };
  }, []);

  return <div className="hidden"></div>;
}
