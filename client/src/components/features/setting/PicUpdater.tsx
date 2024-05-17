"use client";
import { defaultPic } from "@/assets/pfp";
import { Button } from "@/components/cli/shadcn/button";
import { useUserUpdate } from "@/providers/UpdateProfileProvider";
import { Text } from "@chakra-ui/react";
import { Avatar } from "@nextui-org/react";
import React, { useRef } from "react";

type Props = {
  picture: string;
};

export default function PicUpdater({ picture }: Props) {
  const picRef = useRef<HTMLInputElement>(null);
  const {
    picture: { pic, setPic },
  } = useUserUpdate();

  const handleFileInputClick = () => {
    if (picRef.current) {
      picRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPic(fileUrl);
      console.log("File selected:", file);
    }
  };

  return (
    <div className="w-full flex px-1 gap-4">
      <Avatar
        className="shrink-0"
        isBordered
        size="lg"
        src={pic ? pic : defaultPic}
      />

      <div className="flex flex-col gap-2">
        <input
          onChange={handleFileChange}
          className="hidden"
          ref={picRef}
          type="file"
        />
        <Button onClick={handleFileInputClick} className="w-40">
          Update picture
        </Button>
        <Text className="text-medium" fontSize={"14px"}>
          At least 256 x 256px PNG or JPG file.
        </Text>
      </div>
    </div>
  );
}
