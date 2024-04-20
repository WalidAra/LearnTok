import { Button } from "@/components/cli/button";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function DeleteProfile() {
  return (
    <div className="border border-border w-full p-6 rounded-md flex justify-between flex-wrap items-center gap-6">
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
