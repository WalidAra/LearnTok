import { Input } from "@/components/cli/input";
import { Label } from "@/components/cli/label";
import { Textarea } from "@/components/cli/textarea";
import { Box } from "@chakra-ui/react";
import React from "react";

const AccountSetting = () => {
  return (
    <div className="border border-border rounded-md p-6 flex flex-col gap-6">
      <Box className="flex flex-col">
        <p className="font-bold text-lg">Account Settings</p>
        <p className="text-base">
          Here you can change user account information
        </p>
      </Box>

      <Box className="w-full grid grid-cols-2 gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="username">Username </Label>
          <Input type="username" id="username" placeholder="username" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </Box>
      <Box className="w-full grid grid-cols-2 gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="first">First Name</Label>
          <Input type="first" id="first" placeholder="first" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="last">Last Name</Label>
          <Input type="last" id="last" placeholder="Email" />
        </div>
      </Box>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Bio</Label>
        <Textarea placeholder="Type your message here." id="message-2" />
      </div>
    </div>
  );
};

export default AccountSetting;
