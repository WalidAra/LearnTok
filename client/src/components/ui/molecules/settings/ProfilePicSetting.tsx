"use client";
import { Button } from "@/components/cli/button";
import { Avatar, Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import { LuUploadCloud } from "react-icons/lu";

export default function ProfilePicSetting() {
  const picRef = useRef<HTMLInputElement>(null);
  return (
    <div className="p-6 border flex items-center gap-3 border-border rounded-md ">
      <Avatar size={'lg'} />
      <div>
        <Box className="flex flex-col gap-2 ">
          <input ref={picRef} type="file" className="hidden" />

          <Button className="flex items-center gap-2 w-40">
            <LuUploadCloud className="size-5" /> upload a photo
          </Button>

          <p className="text-sm font-medium">
            At least 256 x 256px PNG or JPG file.
          </p>
        </Box>
      </div>
    </div>
  );
}
