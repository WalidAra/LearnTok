/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { toast } from "sonner";
;

export default function Toaster() {
  useEffect(() => {
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
