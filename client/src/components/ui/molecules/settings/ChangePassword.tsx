import { Button } from "@/components/cli/button";
import { Input } from "@/components/cli/input";
import { Label } from "@/components/cli/label";
import { Box } from "@chakra-ui/react";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="border borer-border p-6 rounded-md flex flex-col gap-6">
      <Box className="flex flex-col">
        <p className="font-bold text-lg">Change Password</p>
        <p className="text-base">Here you can set your new password</p>
      </Box>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="old">Old Password</Label>
        <Input type="old" id="old" placeholder="old" />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="new">New Password</Label>
        <Input type="new" id="new" placeholder="new" />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="new-password">New Password Confirmation</Label>
        <Input
          type="new-password"
          id="new-password"
          placeholder="new-password"
        />
      </div>

      <div className="flex justify-end">
        <Button>Change Password</Button>
      </div>
    </div>
  );
};

export default ChangePassword;
