/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button } from "@/components/cli/shadcn/button";
import { useFetch } from "@/hooks/useFetch";
import { Box } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  token: string;
};

export default function DeleteProfile({ token }: Props) {
  return (
    <div className="border border-border w-full p-2 md:p-4 rounded-md flex justify-between flex-wrap items-center gap-6">
      <Box className="flex flex-col">
        <p className="font-bold text-lg">Delete this account</p>
        <p className="text-base">
          Here you can permanently delete this account
        </p>
      </Box>

      <Button
        onClick={async () => {
          await useFetch({
            method: "DELETE",
            endPoint: "/auth/delete",
            token: token,
            TokenInclude: true,
          });

          await signOut({ callbackUrl: "/", redirect: true });
        }}
      >
        Delete account
      </Button>
    </div>
  );
}
