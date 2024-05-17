import { Box } from "@chakra-ui/react";
import React from "react";
import { Switch } from "@nextui-org/react";

const NewsLetter = () => {
  return (
    <div className="border border-border w-full p-2 md:p-4 rounded-md flex flex-col gap-6">
      <p className="font-bold text-lg"> Sessions</p>

      <Box className="flex items-center justify-between w-full">
        <div className="flex-col gap-1 flex">
          <p className="font-medium">Weekly newsletter</p>
          <p>Get notified about articles, discounts and new products.</p>
        </div>
        <Switch defaultSelected aria-label="Automatic updates" />
      </Box>
      <Box className="flex items-center justify-between w-full">
        <div className="flex-col gap-1 flex">
          <p className="font-medium">Weekly newsletter</p>
          <p>Get notified about articles, discounts and new products.</p>
        </div>
        <Switch defaultSelected aria-label="Automatic updates" />
      </Box>
      <Box className="flex items-center justify-between w-full">
        <div className="flex-col gap-1 flex">
          <p className="font-medium">Weekly newsletter</p>
          <p>Get notified about articles, discounts and new products.</p>
        </div>
        <Switch defaultSelected aria-label="Automatic updates" />
      </Box>
      <Box className="flex items-center justify-between w-full">
        <div className="flex-col gap-1 flex">
          <p className="font-medium">Weekly newsletter</p>
          <p>Get notified about articles, discounts and new products.</p>
        </div>
        <Switch defaultSelected aria-label="Automatic updates" />
      </Box>
    </div>
  );
};

export default NewsLetter;
