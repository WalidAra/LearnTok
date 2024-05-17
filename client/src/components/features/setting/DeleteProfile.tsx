"use client";
import { Button } from "@/components/cli/shadcn/button";
// import { useDeleteDialog } from "@/context/DeleteAccount";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function DeleteProfile() {
  //   const { onOpen } = useDeleteDialog();

  return (
    <div className="border border-border w-full p-2 md:p-4 rounded-md flex justify-between flex-wrap items-center gap-6">
      <Box className="flex flex-col">
        <p className="font-bold text-lg">Delete this account</p>
        <p className="text-base">
          Here you can permanently delete this account
        </p>
      </Box>

      <Button>Delete account</Button>
    </div>
  );
}
