"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { LuLogOut } from "react-icons/lu";

const LogOut = () => {
  return (
    <div
      onClick={async () => {
        signOut();
      }}
      className="flex items-center gap-2 w-full text-red-500 cursor-pointer"
    >
      <LuLogOut className="text-lg" />

      <span>Sign out</span>
    </div>
  );
};

export default LogOut;
